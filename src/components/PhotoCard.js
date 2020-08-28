import React from 'react';
import Description from './Description';
import { Badge } from 'reactstrap';

const PhotoCard = (props) => {
    return(
        <div>
            <h2><Badge color='warning' >{props.title} </Badge></h2>
            <div>
                <img src={props.img} alt='NASA APOD'/>
                <Description description={props.description} date={props.date} />
            </div>
        </div>
    );
};

export default PhotoCard;