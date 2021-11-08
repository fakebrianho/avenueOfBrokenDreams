/*------------------------------
Globals
------------------------------*/
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.Server(app);
const io = new Server(server);
const Datastore = require("nedb");
const database = new Datastore("database.db");
const linkDB = new Datastore("link.db");
const Bundler = require("parcel-bundler");
const file = "index.html";
const options = {
  outDir: "./dist",
  outFile: "index.html",
  publicUrl: "/",
  watch: true,
};
const bundler = new Bundler(file, options);
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const { docs } = require("googleapis/build/src/apis/docs");
const CLIENT_ID =
  "981183990874-7487a2vnmnromki0mmv0t3pvu761h7jv.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
// 981183990874-7487a2vnmnromki0mmv0t3pvu761h7jv.apps.googleusercontent.com","project_id":"avenueofbrokendreams-331500","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["https://developers.google.com/oauthplayground"]}}
const REFRESH_TOKEN =
  "1//04uEL07qx8xP0CgYIARAAGAQSNwF-L9IrFdDVJrzXfCgQwv4W4kHN9jROheRfEDJW5qUfbE2ZGtahaxCvFN5drgyd4971CydsFhE";
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
let arrLinks = [];
/*------------------------------
NeDB
------------------------------*/
database.loadDatabase();
linkDB.loadDatabase();
/*------------------------------
Google API
------------------------------*/

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
const filePath = path.join(__dirname, "girl.jpg");
async function createFolder() {
  var fileMetadata = {
    name: "avenueOfBrokenDreams",
    mimeType: "application/vnd.google-apps.folder",
  };
  drive.files.create(
    {
      resource: fileMetadata,
      fields: "id",
    },
    function (err, file) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        console.log("Folder Id: ", file.id);
      }
    }
  );
}

async function uploadFile() {
  const fileMetadata = {
    name: "girl.jpg",
    parents: ["1Jlz8EVk2TAYb1hi1vBFLkBJVeXAeeawX"],
  };
  try {
    const response = await drive.files.create({
      resource: fileMetadata,
      requestBody: {
        name: "beautifulgirl.jpg",
        mimeType: "image/jpg",
        parents: ["1Jlz8EVk2TAYb1hi1vBFLkBJVeXAeeawX"],
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(filePath),
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

const generatePublicURL = async (urlID, socket) => {
  try {
    const fileID = `${urlID}`;
    await drive.permissions.create({
      fileId: fileID,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId: fileID,
      fields: "webViewLink, webContentLink",
    });
    return result.data.webViewLink;
    // return result;
  } catch (error) {
    console.log(error);
  }
};
function listFiles() {
  drive.files.list(
    {
      q: '"1Jlz8EVk2TAYb1hi1vBFLkBJVeXAeeawX" in parents',
      fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        console.log("Files:");
        files.map((file) => {
          database.insert({
            file_name: file.name,
            file_id: file.id,
          });
          // console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log("No files found.");
      }
    }
  );
}
const addToDB = () => {
  database.find({}, function (err, docs) {
    for (let i = 0; i < docs.length; i++) {
      let temp = generatePublicURL(docs[i].file_id);
      generatePublicURL(docs[i].file_id);
      arrLinks.push(temp);
    }
    Promise.all(arrLinks).then((values) => {
      for (let i = 0; i < values.length; i++) {
        linkDB.insert({
          webLink: values[i],
        });
      }
    });
  });
};
// uploadFile();
// generatePublicURL("17Pv57alJu5sbXtT2U8v-r4xm7IhpxwjA");
// createFolder();
// listFiles();
// let test = addToDB();
/*------------------------------
Initialize
------------------------------*/
server.listen(3000);
io.on("connection", (socket) => {
  linkDB.find({}, function (err, docs) {
    io.to(socket.id).emit("hereYouGo", docs);
    // io.emit();
  });
  // database.find({}, function (err, docs) {
  //   for (let i = 0; i < docs.length; i++) {
  //     let temp = generatePublicURL(docs[i].file_id);
  //     generatePublicURL(docs[i].file_id);
  //     arrLinks.push(temp);
  //   }
  //   console.log("running?");
  //   Promise.all(arrLinks).then((values) => {
  //     io.emit("backToYou", values);
  //   });
  // });
});

app.use(bundler.middleware());
