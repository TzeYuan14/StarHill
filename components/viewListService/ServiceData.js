
export default function ServiceData(props){

    return(
        <tbody>  
            <tr>
                <td>
                    <span>{props.nameTenant}</span>
                </td>

                <td>
                    <span>{props.emailAddress}</span>
                </td>

                <td>
                    <span>{props.phone}</span>
                </td>

                <td>
                    <span>{props.apartmentNum}</span>
                </td>

                <td>
                    <span>{props.serviceType}</span>
                </td>
                <td>
                    <span>{props.addDetails}</span>
                </td>

            </tr>
        </tbody>
    )
}