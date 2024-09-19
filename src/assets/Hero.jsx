const HeroSection = () => {
  return (
    <main className="container">
      <div className="hero-content">
        <h1>it's a React Project!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          <br />
          vitae rerum distinctio corrupti accusamus consequatur magni incidunt
          <br />
          sit laudantium non. Facere sit nostrum fugit officiis nulla voluptatum
          <br />
          repudiandae assumenda eveniet.
        </p>

        <div className="Hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="Shopping">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Asperiores, ipsam aliquid quisquam saepe odio harum impedit tenetur
            <br />
            fugiat excepturi vitae modi quam temporibus assumenda fugit iure est
            <br />
            laudantium? Distinctio, quas?
          </p>

          <div className="brand-icons">
            <img src="/Amazon.png" alt="Amazon-logo" />
            <img src="/Myntra.png" alt="Myntra-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <img className="hero-image" src="/new-image.png " alt="cat-logo" />
      </div>
    </main>
  );
};
export default HeroSection;
