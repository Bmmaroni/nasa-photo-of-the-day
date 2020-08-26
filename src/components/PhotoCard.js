import React from 'react';

const PhotoCard = (props) => {
    return(
        <div>
            <h2> {props.date} {props.title} </h2>
            <div>
                <img src={props.img} alt='NASA APOD'/>
                <p> {props.description} </p>
            </div>
        </div>
    );
};

export default PhotoCard;