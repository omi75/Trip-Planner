import { useState } from "react";

function Cards(p)
{
    const [readmore , setReadmore]=useState(false);
    const description= readmore ? p.info : `${p.info.substring(0,200)}...`;

    function readMoreHandler()
    {
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={p.image} className="image"></img>
            <div className="tour-details">
                <p className="price">₹ {p.price}</p>
                <h2 className="city">{p.name}</h2>
            </div>
            <p className="description">{description}
                <span className="read-more" onClick={readMoreHandler}>{readmore ? `Show Less` : `Read More`}</span>
            </p>
            <button className="not-in" onClick={()=> p.removeTour(p.id)}>Not Interested</button>
        </div>
    )
}

export default Cards;