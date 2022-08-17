
import {MainLayout} from '../components/MainLayout';
import {GeneralLayout} from '../components/GeneralLayout';
import {useState} from 'react';
import {ShopPresentation} from '../components/ShopPresentation';




const Index = () => {

    const [burger, setBurger] = useState(false)
    const [nav, setNav] = useState(false)

    return (
        <MainLayout title={'Pink Punk'} burger={burger} setBurger={setBurger} nav={nav} setNav={setNav}>
            <GeneralLayout/>
            <ShopPresentation/>
        </MainLayout>
    )
}
export default Index;