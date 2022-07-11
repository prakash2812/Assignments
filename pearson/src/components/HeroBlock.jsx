import React from 'react';
import '../css/HeroBlock.css';
import coffee from '../assests/pearson1.jpg';
import cofee1 from '../assests/pearson2.jpg';
const HeroBlock = () => {
    return (
        <div className='hero-block'>
            <p>
                <img loading='lazy' src={coffee} alt='pearson1' />
            </p>
            <p>
                <img loading='lazy' src={cofee1} alt='pearson2' />
            </p>
        </div>
    );
};

export default HeroBlock;
