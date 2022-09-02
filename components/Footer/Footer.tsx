import React from 'react';
import { MouseEvent } from 'react';
import { useAnimation, motion } from "framer-motion"
import bg_photo from "../../public/bg_images/bg_photo.jpg"
import style from "../../styles/footer.module.scss"
import {IoLogoInstagram} from 'react-icons/io';
import {TbBrandTelegram} from 'react-icons/tb';
import {AiOutlinePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';





export const Footer = () => {

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
        <div className={style.footer_container}>
            <motion.div
                animate={imgAnimation}
                onMouseMove={(e: MouseEvent<HTMLDivElement, Event>) => handleMouseMove(e)}
                className={style.motion_div}
            >
                pink punk
            </motion.div>
            <div className={style.img_bg} style={bg_div_style}>
                <div className={style.about_brand_container}>
                    <div className={style.information}>
                        Адрес : г.Минск ул.Шорная 20 H1 (внутри коворкинга "Кто такой Джон Голт" )
                    </div>
                    <div className={style.social_icon_wrapper}>
                        <div className={style.social_icon}><IoLogoInstagram/></div>
                        <div className={style.social_icon}><TbBrandTelegram/></div>
                        <div className={style.social_icon}><AiOutlinePhone/></div>
                        <div className={style.social_icon}><FiMail/></div>
                        <div className={style.social_icon}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}