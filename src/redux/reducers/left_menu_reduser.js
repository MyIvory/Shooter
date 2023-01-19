import {
    GiWinchesterRifle,
    GiAk47,
    GiBullets,
    GiCrosshair,
    GiMachineGunMagazine,
    GiMultipleTargets,
    GiSpyglass,
    GiTesla,
} from "react-icons/gi";
import { FaBinoculars } from "react-icons/fa"

const CLICK_MENU = "CLICK_MENU"

let initialState = {
    items: [
        getItem("Зброя", "guns", <GiAk47 style={{"fontSize":"25px"}}/>, [
            getItem(
                "Нарезнная",
                "g1",
                null,
                [getItem("Болтовая", "1"), getItem("Плуавтоматическая", "2"),getItem("Автоматическая", "3")],
                
            ),
            getItem(
                "Гладкоствольная",
                "g2",
                null,
                [getItem("Полуавтоматическая", "4"), getItem("Помповая", "21"), getItem("Переломная", "22")],
                
            ),
        ],),
        getItem("Боєприпаси", "sub2", <GiMachineGunMagazine style={{"fontSize":"25px"}}/>, [
            getItem("Option 5", "5"),
            getItem("Option 6", "6"),
            getItem("Submenu", "sub3", null, [
                getItem("Option 7", "7"),
                getItem("Option 8", "8"),
            ]),
        ]),
        getItem("Прицільні пристрої", "sub4", <GiTesla style={{"fontSize":"25px"}}/>, [
            getItem("Option 9", "9"),
            getItem("Option 10", "10"),
            getItem("Option 11", "11"),
            getItem("Option 12", "12"),
        ]),
        getItem("Опічні прилади", "sub5", <FaBinoculars style={{"fontSize":"25px"}}/>, [
            getItem("Option 13", "13"),
            getItem("Option 14", "14"),
            getItem("Option 15", "15"),
            getItem("Option 16", "16"),
        ]),
        getItem("Балістика", "sub6", <GiMultipleTargets style={{"fontSize":"25px"}} />, [
            getItem("Option 17", "17"),
            getItem("Option 18", "18"),
            getItem("Option 19", "19"),
            getItem("Option 20", "20"),
        ]),
    ],

}


const leftMenuReducer = (state = initialState, action) => {

    switch (action.type) {
        case CLICK_MENU:
            console.log("click ", action.e)
            break
    }
    return state
}
export default leftMenuReducer

export const leftMenuActionCreater =(e)=>{
    return{
        type:CLICK_MENU,
        e:e
    }
}
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
        onTitleClick:()=>{
            console.log(key)
        }
    };
}