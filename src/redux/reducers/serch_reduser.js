let initialState = []
const SET_FOUND = "SET_FOUND"


let searchReduser = (state = [], action)=>{
    switch (action.type) {
        case SET_FOUND:
          return action.obj.map(item => {
            let text = item.text.split("/s").join("");
            return { ...item, text };
          });
        default:
          return state;
      }
}
export default searchReduser

export const searchActionCreater =(obj)=>{
    return{
        type:SET_FOUND,
        obj:obj
    }
}

