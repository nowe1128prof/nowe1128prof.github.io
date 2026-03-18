import * as THree from 'three';

const scene = new THREE.Scene();
scene.background = THREE.COLOR(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 2, 0);

window.addEventListener('pointerdown', (event)=> {
	mouse.X = (event.clientX / window.innerWidth) * 2 -1;
	mouse.Y = (event.clientY / window.innerHeight) * 2 +1;

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObject(ball);

	if ( intersects.lenght > 0){
		isDragging = true;
		velocity = 0;

		const normal = new THREE.Vector3();
		camera.getWorldDirection(normal);
		dragPlane.setFromCameraAndCoplanarPoint(normal.negate(), ball.position);
	}
})
