import React from 'react';
import style from '../styles/generalLayout.module.scss';
import general_bg_images from '../public/bg_images/bg_headimage.jpg'


export const GeneralLayout = () => {
    const bg_general_img = {
        backgroundImage:`url(${general_bg_images.src})`,
    }
    return (
        <div style={bg_general_img} className={style.bg_general_image}>

        </div>
    );
};

