import Image from "next/image"
import category from '../public/menu-img/category.png'
import section1 from '../public/menu-img/Group 15792.png';
import section2 from '../public/menu-img/Group 15799.png';
import section3 from '../public/menu-img/Group 15794.png';
import section4 from '../public/menu-img/Group 15874.png';
import section5 from '../public/menu-img/Group 15802.png';
import section6 from '../public/menu-img/Group 15803.png';
import section7 from '../public/menu-img/Group 15804.png';
import section8 from '../public/menu-img/Group.png';
import section9 from '../public/menu-img/Group (1).png';
import logo from '../public/menu-img/Group 16083 (1).png';
import browser from '../public/menu-img/Vector (5).png';
import toggle from '../public/menu-img/Dark toggle.png';
export default function LeftMenu(){
     return(
           
        <div className="left-menus">


            <div className="menus"> 

            <div className="menu-items">
                <div className="menu-img" >
               <Image src={category}/></div>
                <div className="menu-text">
               <h3>Home</h3></div>
            </div>
             

           <div className="menu-items">
           <div className="menu-img">
               <Image src={section1}/></div>
               <div className="menu-text">
               <h3>Section 1</h3></div>
            </div>
          



            <div className="menu-items">
           <div className="menu-img">
               <Image src={section2}/></div>
               <div className="menu-text">
               <h3>Section 2</h3></div>
            </div>


            <div className="menu-items">
           <div className="menu-img">
               <Image src={section3}/></div>
               <div className="menu-text">
               <h3>Section 3</h3></div>
            </div>



            <div className="menu-items">
           <div className="menu-img">
               <Image src={section4}/></div>
               <div className="menu-text">
               <h3>Section 4</h3></div>
            </div>


            <div className="menu-items">
           <div className="menu-img">
               <Image src={section5}/></div>
               <div className="menu-text">
               <h3>Section 5</h3></div>
            </div>

            <div className="menu-items">
           <div className="menu-img">
               <Image src={section6}/></div>
               <div className="menu-text">
               <h3>Section 6</h3></div>
            </div>

            <div className="menu-items">
           <div className="menu-img">
               <Image src={section7}/></div>
               <div className="menu-text">
               <h3>Section 7</h3></div>
            </div>



             <div className="menu-items selected">
             <div className="menu-img">
               <Image src={section8}/></div>
               <div className="menu-text">
               <h3>Section 8</h3></div>
             </div>


             <div className="menu-items">
           <div className="menu-img">
               <Image src={section9}/></div>
               <div className="menu-text">
               <h3>Documentation</h3></div>
            </div>



       



            <div className="ratebuy-btn">
                   <button className="rate-btn">
                         <Image src={logo}/>
                        <h3>$0.90</h3>
                   </button>


                   <button className="buy-btn">
                        <h3>Buy $XYZ</h3>
                   </button>




               </div>
                  
                  
               <div className="browserimg">
                        <Image src={browser}/>
                       <Image src={toggle}/>

                        </div>  







            </div>


              






        </div>

     )
}