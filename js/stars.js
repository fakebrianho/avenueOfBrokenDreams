import * as THREE from "three";

class Stars {
  constructor(obj) {
    this.size = obj.size;
    this.geometry = new THREE.BufferGeometry();
    this.textureLoader = new THREE.TextureLoader();
    this.texture = obj.texture;
    this.colors = obj.colors;
    this.material = new THREE.PointsMaterial({
      size: this.size,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.001,
      alphaMap: this.textureLoader.load(this.texture),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    this.scene = obj.scene;
  }
  generate() {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    // const insideColor = new THREE.Color(this.color[0]);
    // const outsideColor = new THREE.Color(this.color[1]);
    for (let i = 0; i < count * 3; i++) {
      let x = (Math.random() - 0.5) * 5;
      colors[i] = colors[i + 1] = colors[i + 2] = x > 0 ? 0 : 0.5;
      // colors[i] = 0.5;
      positions[i] = x;
      // colors[i] = positions[i] = x;
    }
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(this.geometry, this.material);
    return particles;
    // this.scene.add(particles);
  }
}

export default Stars;
