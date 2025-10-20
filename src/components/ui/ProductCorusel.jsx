import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "../../assets/media/qizil_oldi.jpg";
import img2 from "../../assets/media/qizil_orqa.jpg";
import img3 from "../../assets/media/kok_oldi.jpg";
import img4 from "../../assets/media/kok_orqa.jpg";
import img5 from "../../assets/media/dets_oldi.jpg";
import img6 from "../../assets/media/dets_orqa.jpg";
import img7 from "../../assets/media/qora_oldi.jpg";
import img8 from "../../assets/media/qora_orqa.jpg";
import img9 from "../../assets/media/sariq_oldi.jpg";
import img10 from "../../assets/media/sariq_orqa.jpg";
import img11 from "../../assets/media/yak_oldi.jpg";
import img12 from "../../assets/media/yak_orqa.jpg";
import "../../assets/ProductsCorusel.css"; // ✅ shu faylni ham qo‘shing

// === DATABASE (front/back image pairs) ===
const products = [
    {
        id: 1,
        name: "Kelinlar libosi",
        frontImg: img1,
        backImg: img2,
        price: 25,
        type: "Clothes",
    },
    {
        id: 2,
        name: "Kostyum libosi",
        frontImg: img3,
        backImg: img4,
        price: 20,
        type: "Bags",
    },
    {
        id: 3,
        name: "Bolalar ko'ylagi",
        frontImg: img5,
        backImg: img6,
        price: 22,
        type: "Clothes",
    },
    {
        id: 4,
        name: "ABAYA LIBOSI",
        frontImg: img7,
        backImg: img8,
        price: 65,
        type: "Clothes",
    },
    {
        id: 5,
        name: "Ayollar pidjagi",
        frontImg: img9,
        backImg: img10,
        price: 20,
        type: "Clothes",
    },
    {
        id: 6,
        name: "Ayollar pidjagi",
        frontImg: img11,
        backImg: img12,
        price: 20,
        type: "Clothes",
    },
];

// === COMPONENT ===
const ProductCarousel = () => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                spaceBetween={150}
                centeredSlides={true}
                navigation
                effect="coverflow"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    600: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card">
                            <div className="img-wrapper">
                                <img
                                    src={product.frontImg}
                                    alt={product.name}
                                    className="front-img"
                                />
                                <img
                                    src={product.backImg}
                                    alt={`${product.name} orqa tomoni`}
                                    className="back-img"
                                />
                            </div>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
