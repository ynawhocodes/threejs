# three.js
## Step 01) 3D 도형 추가하기
![step01](https://user-images.githubusercontent.com/48620082/231376759-f20f2661-bb5a-4540-8329-9cdb7d13f32a.gif)
- 3D 도형 회전하며 렌더하기
- 반응형 적용하기
### code
- scene
```js
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(0xffffff);
```
- camera
```js
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   camera.position.z = 2;
```
- mesh
```js
   const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
   const material01 = new THREE.MeshStandardMaterial({ color: 0xff6200 });
   const cube01 = new THREE.Mesh(geometry01, material01);
   cube01.position.x = -1;
   scene.add(cube01);
```
- render
```js
function render(time) {
    time *= 0.0005;

    cube01.rotation.x = time;
    cube01.rotation.y = time;
    cube02.rotation.x = time;
    cube02.rotation.y = time;
    cube03.rotation.x = time;
    cube03.rotation.y = time;
    renderer.render(scene, camera);

    requestAnimationFrame(render);
   }
requestAnimationFrame(render);
```
- 반응형
```js
 function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
 }
 window.addEventListener('resize', onWindowResize);
```
### Start
```
  git clone https://github.com/ynawhocodes/threejs.git
  git checkout step01
  npm start
```
