import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const Description = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button outline color="success" onClick={toggle} margin='100px'>Description</Button>
            <Fade in={fadeIn} tag="p" className="mt-3">
                <h5>{props.date}</h5>
                <p>{props.description}</p>
            </Fade>
        </div>
    );
}

export default Description;