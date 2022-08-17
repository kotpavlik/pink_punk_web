import React from 'react';
import style from '../styles/generalLayout.module.scss';
import general_bg_images from '../public/bg_images/bg_headimage.jpg'
import pic_for_mobile from '../public/bg_images/for_mobile.jpg'
import {useWindowSize} from '../custom_hooks/useWindowSize'
import Marquee from 'react-fast-marquee';


export const GeneralLayout = () => {

    const size = useWindowSize()
    const bg_general_img = {
        backgroundImage: `url(${general_bg_images.src})`,
    }
    const bg_general_img_for_mobile = {
        backgroundImage: `url(${pic_for_mobile.src})`,
    }


    return (
        <div style={size.width && size.width < 760 ? bg_general_img_for_mobile : bg_general_img}
             className={style.bg_general_image}>
            <Marquee className={style.ticker} speed={80} gradient={false}>
                <div className={style.slogan}><strong>Punks not dead</strong></div>
                <div className={style.slogan}><strong>Punks not dead</strong></div>
                <div className={style.slogan}><strong>Punks not dead</strong></div>
            </Marquee>
        </div>
    );
};

