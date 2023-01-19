import { Menu,SubMenuProps } from "antd";
import { connect } from "react-redux";
import { leftMenuActionCreater } from "../../../../redux/reducers/left_menu_reduser";

const { onTitleClick, ...rest } = Menu;
let mapStateToProps = (state) => {
  return {
    selectable: false,
    style: {
      width: 300,
      color: "red",
      fontSize:"16px"
    },
    mode: "inline",
    items: state.leftMenuState.items,
    
  };
};
let mapDispatchToProps = (dispatch) => {
    return {
      onClick: (e) => {
      dispatch(leftMenuActionCreater(e));
    },

  };
};
const LeftMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default LeftMenu;
