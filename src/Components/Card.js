import React from "react";
import './card.css';

function Card() {
    return <div> 
        <div>
            <form>
                <label>To do </label>
            <input type="text" ></input>
            <label>Due date</label>
            <input type="date"></input>

            </form>
        </div>
    </div>
}
export default Card;