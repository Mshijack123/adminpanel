import React, {useEffect,useRef,useState} from "react";
import axios from 'axios';
import Image from "next/image";

const Tablecontent = () =>{


  var [data,setdata] = React.useState([]);


useEffect(()=>{
  
    axios('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
    .then(resposnse=>{
      setdata(data = resposnse.data.data);
    })
})




   return (
      <div classname='tabelcontent' style={{color:'white'}}>
        {data.map(s => <div className="table-data"> 

            <div className="table-content">
                 <div className="asset">
                     <img src={s.img} alt='menu' />
                     <div className="asset-text">
                       <div className="asset-name">
                         <h5>{s.asset}</h5>
                         </div>
                         <div className="putnew">
                         <h6>{s.type}</h6>
                           <div className="put">
                           <img src={s.chain.img} alt='menu'/>
                           <h5>{s.chain.name}</h5>
                           </div>
                           </div>

                       </div>          
                   </div> 
                

                  <div className="amount">
                       
                        <h5>{s.amount}</h5>
                        <h6>{s.state}</h6>
                    </div>


                    <div className="user-id">

                      <h5>{s.user}</h5>
                      </div>

                   <div className="refer">

                     <h5>{s.referral_earnings}</h5>
                     </div>














              </div> 
          
          </div>
          
      )}
     </div>
   );
}


export default Tablecontent;
