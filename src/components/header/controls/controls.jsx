import s from "./controls.module.css";
import Leng from "./leng/leng";
import SearchField from "./search/search";
import Search from "./search/search";
const Controls = (props) => {
  return (
    <div className={s.main}>
      <Leng />
      <SearchField />
    </div>
  );
};
export default Controls;
