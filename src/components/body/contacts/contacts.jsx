import s from "./contacts.module.css"
let Contacts = (props) => {
  return (
    <div className={s.main}>
 {fun(10000,"c")} 
    </div>
  )
  
};
export default Contacts;

let fun =(c,i)=>{
   return new Array(c).fill(i).join(" ")
  
}