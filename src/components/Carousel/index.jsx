import './style.css'
import { useState, useEffect } from 'react';

import image1 from '../../imgs/data1.png';
import image2 from '../../imgs/data2.png';
import image3 from '../../imgs/data3.png';
import image4 from '../../imgs/data4.png';
import image5 from '../../imgs/data5.jpg';
import image6 from '../../imgs/data6.jpg';
import image7 from '../../imgs/data7.jpg';
import image8 from '../../imgs/data8.png';


function Carousel(){

    const data = [
        {
            id: '1', image: image1
        },
        {
            id: '2', image: image2
        },
        {
            id: '3', image: image3
        },
        {
            id: '4', image: image4
        },
        {
            id: '5', image: image5
        },
        {
            id: '6', image: image6
        },
        {
            id: '7', image: image7
        },
        {
            id: '8', image: image8
        },
    ]

    return (
        <div className='carousel_element-container'>
            {data.map( (item) => (
                <div key={item.id}>
                    <img
                        src={item.image}
                        alt="carousel"
                        className='carousel-item' 
                    />
                </div>
            ))}
        </div>
    )
}

export default Carousel