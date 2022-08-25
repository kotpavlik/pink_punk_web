import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Autoplay} from 'swiper';
import Link from 'next/link';
import Image, {StaticImageData} from 'next/image';
import style from '../../../styles/swiper_shop.module.scss'
import heart from '../../../public/header_icons/heart.svg'
import white_like from '../../../public/header_icons/heart_white.svg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {ClothesTypes} from '../ShopPresentation';


type SwiperClothesProps = {
    setNav: (nav:boolean) => void
    Clothes:ClothesTypes
}



export const SwiperClothes = ({setNav,Clothes}:SwiperClothesProps) => {

    const [wish, setWish] = useState<ClothesTypes>(Clothes)
    const [hover_item, setHover_item] = useState<string>('q')

    const changeWish = (id: string,like:boolean) => {
        let newWish = wish.map(el => el.id === id ? {...el, like:!like} : el)
        setWish(newWish)
    }
    const changeHoverItem = (id: string) => {
        setHover_item(id)
    }
    const changeNav = () => {
        setNav(false)
    }

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={2}
            freeMode={true}
            navigation={true}
            autoplay={{
                delay: 5000
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className={style.mySwiper}
        >
            {wish.map((el) => {
                return (
                    <SwiperSlide key={el.id} className={style.swiper_slide}
                                 onMouseOver={() => changeHoverItem(el.id)}
                                 onMouseLeave={() => changeHoverItem('t')}
                                 onClick={changeNav}>
                        <div className={style.item_image}>
                            <Link href={'/'} >
                                <a>
                                    {hover_item === el.id ?
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            src={el.clothes_photo[1]}
                                            alt={el.name}
                                            className={style.clothes_photo}
                                        />
                                        :
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            src={el.clothes_photo[0]}
                                            alt={el.name}
                                            className={style.clothes_photo}
                                        />
                                    }
                                </a>
                            </Link>
                        </div>
                        <div className={style.inform_item_wrapper}>
                            <div className={style.item_name}>
                                {el.name}
                            </div>
                            <div className={style.item_color}>
                                {el.color}
                            </div>
                        </div>
                        <div className={style.item_cost}>
                            {el.price}
                            <span> byn</span>
                        </div>
                        <div className={style.item_like} onClick={() => changeWish(el.id,el.like)}>
                            {el.like
                                ?
                                <Image
                                    src={white_like}
                                    width={30}
                                    height={30}
                                    alt="like">
                                </Image>
                                :
                                <Image
                                    src={heart}
                                    width={30}
                                    height={30}
                                    alt="like">
                                </Image>}

                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
};

