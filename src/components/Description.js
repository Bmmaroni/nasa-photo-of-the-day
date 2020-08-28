import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const Description = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button outline color="success" onClick={toggle} margin='100px'>Description</Button>
            <Fade in={fadeIn} tag="p" className="mt-3" style={styles.fadedText}>
                <h5>{props.date}</h5>
                <p>{props.description}</p>
            </Fade>
        </div>
    );
}

const styles = {
    fadedText: {
        backgroundColor: 'dodgerblue',
        padding: '1%',
        borderRadius: '500px'
    }
  };

export default Description;