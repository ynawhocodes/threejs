import * as THREE from "three";
import { WEBGL } from "./webgl";

if (WEBGL.isWebGLAvailable()) {
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    // camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 2;
    // renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // mesh
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6200 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function render(time) {
        time *= 0.001; // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
} else {
    var warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}