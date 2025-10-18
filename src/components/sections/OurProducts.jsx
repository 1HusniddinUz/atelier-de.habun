import React from "react";
import "../../assets/OurProducts.css";
import ProductCarousel from "../ui/ProductCorusel";
import {useTranslation} from "react-i18next";
const OurProducts = () => {
    const {t , i18n} = useTranslation();

    return (
    <div id="OurProducts">
      <h1>{t(`products`)}</h1>
        <ProductCarousel />
    </div>
  );
};

export default OurProducts;
