import s from "./info.module.css"
let Info = (props) => {
  return (
    <div className={s.main}>
 {fun(10000,"i")} 
    </div>
  )
  
};
export default Info;

let fun =(c,i)=>{
   return new Array(c).fill(i).join(" ")
  
}