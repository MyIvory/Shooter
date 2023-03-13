import s from "./controls.module.css";
import LengComponent from "./leng/leng";
const Controls = (props) => {
  return (
    <div className={s.main}>
      <LengComponent />
    </div>
  );
};
export default Controls;
