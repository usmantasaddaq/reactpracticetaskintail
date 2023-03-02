import React from "react";

function website(props){

return (
<>
<div className="Codes">
    <div className="Code">
        <img src={props.imgsrc} alt="this Movie Picture" className="Card_image" />
        <div className="Cards_information">
            <span className="card_category">{props.title}</span> 
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link}>
        <button>Watch Now</button>
        </a></div>
       5
    </div>
</div>

</>



)

}
export default website;