import { useLocation, useNavigate } from "react-router-dom"

export default function OrderDetails() {

    const navigate = useNavigate();
    let locationData = useLocation().state;

    const sid = locationData.sid;
    const oid = locationData.oid;

    return (
        <div>
            <h1>OrderDetails {sid} {oid}</h1>
        </div>
    )
}