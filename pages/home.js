import Link from 'next/link';
import styles from '../styles/Form.module.css';
import homeStyles from '../styles/Home.module.css';

export default function Home(){
    return (
        <>
         <section>
            <div className={styles.logo}>
              <h3><span className={styles.starhill}>STARHILL</span> RESIDENCE</h3>
              <Link href="/" className={homeStyles.signout}>SIGN OUT</Link>
              <hr className={styles.greenline} />
            </div>
    
            <nav className={styles.navbar}>
              <ul>
                <li className={styles.line}><Link href="/home">Home</Link></li>
                <li><Link href="/apartmentList">Apartment Listing</Link></li>
                <li><Link href="/contactingService">Contacting Service</Link></li>
                <li><Link href="/complaintForm" >Complaint Form</Link></li>
              </ul>
            </nav>
        </section>
    
        <div>
            <h2 className={homeStyles.title}>Starhill Luxury Residence</h2>
            <h4 className={homeStyles.titleSmall}>Welcomes You</h4>
            <hr className={homeStyles.whiteline}/>
            <span className={homeStyles.titleText}>
            Starhill Luxury Residences is a residential complex located at Halaman Bukit Gambir 8, Sunway 
            Bukit Gambier, Penang. Developed by Aroma Development Sdn Bhd, Starhill Luxury Residences 
            has a total of 547 units available with 35 floors. It offers a plethora of facilities and amenities 
            including, but not limited to, a café, barbeque area, a gym, and a swimming pool, made available 
            to all residents.
            </span>
        </div>
        
        <section>
            <div className={homeStyles.img1}></div>
        </section>
    
        <section className={homeStyles.sectionParagraph}>
            <div className={homeStyles.paragraph}>
                <div className={homeStyles.paragraph1}><p>ABOUT US</p></div>
    
                    <div className={homeStyles.paragraph2}><p>Get Away in Style</p></div>
    
                    <div className={homeStyles.paragraph3}>At the intersection of comfort and convenience lies Starhill Luxury Residence, 
                        where you can take full advantage of numerous amenities and services that are guaranteed 
                        to make your stay with us a memorable one.</div>
        
                    <div className={homeStyles.paragraph3}>From guest services to tour deals, we seek to provide you with the attention and luxury 
                        you deserve. Featuring impeccable accommodations and an attentive staff, we guarantee you'll have 
                        a pleasant experience here. Explore our site to see what we have to offer, and don't hesitate to
                        reach out with questions.</div>        
            </div>   
        </section>
    
        <section className={homeStyles.sectionServices}>
            <div className={homeStyles.img2}></div>
    
            <div className={homeStyles.services}>
                <div className={homeStyles.paragraph1}><p>OUR SERVICES</p></div>
                
                <div>
                    <div className={homeStyles.subtitles}>
                        <p>✓ FULLY FURNISHED</p>
                        <p className={homeStyles.paragraph2}>What Sets Us Apart</p>
                    </div>
        
                    <div className={homeStyles.subtitles}>
                        <p>✓ FREE WI-FI</p>
                        <p className={homeStyles.paragraph2}>Exclusively For Our Tenants</p>
                    </div>
        
                    <div className={homeStyles.subtitles}>
                        <p>✓ 24/7 ROOM SERVICE</p>
                        <p className={homeStyles.paragraph2}>A Convenient Option</p>
                    </div>
                </div>   
            </div>
        </section>
    
        <section className={homeStyles.contact}>
    
            <div className={homeStyles.paragraph1}>CONTACT US</div>
    
            <div className={homeStyles.paragraph2}>
                <div className={homeStyles.info}>Halaman Bukit Gambir 8, Sunway Bukit Gambier, 11700 Gelugor, Pulau Pinang</div>
                <div className={homeStyles.info}>client@email.com</div>
                <div className={homeStyles.info}>client's phone</div>
                <br /><br />
            </div>
        </section>
    
        </>
      );
}