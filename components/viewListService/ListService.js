import ServiceData from './ServiceData';
import homeStyles from '../../styles/Home.module.css';
import classes from '../../styles/ListComplaint.module.css';
import Link from 'next/link';

function ListService(props){
    return(
        <div className={classes.title}>
            <h2>Contacting Service Listing</h2> 
            <Link href="/landlordMainPage/mainPage" className={homeStyles.signout}>Back to home</Link>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <span>Name of Tenant</span>
                        </th>
                        <th>
                            <span>Email address</span>
                        </th>
                        <th>
                            <span>Phone number</span>
                        </th>
                        <th>
                            <span>Apartment Number</span>
                        </th>
                        <th>
                            <span>Service Type</span>
                        </th>
                        <th>
                            <span>Additional Details</span>
                        </th>
                    </tr>
                </tbody>
                
            {props.services.map((service) => {
                return(
                    <ServiceData 
                        key={service.id}
                        id={service.id}
                        nameTenant={service.nameTenant}
                        emailAddress={service.emailAddress}
                        phone={service.phone}
                        apartmentNum={service.apartmentNum}
                        serviceType={service.serviceType}
                        addDetails={service.addDetails}
                />)
            })}
            
            </table>
        </div>    
    );
}

export default ListService;

