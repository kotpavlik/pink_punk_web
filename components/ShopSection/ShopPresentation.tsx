import React from 'react';
import style from '../../styles/shopPresentation.module.scss'
import style_title from '../../styles/title_styles.module.scss'
import Link from 'next/link';
import {SwiperClothes} from './SwiperClothes/SwiperClothes';
import {GalleryPresentation} from './GalleryPresentation/GaleryPresentation';
import {StaticImageData} from 'next/image';
import pants_1 from '../../public/clothes_photo/pants/pants_1.jpg';
import pants_2 from '../../public/clothes_photo/pants/pants_2.jpg';
import lather_jacket_1 from '../../public/clothes_photo/lather_jackets/lather_jacket_1.jpg';
import lather_jacket_2 from '../../public/clothes_photo/lather_jackets/lather_jacket_2.jpg';
import dress_1 from '../../public/clothes_photo/dresses/dress_1.jpg';
import dress_2 from '../../public/clothes_photo/dresses/dress_2.jpg';
import coat_1 from '../../public/clothes_photo/coats/coat_1.jpg';
import coat_2 from '../../public/clothes_photo/coats/coat_2.jpg';
import shirt_1 from '../../public/clothes_photo/shirts/shirt_1.jpg';
import shirt_2 from '../../public/clothes_photo/shirts/shirt_2.jpg';
import t_shirt_1 from '../../public/clothes_photo/t-shirts/t_shirt_1.jpg';
import t_shirt_2 from '../../public/clothes_photo/t-shirts/t_shirt_2.jpg';
import hoodie_sheep_1 from '../../public/clothes_photo/hoodie_sheep/hoodie_sheep_1.jpg';
import hoodie_sheep_2 from '../../public/clothes_photo/hoodie_sheep/hoodie_sheep_2.jpg';

type ShopPresentationProps = {
    setNav: (nav: boolean) => void
}
export type ClothesTypes = Array<ClothesType>
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

export const ShopPresentation = ({setNav}: ShopPresentationProps) => {
    return (
        <div className={style.shop_pres_wrapper}>
            <div className={style_title.title}>
                <Link href={'/catalog'}><a>магазин</a></Link>
            </div>
            <div className={style.swiper_wrapper}>
                <SwiperClothes setNav={setNav} Clothes={Clothes}/>

            </div>
        </div>
    );
};
