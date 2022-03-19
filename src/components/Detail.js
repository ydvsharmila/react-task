import React from "react";
import Button from "./Button";

const Detail = ({data, setDetail}) => {
    const onAction = () => {
        setDetail(null);
    }
    return (
        <div className="card">
            <div className="card-body" style={{padding: '32px'}}>
                <h5 className="card-title">Showing detail about each brewery</h5>

                <div>brewery_type: {data.brewery_type}</div>
                <div>street: {data.street}</div>
                <div>address_2: {data.address_2}</div>
                <div>address_3: {data.address_3}</div>
                <div>city: {data.city}</div>
                <div>state: {data.state}</div>
                <div>country_province: {data.country_province}</div>
                <div>postcode: {data.postcode}</div>
            </div>
            <Button label="Go back" onAction={onAction} />
        </div>
    )
}

export default Detail;
