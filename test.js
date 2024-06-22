import  { RaytracingRenderer } from './index.js'
import * as THREE from 'three'

let renderer = new RaytracingRenderer();
var width = 80;
var height = 30;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
camera.position.y = 150;
camera.position.z = 500;

const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
pointLight1.position.set(500, 500, 500);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight2.position.set(- 500, - 500, - 500);
scene.add(pointLight2);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 4, 3), new THREE.MeshPhongMaterial({ color: 0xf0f00f }));
scene.add(sphere);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
plane.position.y = - 200;
plane.rotation.x = - Math.PI / 2;
scene.add(plane);

renderer.setClearColor(0xffffff);
renderer.setSize(width, height);

function render() {
    scene.autoUpdate = true;
    const timer = Date.now();

    sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
    sphere.rotation.x = timer * 0.0003;
    sphere.rotation.z = timer * 0.0002;

    var rendered = renderer.render( scene, camera );

    return rendered;
}

import fs from 'fs'
let ref = fs.readFileSync('./node_modules/three/build/three.module.min.js', { encoding: 'utf-8' })
    // .replace(/\n/g, ' ');
let i = 0;
let slowi = 0;

function ascii() {
    let rendered = render();

    let output = [];
    i = slowi;
    slowi += 2;  // 1 2 5 or width works well

    // clear
    console.log('\x1B[H\x1B[2J');

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = rendered.data[index + 0];
            const g = rendered.data[index + 1];
            const b = rendered.data[index + 2];
            // const char = '@'
            const char = ref[i++ % ref.length];

            output.push(`\x1b[38;2;${r};${g};${b}m${char}\x1b[0m`);
        }
        output.push('\n')
    }

    console.log(output.join(''))
}

ascii();

if (typeof process !== 'undefined') {
    // run with
    // `bun run test --loop` or
    // `node test --loop`
    if (process.argv[2] === '--loop') {
        setInterval(ascii, 20)
    }
}
