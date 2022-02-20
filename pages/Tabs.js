import Tablecontent from "./Tablecontent";
export default function Tabs(){
     return(
         <div className="tabs-full">
             <div className="tabs-body">
                 <div className="tab-nav">
                     <div className="tab1">
                         <h3>First Tab</h3>
                     </div>
                     
                     <div className="tab2">
                         <h3>Second Tab</h3>
                     </div>

                 </div>



                  <div className="table-tabs">
                      <div className="table-heading">
                          <h3>ASSET</h3>
                          <h3>AMOUNT</h3>
                          <h3>USER ACCOUNT</h3>
                          <h3>REFERRAL EARNING</h3>
                      </div>
                      <Tablecontent/>
                  </div>
                 






             </div>
         </div>
     )
}