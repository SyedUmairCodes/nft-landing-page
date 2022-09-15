import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
        <div className="footer__container container grid">
            <div>
                <a href="/" className="footer__logo">NFT.io</a>
                <p className="footer__description">lorem ispsum dolar ismet.</p>
            </div>
            <div className="footer__content">
                <div>
                    <h3 className="footer__title">Menu</h3>
                    <ul className="footer__links">
                    <li><a href="#" className="footer__link">Home</a></li>
                    <li><a href="#" className="footer__link">Collections</a></li>
                    <li><a href="#" className="footer__link">FAQs</a></li>
                    <li><a href="#" className="footer__link">Community</a></li>
                    </ul>    
                </div>
                <div>
                    <h3 className="footer__title">Social</h3>
                    <ul className="footer__links">
                    <li><a href="#" className="footer__link">Twitter</a></li>
                    <li><a href="#" className="footer__link">Instagram</a></li>
                    <li><a href="#" className="footer__link">Discord</a></li>
                    <li><a href="#" className="footer__link">Reddit</a></li>
                    </ul>    
                </div>
                <div>
                    <h3 className="footer__title">Privacy</h3>
                    <ul className="footer__links">
                    <li><a href="#" className="footer__link">Policy</a></li>
                    <li><a href="#" className="footer__link">Data collection</a></li>
                    <li><a href="#" className="footer__link">GDPR</a></li>
                    <li><a href="#" className="footer__link">Open source</a></li>
                    </ul>    
                </div>
            </div>
        </div>

        <div className="footer__info container">
            <span className="footer__copy">
                &#169; NFT.io All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer