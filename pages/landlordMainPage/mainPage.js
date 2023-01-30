import mainStyles from '../../styles/LandlordPage.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Card1 from '../../public/img/card1.jpg';
import Card2 from '../../public/img/card2.jpg';
import Card3 from '../../public/img/card3.jpg';

export default function LandlordMainPage(){
    return (
        <div className={mainStyles.mainPage}>
            <h2>Welcome to Landlord Page</h2>
            <Link href="/authentication/landlordLogin" className={homeStyles.signout}>SIGN OUT</Link>

            <div className={mainStyles.split}>
                <div className={mainStyles.card}>
                    <Image 
                        priority src={Card1}
                        height={270} alt=""
                    />
                    <h4>View Complaint Listing</h4>
                    <div className={mainStyles.link}>
                        <a href="/landlordMainPage/viewListComplaint">More Details</a>
                    </div>
                </div>

                <div className={mainStyles.card2}>
                    <Image 
                        priority src={Card2}
                        height={270} alt=""
                    />

                    <h4>Add New Apartment</h4>
                    <div className={mainStyles.link}>
                        <a href="/landlordMainPage/addNewApartment">More Details</a>
                    </div>
                </div>
            </div>

            <div className={mainStyles.card3}>
                    <Image 
                        priority src={Card3}
                        height={270} alt=""
                    />
                    <h4>View Contacting Service Listing</h4>
                    <div className={mainStyles.link}>
                        <a href="/landlordMainPage/viewListService">More Details</a>
                    </div>
            </div>
                     
        </div>
        
    )
}