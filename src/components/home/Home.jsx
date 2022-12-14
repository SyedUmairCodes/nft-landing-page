import React from 'react'
import "./home.css"
import heroImage from "../../assets/images/hero-image.png"
const Home = () => {
  return (<>
     <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              De-centralized<br/> Marketplace for NFTs
            </h1>
            <p className="home__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              esse, autem voluptas veritatis cum perspiciatis quibusdam unde
              mollitia aperiam vero atque asperiores.
            </p>

            <form action="" className="home__search">
              <i className="ri-search-line"></i>
              <input
                type="search"
                placeholder="search..."
                className="home__search-input"
              />
              <button className="button">Search</button>
            </form>

            <div className="home__value">
              <div>
                <h1 className="home__value-number">9k+</h1>
                <span className="home__value-description">NFTs minted</span>
              </div>
              <div>
                <h1 className="home__value-number">2k+</h1>
                <span className="home__value-description">
                  Creators and Sellers
                </span>
              </div>
              <div>
                <h1 className="home__value-number">28+</h1>
                <span className="home__value-description">Live Auctions</span>
              </div>
            </div>
          </div>

          <div className="home__images">
            <div className="home__orb"></div>

            <div className="home__img">
              <img src={heroImage} alt="Home section" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home