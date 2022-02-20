import Image from "next/image";
import icon from '../public/Group 16082.png';
export default function Reward(){
    return(
        <div className="Reward-full">
            <div className="reward-body">
                <div className="reward-upper">
                <div className="reward-text">
                    <h3>Your Reward</h3>
                    <h2>$ 0.26231428</h2>
                </div>
                <button className="customlink-btn">
                 <Image src={icon} alt='menu' />
                 Customer link
                </button>
                </div>
               
               <div className="reward-bottom">
                   <h3>$40 AVAX</h3>
                   <h3>$10 BNB</h3>
                   <h3>$210 BTC</h3>
               </div>





            </div>
        </div>
    )
}
