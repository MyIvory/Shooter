import s from "./horisont_menu.module.css"
import HorisontMenuElement from "./horisont_menu_element/horisont_menu_element"

let HorisontMenu = (props)=>{
    return <div className={s.main}>
        <HorisontMenuElement text ="HOME"/>
        <HorisontMenuElement text ="WIKI"/>
        <HorisontMenuElement text ="ABOUT"/>
        <HorisontMenuElement text ="CONTACTS"/>
    </div>
}
export default HorisontMenu