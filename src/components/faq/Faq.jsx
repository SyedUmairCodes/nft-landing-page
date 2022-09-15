import React, { useState } from 'react'
import "./faq.css"
import faqImage from "../../assets/images/faq-image.png"
const Faq = () => {
  return (
    <section className='faq section' id='faq'>
        <div className="faq__container grid container">
            <div className="faq__images">
                <div className="faq__orb"></div>
                <div className="faq__image">
                    <img src={faqImage} alt="Piggy bank"/>
                </div>
            </div>

            <div className="faq__content">
                <div className="faq__data">
                    <span className='section__subtitle'>Answer for every question</span>
                    <h2 className="section__title">Frequently Asked</h2>
                    <p className='faq__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga, excepturi doloremque libero facere iste cumque dolores est quibusdam alias nobis unde similique fugiat quisquam!</p>
                </div>
                <div className="faq__card">
                    {/* First item */}
                    <div className="faq__card-item">
                        <header className="faq__card-header">
                            <i className="ri-shield-line faq__card-icon"></i>
                            <h3 className="faq__card-title">100% Secure</h3>
                        </header>
                        <div className="faq__card-content">
                            <p className="faq__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel magnam maxime ipsam ipsum rem est! Blanditiis ullam consequuntur in a nostrum, eius dicta! Doloribus, eum accusamus. Sapiente, necessitatibus?</p>
                        </div>
                    </div>
                    {/* Second item */}
                    <div className="faq__card-item">
                        <header className="faq__card-header">
                            <i className="ri-shield-line faq__card-icon"></i>
                            <h3 className="faq__card-title">100% Secure</h3>
                        </header>
                        <div className="faq__card-content">
                            <p className="faq__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel magnam maxime ipsam ipsum rem est! Blanditiis ullam consequuntur in a nostrum, eius dicta! Doloribus, eum accusamus. Sapiente, necessitatibus?</p>
                        </div>
                    </div>
                    {/* Third  item */}
                    <div className="faq__card-item">
                        <header className="faq__card-header">
                            <i className="ri-shield-line faq__card-icon"></i>
                            <h3 className="faq__card-title">100% Secure</h3>
                        </header>
                        <div className="faq__card-content">
                            <p className="faq__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel magnam maxime ipsam ipsum rem est! Blanditiis ullam consequuntur in a nostrum, eius dicta! Doloribus, eum accusamus. Sapiente, necessitatibus?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq