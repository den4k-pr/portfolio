import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

interface PlanetComponentProps {
  size: number;
}

export const PlanetComponent: React.FC<PlanetComponentProps> = ({ size }) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(() => {
    const cam = new THREE.PerspectiveCamera(46, size / size, 0.1, 1000);
    cam.position.z = 5;
    return cam;
  }, [size]);
  const renderer = useMemo(() => new THREE.WebGLRenderer({ alpha: true }), []);

  useEffect(() => {
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);

    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();

    let sphere: THREE.Mesh;

    textureLoader.load('/icons/proto-5.png', (texture) => {
      const material = new THREE.MeshBasicMaterial({ map: texture });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const animate = () => {
        if (sphere) {
          sphere.rotation.x += -0.001;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [size, scene, camera, renderer]);

  return <div ref={sceneRef} className='planet' />;
};
