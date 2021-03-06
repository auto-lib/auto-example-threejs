
import * as THREE from 'https://cdn.skypack.dev/three@0.138.2';

// --- This is what the code normally looks like ---

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
    
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

// animate();

// --- This is what is looks like with auto ---

let _ = auto({
    
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    renderer: new THREE.WebGLRenderer(),

    set0: (_) => _.renderer.setSize( window.innerWidth, window.innerHeight ),
    set1: (_) => document.body.appendChild( _.renderer.domElement ),

    geometry: new THREE.BoxGeometry(),
    material: new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
    cube: (_) => new THREE.Mesh( _.geometry, _.material ),

    set2: (_) => _.scene.add( _.cube ),
    set3: (_) => _.camera.position.z = 5
});

function animate() {

    requestAnimationFrame( animate );

    _.cube.rotation.x += 0.01;
    _.cube.rotation.y += 0.01;

    _.renderer.render( _.scene, _.camera );
};

animate();

// -- Why ? --

// Well, everything is parametric: change any of the variables
// and all the others will tie together automatically.

// So for example, let's say we change the material above:

// {
// 	...
// 	material: new THREE.MeshBasicMaterial( { color: 0x00ee00 })
// 	...
// }

// everything else will wire together as before: 'cube' will
// be greated with this material, and then this cube will
// be added to the scene as before.

// "Isn't this like a normal program"? Here order doesn't
// matter - you don't have to run commands (like scene.add)
// in the right order. So you don't have to worry about
// orchestrating these commands - just keep adding features.

// How this might help in this scenario, a good example of
// how it could be very useful, I'm still trying to figure
// out ...
