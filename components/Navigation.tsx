import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import style from '../styles/navigation.module.scss'
import searchLogo from '../public/header_icons/search.svg'
import userLogo from '../public/header_icons/user.svg'
import shopping_basket from '../public/header_icons/basket.svg'
import heart_like from '../public/header_icons/heart.svg'
import pink_punk_black from '../public/header_icons/pink_punk_black.svg'

type NavigationPropsType = {
    burger: boolean
    setBurger: (burger: boolean) => void
    nav:boolean
}

export const Navigation = ({burger, setBurger,nav}: NavigationPropsType) => {

    const closeBurger = () => {
        setBurger(!burger)
    }

    return (

        <nav className={burger ? `${style.navigation_flex} ${style.navigation_flex_burger}` : style.navigation_flex}>
            <div className={style.navigate_page}>
                <div className={style.link_wrapper}>
                    <Link href={'/'}>
                        <a onClick={closeBurger}>
                            <div className={style.logo_pink_punk}>
                                <Image src={pink_punk_black} width={100} height={30}></Image>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.link_wrapper}>
                    <Link href={'/catalog'}><a onClick={closeBurger}>каталог</a></Link>
                </div>
                <div className={style.link_wrapper}>
                    <Link href={'/news'}><a onClick={closeBurger}>новости</a></Link>
                </div>
                <div className={style.link_wrapper}>
                    <Link href={'/lookbook'}><a onClick={closeBurger}>лукбук</a></Link>
                </div>
                <div className={style.link_wrapper}>
                    <Link href={'/about'}><a onClick={closeBurger}>о нас</a></Link>
                </div>
            </div>
            <div className={style.navigate_user}>
                <Link href={'/language'}><a onClick={closeBurger}>ru</a></Link>
                <Link href={'/search'}><a onClick={closeBurger}>
                    <Image src={searchLogo} width={20} height={20}></Image>
                </a></Link>
                <Link href={'/user'}><a onClick={closeBurger}>
                        <Image src={userLogo} width={20} height={20}></Image>
                </a></Link>
                <Link href={'/basket'}><a onClick={closeBurger}>
                        <Image src={shopping_basket} width={20} height={20}></Image>
                </a></Link>
                <Link href={'/like'}><a onClick={closeBurger}>
                    <Image src={heart_like} width={20} height={20}></Image>
                </a></Link>
            </div>
        </nav>
    );
};

