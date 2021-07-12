import React from 'react';
import "./BagelListing.css"

export default function BagelListing(props) {
    const deleteBagel = event => {
        props.deleteBagel(props.id)
    }
    return(
        <div className="bagel-listing">
            <p>{props.name}: {props.rating} </p>
            {/* <i className="fa fa-times-circle" onClick={deleteBagel}>delete</i> */}
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png" alt="trashcan to delete bagel" onClick={deleteBagel} />
        </div>
    )
}
