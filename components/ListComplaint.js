import ComplaintData from './ComplaintData';
import homeStyles from '../styles/Home.module.css';
import classes from '../styles/ListComplaint.module.css';
import Link from 'next/link';

function ListComplaint(props){
    return(
        <div className={classes.title}>
            <h2>Tenant Complaint Listing</h2> 
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
                            <span>Contact number</span>
                        </th>
                        <th>
                            <span>Address</span>
                        </th>
                        <th>
                            <span>Category of complaint</span>
                        </th>
                        <th>
                            <span>Details of complaint</span>
                        </th>
                        <th>
                            <span>Suggestion</span>
                        </th>
                    </tr>
                </tbody>
                
            {props.complaints.map((complaint) => {
                return(
                    <ComplaintData 
                        key={complaint.id}
                        id={complaint.id}
                        nameTenant={complaint.nameTenant}
                        emailAddress={complaint.emailAddress}
                        contact={complaint.contact}
                        address={complaint.address}
                        category={complaint.category}
                        detailForm={complaint.detailForm}
                        suggestion={complaint.suggestion}
                />)
            })}
            
            </table>
        </div>    
    );
}

export default ListComplaint;

