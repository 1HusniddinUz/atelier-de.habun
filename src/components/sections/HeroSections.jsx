import React from 'react'
import "../../assets/HeroSection.css"
import {useTranslation} from "react-i18next";
const HeroSections = () => {
    const {t , i18n} = useTranslation();

    return (
    <div id='HeroSections'>
        <div id="HeroText">
            <h1>{t(`quotes`)}</h1>
            <p>{t(`aboutUs`)}</p>
            <a href="#OurProducts"><button>{t(`products`)}</button></a>
        </div>
        <div id="HeroProduct_bg"></div>
    </div>
  )
}

export default HeroSections