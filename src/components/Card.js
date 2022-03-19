import React from "react";
import Button from "./Button";

const Card = ({data, setDetail}) => {
    const onAction = () => {
        setDetail(data);
    }
    return (
        <div className="card" style={{justifyContent: 'space-between'}}>
            <div className="content" style={{padding: "32px"}}>
                <div>{data.name}</div>
                <div>{data.brewery_type}</div>
                <div>{data.city}</div>
            </div>
            <Button label="View details" onAction={onAction}/>
        </div>
    )
}

export default Card;
