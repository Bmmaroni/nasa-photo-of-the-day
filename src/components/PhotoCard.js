import React from 'react';
import Description from './Description';
import { Badge, Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const PhotoCard = (props) => {
    return(
        <div>
            <img src={props.img} alt='NASA APOD'/>
            <Card style= {styles.card}>
                <CardBody>
                    <CardTitle tag='h2'><Badge color='warning' >{props.title} </Badge></CardTitle>
                    <CardText><Description style= {styles.fadedText} description={props.description} date={props.date} /></CardText>
                </CardBody>
            </Card>
        </div>
    );
};
const styles = {
    card: {
      border: 'none'
    },

    fadedText: {
        background: 'success'
    }
  };

export default PhotoCard;