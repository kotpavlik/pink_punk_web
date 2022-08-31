import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Autoplay} from 'swiper';
import Link from 'next/link';
import {ReactSVG} from 'react-svg'
import Image from 'next/image';
import style from '../../../styles/swiper_shop.module.scss'
import heart from '../../../public/header_icons/heart.svg'
import {useWindowSize} from '../../../custom_hooks/useWindowSize'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {ClothesTypes} from '../ShopPresentation';


type SwiperClothesProps = {
    setNav: (nav: boolean) => void
    Clothes: ClothesTypes
}


export const SwiperClothes = ({setNav, Clothes}: SwiperClothesProps) => {

    const [wish, setWish] = useState<ClothesTypes>(Clothes)
    const [hover_item, setHover_item] = useState<string>('q')
    const windowSize = useWindowSize()
    console.log(windowSize.width)

    const changeWish = (id: string, like: boolean) => {
        let newWish = wish.map(el => el.id === id ? {...el, like: !like} : el)
        setWish(newWish)
    }
    const changeHoverItem = (id: string) => {
        setHover_item(id)
    }
    const changeNav = () => {
        setNav(false)
    }

    const HowUsedSlides =() => {
        if(windowSize.width && windowSize.width < 420) {
            return 1
        } else if(windowSize.width && windowSize.width < 600) {
            return 2
        } else {
            return 3
        }
    }


    return (
        <Swiper
            slidesPerView={HowUsedSlides()}
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
                            <Link href={'/'}>
                                <a>
                                    <Image
                                        objectFit="cover"
                                        layout="fill"
                                        src={hover_item === el.id ? el.clothes_photo[1] : el.clothes_photo[0]}
                                        alt={el.name}
                                        priority={true}
                                        className={hover_item === el.id ? style.clothes_photo : style.clothes_photo_2}
                                    />
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
                        <div className={hover_item === el.id ? style.go_basket : style.go_basket_none}>
                                в корзину
                        </div>
                        <div className={style.item_like} onClick={() => changeWish(el.id, el.like)}>
                            <ReactSVG src={heart.src} className={el.like ? style.icon_svg_active : style.icon_svg}/>
                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
};

