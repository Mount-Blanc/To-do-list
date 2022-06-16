import React from "react";
import './Form.css';

function Card() {
    const todo = (event) => {
        console.log(event.target.value);
    }
    return <div> 
        <div>
            <form className="style">
                <label>To do </label>
                <input type="text" onChange={todo} ></input>
                <label>Due date</label>
                <input type="date"></input>

            </form>
        </div>
    </div>
}
export default Card;