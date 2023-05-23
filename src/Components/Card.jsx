import React from "react"
import "../Styles/Card.css"

const Card = ({ title, info, link, snippet, cited }) => {
    return(
        <div className="containerCard">
            <a target="_blank" href={link}><p className="titleCard"><b>{title}</b></p></a>
            <p className="text"><b>Autors: </b>{info}</p>
            <p className="text"><b>Snippet: </b>"{snippet}"</p>
            <p className="text"><b>Cited by: </b>{cited}</p>
        </div>
    )
}

export default Card; 
