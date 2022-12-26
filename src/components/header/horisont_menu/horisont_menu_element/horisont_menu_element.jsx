import s from "./horisont_menu_element.module.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

let HorisontMenuElement = (props) => {
  console.log(props.element);
  let style;
  if (props.element.isActivLink === true) {
    style = {
      backgroundColor: "#f7fbfe",
      boxShadow: "0px 0px 15px 15px #f7fbfe",
    };
  } else if(props.element.isActivLink === false) {
    style = { backgroundColor: "#e2e5e8" };
  }
  return (
    <motion.div
      onClick={() => {
        props.element.setActivLink(props.element.id);
      }}
      className={s.main}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      transition={{ duration: 0.01 }}
    >
      <Link to={props.element.id}>
        <motion.div
          className={s.circle}
          initial={ style}
          whileHover={{
            backgroundColor: "#f7fbfe",
            boxShadow: "0px 0px 15px 15px #f7fbfe",
          }}
          transition={{ duration: 0.01 }}
        >
          <motion.h3 className={s.text} initial={{ opacity: 1 }}>
            {props.element.name}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  );
};
export default HorisontMenuElement;
