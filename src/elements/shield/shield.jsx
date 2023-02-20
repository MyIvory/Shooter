import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Shield = () => {
    const mount = useRef(null);

    useEffect(() => {
      // Создаем сцену, камеру и рендерер
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor("#000000");
      renderer.setSize(200, 200); // установили размеры сцены 100 на 100 пикселей
      mount.current.appendChild(renderer.domElement);
  
      // Создаем геометрию щита
      const geometry = new THREE.ShapeGeometry(
        new THREE.Shape([
          new THREE.Vector2(-1, 1.5),
          new THREE.Vector2(-2.5, 0),
          new THREE.Vector2(-2.5, -1),
          new THREE.Vector2(-1, -1.5),
          new THREE.Vector2(0, -2.5),
          new THREE.Vector2(1, -1.5),
          new THREE.Vector2(2.5, -1),
          new THREE.Vector2(2.5, 0),
          new THREE.Vector2(1, 1.5),
          new THREE.Vector2(0, 2.5),
          new THREE.Vector2(-1, 1.5)
        ])
      );
  
      // Создаем материал щита
      const material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        shininess: 100,
        specular: 0xffffff
      });
  
      // Создаем объект меши, объединяющий геометрию и материал щита
      const shield = new THREE.Mesh(geometry, material);
  
      // Добавляем щит на сцену
      scene.add(shield);
  
      // Создаем свет для создания объемного эффекта
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1);
      scene.add(light);
  
      // Устанавливаем положение камеры
      camera.position.z = 4;
  
      // Создаем функцию анимации
      const animate = () => {
        requestAnimationFrame(animate);
       // shield.rotation.x += 0.01;
        shield.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
  
      // Запускаем анимацию
      animate();
  
      return () => {
        // Удаляем рендерер при размонтировании компоненты
        mount.current.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={mount} />;
  }

export default Shield;
