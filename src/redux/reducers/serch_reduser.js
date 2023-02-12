let initialState = []
const SET_FOUND = "SET_FOUND"


let searchReduser = (state = [], action)=>{
    switch (action.type) {
        case SET_FOUND:            
            state = action.obj
            break
    }
    return state

}
export default searchReduser

export const searchActionCreater =(obj)=>{
    return{
        type:SET_FOUND,
        obj:obj
    }
}

