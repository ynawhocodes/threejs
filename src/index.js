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
    camera.position.z = 4;
    // renderer
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 2, 12);
    scene.add(pointLight);
    // mesh 01
    const geometry = new THREE.TorusGeometry(0.3, 0.15, 16, 40);
    const material01 = new THREE.MeshBasicMaterial({ color: 0xff6200 });
    const cube01 = new THREE.Mesh(geometry, material01);
    cube01.position.x = -2;
    scene.add(cube01);
    // mesh 02
    const material02 = new THREE.MeshStandardMaterial({ color: 0xff6200, metalness: 0.5, roughness: 0.5, transparent: true, opacity: 0.5 });
    const cube02 = new THREE.Mesh(geometry, material02);
    cube02.position.x = -1;
    scene.add(cube02);
    // mesh 03
    const material03 = new THREE.MeshPhysicalMaterial({ color: 0xff6200, clearcoat: 1, clearcoatRoughness: 0.3 });
    const cube03 = new THREE.Mesh(geometry, material03);
    scene.add(cube03);
    cube03.position.x = 0;
    // mesh 04
    const material04 = new THREE.MeshLambertMaterial({ color: 0xff6200 });
    const cube04 = new THREE.Mesh(geometry, material04);
    scene.add(cube04);
    cube04.position.x = +1;
    // mesh 05
    const material05 = new THREE.MeshPhongMaterial({ color: 0xff6200, shininess: 60, specular: 0x004ff });
    const cube05 = new THREE.Mesh(geometry, material05);
    scene.add(cube05);
    cube05.position.x = +2;

    function render(time) {
        time *= 0.0005; // convert time to seconds
        cube01.rotation.y = time;
        cube02.rotation.y = time;
        cube03.rotation.y = time;
        cube04.rotation.y = time;
        cube05.rotation.y = time;
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);
} else {
    var warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}