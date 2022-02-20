import banner from '../public/Tutorial.png';
import Image from 'next/image';
import wallet from '../public/Wallet.png';
export default function Banner(){
     return(
         <div className="banner">
             <div className='banner-upper'>
                 <div className='section'>
                     <h3>Section</h3>
                 </div>

                <div className='wallet-details'>
                    <div className='balance'>
                        <Image src={wallet}/>
                        <h3>0.2 $XYZ</h3>
                    </div>
                    <button className='tier'>
                         Tier 1
                    </button>
                </div>

             </div>
             <div className="banner-body">
                <Image src={banner}/>

               
             </div>
         </div>
     )
}