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


import pants_1 from '../../../public/clothes_photo/pants/pants_1.jpg'
import lather_jacket_1 from '../../../public/clothes_photo/lather_jackets/lather_jacket_1.jpg'
import dress_1 from '../../../public/clothes_photo/dresses/dress_1.jpg'
import coat_1 from '../../../public/clothes_photo/coats/coat_1.jpg'
import shirt_1 from '../../../public/clothes_photo/shirts/shirt_1.jpg'
import t_shirt_1 from '../../../public/clothes_photo/t-shirts/t_shirt_1.jpg'
import hoodie_sheep_1 from '../../../public/clothes_photo/hoodie_sheep/hoodie_sheep_1.jpg'

import pants_2 from '../../../public/clothes_photo/pants/pants_2.jpg'
import lather_jacket_2 from '../../../public/clothes_photo/lather_jackets/lather_jacket_2.jpg'
import dress_2 from '../../../public/clothes_photo/dresses/dress_2.jpg'
import coat_2 from '../../../public/clothes_photo/coats/coat_2.jpg'
import shirt_2 from '../../../public/clothes_photo/shirts/shirt_2.jpg'
import t_shirt_2 from '../../../public/clothes_photo/t-shirts/t_shirt_2.jpg'
import hoodie_sheep_2 from '../../../public/clothes_photo/hoodie_sheep/hoodie_sheep_2.jpg'


type SwiperClothesProps = {
    setNav: (nav:boolean) => void
}
type ClothesTypes = Array<ClothesType>
type ClothesType = {
    id: string
    name: string
    clothes_photo: Array<StaticImageData>
    like: boolean,
    price: number
    size: Array<string>
    region: string
    color: string
    description: Array<string>
    options: Array<OptionsDescType>
    availability: string
    care_recommendations: Array<CareType>
}

type OptionsDescType = {
    clothes_name: string
    personal_options: string
}
type CareType = {
    care: Array<string>
    care_img: Array<string>
}

const Clothes: ClothesTypes = [
    {
        id: '1',
        name: 'брюки',
        clothes_photo: [pants_1, pants_2],
        like: false,
        price: 140,
        size: ['s', 'm'],
        region: 'made in BLR',
        color: 'sand king',
        description: ['универсальная посадка', 'свободный крой', 'дизайнерское решение'],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '2',
        name: 'косуха',
        clothes_photo: [lather_jacket_1, lather_jacket_2],
        like: false,
        price: 490,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'more black',
        description: ['экокожа высшего качества', 'свободный крой', 'дизайнерское решение'],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '3',
        name: 'платье',
        clothes_photo: [dress_1, dress_2],
        like: false,
        price: 180,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'cappuccino',
        description: [],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '4',
        name: 'плащ',
        clothes_photo: [coat_1, coat_2],
        like: false,
        price: 250,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'black rain',
        description: [],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '5',
        name: 'рубашка',
        clothes_photo: [shirt_1, shirt_2],
        like: false,
        price: 160,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'dusty pink',
        description: [],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '6',
        name: 'футболка',
        clothes_photo: [t_shirt_1, t_shirt_2],
        like: false,
        price: 80,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'pink vibe',
        description: [],
        options: [],
        availability: '',
        care_recommendations: []
    },
    {
        id: '7',
        name: 'худи',
        clothes_photo: [hoodie_sheep_1, hoodie_sheep_2],
        like: false,
        price: 180,
        size: ['один размер'],
        region: 'made in BLR',
        color: 'green valley',
        description: [],
        options: [],
        availability: '',
        care_recommendations: []
    }
]


export const SwiperClothes = ({setNav}:SwiperClothesProps) => {

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

