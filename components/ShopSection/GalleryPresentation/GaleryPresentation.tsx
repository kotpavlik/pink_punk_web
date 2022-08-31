import React from 'react';
import { MouseEvent } from 'react';
import { useAnimation, motion } from "framer-motion"
import bg_photo from "../../../public/bg_images/bg_photo.jpg"
import style from "../../../styles/galleryPresentation.module.scss"
import {ClothesTypes} from '../ShopPresentation';
import {IoLogoInstagram, SiTelegram} from 'react-icons/all';



type GalleryPresentationProsType = {
    Clothes:ClothesTypes
}

export const GalleryPresentation = ({Clothes}:GalleryPresentationProsType) => {

    const bg_div_style = {
        backgroundImage: `url(${bg_photo.src})`,
    }
    const imgAnimation = useAnimation()

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, Event>) => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 10
        imgAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
        })
    }

    return (
            <div className={style.container}>
                <motion.div
                    animate={imgAnimation}
                    onMouseMove={(e: MouseEvent<HTMLDivElement, Event>) => handleMouseMove(e)}
                    className={style.motion_div}
                >
                    pink punk
                </motion.div>
                <div className={style.img_bg} style={bg_div_style}>
                    <div className={style.about_brand_container}>
                        <div className={style.social_icon}> <IoLogoInstagram/> </div>
                        <div className={style.social_icon}><SiTelegram/></div>
                        <div className={style.social_icon}></div>
                        <div className={style.social_icon}></div>
                        <div className={style.social_icon}></div>
                    </div>
                </div>
            </div>
    )
}

