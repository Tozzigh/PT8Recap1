import React from "react";

export const PetCard = ({ item }) => {
    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Age: {item.age}</p>
        </div>
    </div>
};
