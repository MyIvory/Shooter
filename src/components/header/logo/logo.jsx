import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import s from "./logo.module.css";
import logo from "./logo.png"
let Logo = (props) => {
  return (
    <div className={s.main}>
      <img src={logo} alt="Logo" className={s.image} />
    </div>
  );
};
export default Logo;
