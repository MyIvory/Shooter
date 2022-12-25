import s from "./horisont_menu_element.module.css"

let HorisontMenuElement =(props)=>{
    return <div className={s.main}>
            <h3>{props.text}</h3>
    </div>
}
export default HorisontMenuElement