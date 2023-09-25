/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React from "react";


const Card = ({ restaurant }) => {
    return (
        <div
            className="Card"
            style={{ width: "18rem" }}
            key={restaurant.id}>
            <img src={restaurant.image} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.type}</p>
                <Link to="" className="btn btn-danger px-2 mx-1">
                    Delete
                </Link>
                <Link to={`/update/${restaurant.id}`} className="btn btn-warning px-2 mx-1">
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default Card;
