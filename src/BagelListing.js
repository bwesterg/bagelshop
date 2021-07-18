import React from 'react';
import "./BagelListing.css"

export default function BagelListing(props) {

    const deleteBagel = event => {
        props.deleteBagel(props.id)
    }

    const editBagel = event => {
        props.editBagel(props.id)
    }

    return(
        <div className="bagel-listing">
            <p>{props.name}: {props.rating} </p>
                <span>
                    <img 
                        src="https://i.pinimg.com/originals/6e/35/ef/6e35ef7687065eb1e4c037781f3c4cdc.png" 
                        alt="edit bagel" 
                        onClick={editBagel} 
                    />
                    <img 
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png" 
                        alt="trashcan to delete bagel" 
                        onClick={deleteBagel} 
                    />
                </span>
        </div>
    )
}
