export function Home() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="intro__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum laborum at?
          </p>
          <button
            className="intro__button button-simple btn-violet"
            aria-label="Intro button violet"
            type="submit"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
