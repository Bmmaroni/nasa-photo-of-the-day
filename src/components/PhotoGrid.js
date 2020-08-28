import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PhotoCard from './PhotoCard';

export default function PhotoGrid() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=q7RsTyv8SV3whEgmuc5P6GNcioNrpvWSrew0rusc&date=2020-08-02`)
            .then(res => {
                console.log('Res: ', res);
                setPhoto(res.data);
            })
            .catch(err => {
                console.log('Error Occured: ', err);
            })
    }, []);

    return (
        <div>
            <PhotoCard date={photo.date} title={photo.title} img={photo.url} description={photo.explanation} />
        </div>
    );
}