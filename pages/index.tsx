
import {MainLayout} from '../components/Layouts/MainLayout';
import {GeneralLayout} from '../components/Layouts/GeneralLayout';
import {useState} from 'react';
import {ShopPresentation} from '../components/ShopSection/ShopPresentation';
import {Footer} from '../components/Footer/Footer';




const Index = () => {

    const [burger, setBurger] = useState(false)
    const [nav, setNav] = useState(false)

    return (
        <MainLayout title={'Pink Punk'} burger={burger} setBurger={setBurger} nav={nav} setNav={setNav}>
            <GeneralLayout/>
            <ShopPresentation setNav={setNav}/>
            <Footer/>
        </MainLayout>
    )
}
export default Index;