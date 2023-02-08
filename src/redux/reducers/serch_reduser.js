let initialState = {a:1,b:2}
const CLICK_SEARCH = "CLICK_SEARCH"


let searchReduser = (state = initialState, action)=>{
    switch (action.type) {
        case CLICK_SEARCH:            
            console.log("click ", action.obj)
            break
    }
    return state

}
export default searchReduser

export const searchActionCreater =(obj)=>{
    return{
        type:CLICK_SEARCH,
        obj:obj
    }
}