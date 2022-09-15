import "./community.css"
import communityImage from "../../assets/images/community-image.png"
const Community = () => {
  return (
    <section className="community section" id="community">
        <div className="community__container container grid">
            <div className="community__images"> 
                <div className="community__orb"></div>
                <div className="community__image">
                    <img src={communityImage} alt="contact us" />
                </div>
            </div>
            <div className="community__data">
                    <span className="section__subtitle">Join now</span>
                    <h2 className="section__title">Be a part of our Community</h2>
                    <p className="community__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellendus voluptate in non aperiam fuga, nobis nam harum nemo facilis a asperiores ullam voluptatibus molestias temporibus! Dolore laboriosam debitis numquam?</p>
                </div>
            <div className="community__content">
                <div className="community__card">
                    <div className="community__card-box">
                        <div className="community__card-info">
                            <i className="ri-reddit-line"></i>
                            <div>
                                <h3 className="community__card-title">Reddit</h3>
                                <p className="community__card-description">Join the NFT.io subreddit</p>
                            </div>
                        </div>
                        <button className="button community__card-button">Join Now</button>
                    </div>
                </div>
                <div className="community__card">
                    <div className="community__card-box">
                        <div className="community__card-info">
                            <i className="ri-twitter-line"></i>
                            <div>
                                <h3 className="community__card-title">Twitter</h3>
                                <p className="community__card-description">Follow NFT.io on Twitter</p>
                            </div>
                        </div>
                        <button className="button community__card-button">Follow</button>
                    </div>
                </div>
                <div className="community__card">
                    <div className="community__card-box">
                        <div className="community__card-info">
                            <i className="ri-tiktok-line"></i>
                            <div>
                                <h3 className="community__card-title">TikTok</h3>
                                <p className="community__card-description">Follow NFT.io on TikTok</p>
                            </div>
                        </div>
                        <button className="button community__card-button">Follow</button>
                    </div>
                </div>
                <div className="community__card">
                    <div className="community__card-box">
                        <div className="community__card-info">
                            <i className="ri-discord-line"></i>
                            <div>
                                <h3 className="community__card-title">Discord</h3>
                                <p className="community__card-description">Join the NFT.io Discord server</p>
                            </div>
                        </div>
                        <button className="button community__card-button">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Community