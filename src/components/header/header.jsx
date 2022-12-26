import s from "./header.module.css"
import HorisontMenu from "./horisont_menu/horisont_menu"
import Logo from "./logo/logo"
let Header = ()=>{
    return <div className={s.header}>
         <HorisontMenu/>
         <Logo/> 
    </div> 
}
export default Header