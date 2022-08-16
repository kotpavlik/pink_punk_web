import React from 'react';
import Link from 'next/link';
import {MainLayout} from '../components/MainLayout';
import style from '../styles/error404.module.scss'

const Custom404 = () => {
    return (
        <MainLayout title={'Error'}>
            <div className={style.wrapper_error}>
                <h1 className={style.error}>Error 404</h1>
                <p>перейти на главную <Link href={'/'}><a>Pink Punk</a></Link></p>
            </div>
        </MainLayout>
    );
};
export default Custom404;

