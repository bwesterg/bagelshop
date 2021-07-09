import React from 'react';
import "./BagelList.css";

import BagelListing from './BagelListing';

export default function BagelList(props){
    const bagels = [{
        type: "Plain",
        rating: 6,
    }, {
        type: "Everything",
        rating: 2,
    }]

    const $bagels = bagels.map(bagel => {
        return <li>
            <BagelListing type={bagel.type} rating={bagel.rating} />
        </li>
    })

    return (
        <ul>{$bagels}</ul>
    )
}