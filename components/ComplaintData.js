
export default function ComplaintData(props){

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
                    <span>{props.contact}</span>
                </td>

                <td>
                    <span>{props.address}</span>
                </td>

                <td>
                    <span>{props.category}</span>
                </td>
                <td>
                    <span>{props.detailForm}</span>
                </td>

                <td>
                    <span>{props.suggestion}</span>
                </td>
            </tr>
        </tbody>
    )
}