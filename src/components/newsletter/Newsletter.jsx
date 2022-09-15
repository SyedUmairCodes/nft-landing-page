import "./newsletter.css"
const Newsletter = () => {
  return (
    <section className="newsletter section">
        <div className="newsletter__container container">
            <h1 className="newsletter__title">Subscribe to our newsletter</h1>
            <form action="" className="home__search">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter__input"
              />
            </form>
            <a href="#" className="button newsletter__button">Subscribe</a>
        </div>
    </section>
  )
}

export default Newsletter