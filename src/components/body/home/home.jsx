import VideoBackground from "../../../elements/videoBackGround/videoBackGround";
import s from "./home.module.css"
let Home = (props) => {
  return (
    <>
    <VideoBackground/>
    <div className={s.main}>
 {fun(10000,"h")} 
    </div>
    </>
  )
  
};
export default Home;

let fun =(c,i)=>{
   return new Array(c).fill(i).join(" ")
  
}