import React from 'react';
import { MouseEvent } from 'react';
import { useAnimation, motion } from "framer-motion"
import bg_photo from "../../public/bg_images/bg_photo.jpg"
import style from "../../styles/footer.module.scss"
import {RiInstagramLine} from 'react-icons/ri';
import {TbBrandTelegram} from 'react-icons/tb';
import {TbPhone} from 'react-icons/tb';
import {FiMail} from 'react-icons/fi';
import Link from 'next/link';





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
            </div>
            <div className={style.about_brand_container}>
                <div className={style.information}>
                    <div className={style.title}>Покупателям</div>
                    <div className={style.item_info}>Адрес : г.Минск ул.Шорная 20 H1</div>
                    <div className={style.item_info}>режим работы шоурума : 11 - 19 ежедневно</div>
                    <div className={style.item_info}>телефон : +375(33)916-47-30</div>
                </div>
                <div className={style.link_wrapper}>
                    <div className={style.title}>Инфо</div>
                    <div className={style.link}><Link href={'/delivery'}><a>доставка</a></Link></div>
                    <div className={style.link}><Link href={'/news'}><a>новости</a></Link></div>
                    <div className={style.link}><Link href={'/about'}><a>о нас</a></Link></div>
                </div>

                <div className={style.wrapper_socials}>
                    <div className={style.title}>соцсети</div>
                    <div className={style.social_icon_wrapper}>
                        <a href={'https://www.instagram.com/pinkpunk_brand/'}>
                            <div className={style.social_icon}>
                                <RiInstagramLine/>
                            </div>
                        </a>
                        <a href={'https://t.me/pink_punk_brand'}>
                            <div className={style.social_icon}><TbBrandTelegram/></div>
                        </a>
                        <a href={'tel:+375339164730'}>
                            <div className={style.social_icon}><TbPhone/></div>
                        </a>
                        <a href={'mailto:pinkpunk.company@gmail.com'}>
                            <div className={style.social_icon}><FiMail/></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}