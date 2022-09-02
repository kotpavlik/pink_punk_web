import React from 'react';
import style from '../../../styles/gallery_presentation.module.scss'
import {ClothesTypes} from '../ShopPresentation';




type GalleryPresentationProsType = {
    Clothes:ClothesTypes
}

export const GalleryPresentation = ({Clothes}:GalleryPresentationProsType) => {



    return (
            <div className={style.container}>

            </div>
    )
}

