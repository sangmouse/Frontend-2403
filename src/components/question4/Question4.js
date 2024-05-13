import React from "react";
import "./Question4.css";


const Question4 = () => {

    return (
        <div className="question4">
            <div>
                <h3>Full Name</h3>
                <input type="text" name="fullName" id="fullName" placeholder="Enter your full name..." />
            </div>
            <div>
                <h3>Age</h3>
                <input type="number" name="age" id="age" placeholder="Enter your age..." />
            </div>
        </div>
    )
}


export default Question4