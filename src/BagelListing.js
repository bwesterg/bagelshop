import React from 'react';
import "./BagelListing.css"

export default function BagelListing(props) {
    return(
        <div>
            <p>{props.name}: {props.rating}</p>
            {/* <p>{props.name}: {props.rating}</p> */}

        </div>
    )
}