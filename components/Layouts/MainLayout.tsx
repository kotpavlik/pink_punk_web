import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from '../../styles/mainLayout.module.scss'
import {ReactSVG} from 'react-svg'
import {Navigation} from './Navigation';
import searchLogo from '../../public/header_icons/search.svg';
import userLogo from '../../public/header_icons/user.svg';
import shopping_basket from '../../public/header_icons/basket.svg';
import pink_punk_black from '../../public/header_icons/pink_punk_black.svg';
import {useScrollPosition} from '../../custom_hooks/useScrollPosition'


type MainLayoutType = {
    children: React.ReactNode
    title: string
    burger: boolean
    setBurger: (burger: boolean) => void
    nav: boolean
    setNav: (nav: boolean) => void
}

export const MainLayout = ({children, title = 'Pink Punk', burger, setBurger, nav, setNav}: MainLayoutType) => {

    const scrollPosition = useScrollPosition();


    useEffect(() => {
        window.onwheel = (e) => {
            let scrollDirection = e.deltaY < 0
            scrollPosition > 100 && !scrollDirection ? setNav(true) : setNav(false)
        }
    }, [scrollPosition])


    const changeBurger = () => {
        setBurger(!burger)
    }

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="keywords" content="одежда,мода,шорты,свитшот,oversize,анорак,тренч,пальто,панама,футболка
                ,штаны,карго,pink punk,pink punk brand,магазин одежды,шоурум,Минск,showroom,clothes,t-shirt,shirt,
                рубашка,стиль,косуха,кепка,бейсболка,снэпбек,широкая одежда,носки,неоновый кот,неоновый чертик,шорная 20"/>
                <meta name="description"
                      content="Магазин стильной оверсайз одежды в бунтарском стиле.Создаем одежду для людей.Придерживаемся правила 'мы не экономим на кофорте покупателя'.Часто радуем новыми коллекциями"/>
                <meta charSet="utf-8"/>
            </Head>
            <div className={nav ? `${style.header} ${style.active}` : style.header}>
                <span className={burger ? `${style.portfolio} ${style.burger_on}` : style.portfolio}>
                         <div className={style.wrapper_logo_pink_punk}>
                             <Link href={'/'}>
                                <a>
                                     <div className={style.logo_pink_punk}>
                                            <ReactSVG src={pink_punk_black.src}
                                              className={burger ? style.logo_svg_white : style.logo_svg}/>
                                     </div>
                                </a>
                             </Link>
                         </div>
                </span>
                <div className={burger ? `${style.icons} ${style.burger_on}` : style.icons}>
                    <Link href={'/search'}><a>
                        <ReactSVG src={searchLogo.src}
                                  className={burger ? style.icon_svg_white : style.icon_svg}/>
                    </a></Link>
                    <Link href={'/user'}><a>
                        <ReactSVG src={userLogo.src}
                                  className={burger ? style.icon_svg_white : style.icon_svg}/>
                    </a></Link>
                    <Link href={'/basket'}><a>
                        <ReactSVG src={shopping_basket.src}
                                  className={burger ? style.icon_svg_white : style.icon_svg}/>
                    </a></Link>
                </div>
                <div className={burger ? `${style.header_burger} ${style.burger_on}` : style.header_burger}
                     onClick={() => {
                         changeBurger()
                     }}>
                    <span></span>
                </div>
                <div className={burger ? `${style.wrapper} ${style.wrapper_on}` : style.wrapper}>
                    <Navigation burger={burger} setBurger={setBurger} nav={nav}/>
                </div>
            </div>
            <main>
                {children}
            </main>
        </>
    );
};

