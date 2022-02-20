import Image from "next/image";
import refer from '../public/Group 15510.png';
import icon from '../public/ungroup.png';
export default function Refer(){
    return(
          <div className="refer-body">
              <div className="refer-sections">
                  <div className="refer-sec">
                      <div className="refer-secupper">
                          <Image src={refer} alt='menu' />
                          <h3>12.5% of fee</h3> 
                      </div>
                      <h4>Your Referral Link for xyz</h4>
                     <div className="refer-secfooter">
                       <h3>https://unityexchange.design </h3>
                       <Image src={icon} alt='menu' />
                     </div>

                  </div>



                  <div className="refer-sec">
                      <div className="refer-secupper">
                          <Image src={refer} alt='menu' />
                          <h3>12.5% of fee</h3> 
                      </div>
                      <h4>Your Referral Link for xyz</h4>
                     <div className="refer-secfooter">
                       <h3>https://unityexchange.design </h3>
                       <Image src={icon} alt='menu' />
                     </div>

                  </div>


















              </div>
          </div>
    )
}
