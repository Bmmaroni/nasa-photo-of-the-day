import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoGrid() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=q7RsTyv8SV3whEgmuc5P6GNcioNrpvWSrew0rusc&date=2020-08-25`)
            .then(res => {
                console.log('Res: ', res);
                // setPhoto(res.);
            })
            .catch(err => {
                console.log('Error Occured: ', err);
            })
    }, []);
    return (
        <div></div>
    );
};

