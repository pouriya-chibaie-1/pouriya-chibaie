import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faHome,faUser ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/menuSide.module.scss"
import {useRouter} from 'next/router'
import { useRef } from "react";
const SideMenu = ({theme,setMode}) => {
    const router = useRouter()
    const RefH61=useRef(null)
    const RefH62=useRef(null)
    const RefH63=useRef(null)
    const RefH64=useRef(null)
    const RefImg1=useRef(null)
    const RefImg2=useRef(null)
    const RefImg3=useRef(null)
    const RefImg4=useRef(null)
 
    const menuItems=[
    {name:"HOME",location:"/",iconH:"headerIcon/homeIconHover.svg",iconL:"headerIcon/homeIconLight.svg",iconD:"headerIcon/homeIconDark.svg",RefH6:RefH61,refImg:RefImg1},
    {name:"ABOUT",location:"/about",iconH:"headerIcon/aboutIconHover.svg",iconL:"headerIcon/aboutIconL.svg",iconD:"headerIcon/aboutIconD.svg",RefH6:RefH62,refImg:RefImg2},
    {name:"PORTFOLIO",location:"/portfolio",iconH:"headerIcon/briefcaseIconHover.svg",iconL:"headerIcon/briefcaseIconL.svg",iconD:"headerIcon/briefcaseIconD.svg",RefH6:RefH63,refImg:RefImg3},
    {name:"CONTACT",location:"/contact",iconH:"headerIcon/contactIconHover.svg",iconL:"headerIcon/contactIconL.svg",iconD:"headerIcon/contactIconD.svg",RefH6:RefH64,refImg:RefImg4}
]
const showName=(refh6,refImg,index)=>{
 refh6.current.style.visibility = "visible"
 refImg.current.src=menuItems[index].iconH
}
const hiddenName=(refh6,refImg,index)=>{
    refh6.current.style.visibility="hidden"
    if(theme==true){
      refImg.current.src=menuItems[index].iconD
    }
    else{
        refImg.current.src=menuItems[index].iconL
    }
}
    return (<>
    <div className={theme==true?`${styles.sideDark}` :`${styles.sideLight}`}>
        <ul>
    {menuItems.map((item,index)=>
    (<div key={index} 
    className={styles.divItem}>
    <li onMouseOver={()=>showName(item.RefH6,item.refImg,index)}
    onMouseOut={()=>hiddenName(item.RefH6,item.refImg,index)} 
    onClick={()=>router.push(item.location)} 
    className={theme ==false? styles.menuItemLight :styles.menuItemDark} >
    <img src={theme==true?`${item.iconD}`:`${item.iconL}`}ref={item.refImg} className={styles.headerImage} />
   
    </li>
    <h6 key={index} className={styles.itemName}  ref={item.RefH6}>{item.name}
    </h6>
    </div>))}
        </ul>
        </div>
    </>  );
}
 
export default SideMenu;