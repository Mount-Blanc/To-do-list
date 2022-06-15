import React from "react";
import './Form.css';

function Card() {
    return <div> 
        <div>
            <form className="style">
                <label>To do </label>
                <input type="text" ></input>
                <label>Due date</label>
                <input type="date"></input>

            </form>
        </div>
    </div>
}
export default Card;