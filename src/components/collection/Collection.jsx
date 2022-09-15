import "./collection.css"
import nftOne from "../../assets/images/delivery-nft.png"
import nftTwo from "../../assets/images/watch-nft.png"
import nftThree from "../../assets/images/money-nft.png"
import nftFour from "../../assets/images/apple-nft.png"
const Collection = () => {
  return (
    <section className="collection section" id="collection">
        <div className="container">
          <h3 className="section__subtitle">Hottest NFTs</h3>
          <h2 className="section__title">Latest Additions</h2>

          <div className="collection__container">
            <div>
              <article className="collection__card">
                <img src={nftOne} alt="collection houses" class="collection__img" />
                <div className="collection__data">
                  <h2 className="collection__price">6,324 ETH</h2>
                  <h3 className="collection__title">Flare Delivery </h3>
                  <p className="collection__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem iusto totam soluta temporibus</p>
                </div>
              </article>

              <article className="collection__card">
                <img src={nftTwo} alt="collection houses" class="collection__img" />

                <div className="collection__data">
                  <h2 className="collection__price">6,324 ETH</h2>
                  <h3 className="collection__title">Flare smartwatch</h3>
                  <p className="collection__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem iusto totam soluta temporibus</p>
                </div>
              </article>

              <article className="collection__card">
                <img src={nftThree} alt="collection houses" class="collection__img" />

                <div className="collection__data">
                  <h2 className="collection__price">
                  16,324 ETH
                  </h2>
                  <h3 className="collection__title">Flare Money</h3>
                  <p className="collection__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem iusto totam soluta temporibus
                  </p>
                </div>
              </article>

              <article className="collection__card">
                <img src={nftFour} alt="collection houses" class="collection__img" />

                <div className="collection__data">
                  <h2 className="collection__price">
                    8,500 ETH
                  </h2>
                  <h3 className="collection__title">Flare Apple</h3>
                  <p className="collection__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem iusto totam soluta temporibus
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Collection