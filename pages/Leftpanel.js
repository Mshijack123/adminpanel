import Image from "next/image"
import logo from '../public/left.png'
import arrow from '../public/close.png'
import LeftMenu from "./LeftMenu"
export default function Leftpanel(){
    return(
        <div className="left-panel">
               <div className="left-logo">
                  <Image src={logo}/>
                  <h2 style={{fontSize:'23.5618px',lineHeight:'31px',color:'white'}}>Name</h2>
                 <Image src={arrow}/>
               </div>
                         
               <LeftMenu/>
              
 
        </div>
    )
}