import React from 'react';
import style from '../../styles/shopPresentation.module.scss'
import style_title from '../../styles/title_styles.module.scss'
import Link from 'next/link';
import {SwiperClothes} from './SwiperClothes/SwiperClothes';

type ShopPresentationProps = {
    setNav: (nav:boolean) => void
}

export const ShopPresentation = ({setNav}:ShopPresentationProps) => {
    return (
        <div className={style.shop_pres_wrapper}>
            <div className={style_title.title}>
              <Link href={'/catalog'}><a>магазин</a></Link>
            </div>
            <div className={style.swiper_wrapper}>
              <SwiperClothes setNav={setNav}/>
            </div>
        </div>
    );
};
