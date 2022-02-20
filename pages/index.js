import Leftpanel from "./Leftpanel";
import Banner from "./Banner";
import Reward from "./Reward";
import Refer from "./Refer";
import Tabs from "./Tabs";
import Image from "next/image";
import icon from '../public/Ellipse 131.png';
import icon2 from '../public/Vector (6).png';
import icon3 from '../public/Group 16082.png';
export default function Home() {
  return (
      <div className='full-body'>
       
         <div className="upperbar">
              <h3>Lorem Ipsum is simply dummy text of the printing</h3>
         </div>      
        
           <div className="inner-body">

              <div className="left">
               <Leftpanel/>
               <div className="divider">
                   
               </div>
              </div>
                    
            <div className="center">
               <Banner/>
                <Reward/>
                <Refer/>

                <Tabs/> 

                


            </div>
            <div className="divider2">
                   
                   </div>
                
              <div className="right" >
                   <div className="select-btns" >
                      <div className="select-btnone" >
                          <Image src={icon}/>
                          <h3> Avalanche</h3>
                          <Image src={icon2}/>
                      </div>
                      

                   




                   </div>
                   <div className="cut-link">
                        <h3>Custom link</h3>
                        <h2>
                   https://testnet.xyz.xyz/trade?  
                   </h2>
                   </div>
                   
                  <div className="form">
                    <input type='text' className='fields' placeholder="ENTER"/>
                  </div>

                    <div className="btns">
                        <button className="btn-f">
                             <Image src= {icon3}/>
                             Custom link 
                        </button>
                        <button className="btn-fs">
                             
                             Cancel
                        </button>
                    </div>







              </div>



           </div>



      

      </div>
  )
}
