import React from "react";
import "./Article.css";


export default function Article(props){
    return(
        <div className="polje">
            <h1>{props.Name}</h1>
        </div>
    )
}