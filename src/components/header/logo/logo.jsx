import s from "./logo.module.css"
let Logo = (props)=>{
    return <div className={s.main}>
   
            <img className={s.image} src="img/rifle-1.png"/>
        
        <div className = {s.text}>
            <h3>PRO SHOOTER</h3>
        </div>
    </div>
}
export default Logo