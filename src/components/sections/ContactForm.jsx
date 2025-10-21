import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../../public/favicon.png";
import "../../assets/ContactForm.css";

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <section id="ContactForm" className="contact">
            <div className="contact__container">
                <header className="contact__header">
                    <h2 className="contact__title">{t("contact")}</h2>
                    <p className="contact__subtitle">{t("location")} {t("locationData")}</p>
                </header>

                <div className="contact__grid">
                    {/* Left: Contact card */}
                    <div className="card">
                        <div className="card__head">
                            <img
                                src={Logo}
                                alt="ATELIER DE HABUN"
                                className="brand__logo"
                                loading="lazy"
                            />
                            <div className="brand__meta">
                                <h3 className="brand__role">{t("generalManager")}</h3>
                                <p className="brand__name">{t("managerName")}</p>
                            </div>
                        </div>

                        <ul className="contact__list">
                            <li>
                                <a
                                    href="tel:+998996255527"
                                    className="contact__link contact__link--phone"
                                    aria-label={`${t("phone")} +998(99) 625 55 27`}
                                >
                  <span className="contact__icon contact__icon--phone">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </span>
                                    <span className="contact__text">
                    <span className="contact__label">{t("phone")}</span>
                    <span className="contact__value">+998 (99) 625 55 27</span>
                  </span>
                                </a>
                            </li>

                            <li className="social__row">
                                <a
                                    href="https://instagram.com/baqoyeva_muhabbat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__link social__btn social__btn--ig"
                                >
                  <span className="contact__icon">
                    <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                  </span>
                                    <span className="social__text">
                    <span className="social__brand">Instagram</span>
                  </span>
                                    <i className="fa-solid fa-arrow-up-right-from-square social__ext" aria-hidden="true"></i>
                                </a>

                                <a
                                    href="https://t.me/+MyBBgmzAM8cxZDAy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__link social__btn social__btn--tg"
                                >
                  <span className="contact__icon">
                    <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                  </span>
                                    <span className="social__text">
                    <span className="social__brand">Telegram</span>
                  </span>
                                    <i className="fa-solid fa-arrow-up-right-from-square social__ext" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="contact__hours" aria-label="Working hours">
                            <i className="fa-regular fa-user contact__hours-icon" aria-hidden="true"></i>
                            <span>Mon–Sat · 09:00–19:00</span>
                        </div>
                    </div>

                    {/* Right: Map card */}
                    <div className="card card--map">
                        <div className="card__bar">
                            <h3 className="card__title">
                                <i className="fa-solid fa-location-dot card__title-icon" aria-hidden="true"></i>
                                {t("location")}
                            </h3>
                        </div>
                        <div className="map">
                            <div className="map__frame">
                                <iframe
                                    title="ATELIER DE HABUN location map"
                                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6109.382885185582!2d64.38597!3d40.037668!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAyJzE1LjYiTiA2NMKwMjMnMDkuNSJF!5e0!3m2!1sru!2s!4v1760767136633!5m2!1sru!2s"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
