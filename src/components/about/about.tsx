import img_1 from '../../assets/Mario_and_Adrian_b.jpg';
import img_2 from '../../assets/Mario_and_Adrian_A.jpg';
import './about.css';

const About = () => {
  return (
    <section className="bg-primary py-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-lg-4">
            <header>
              <h2 className="heading text-secondary">Little Lemon</h2>
              <p className="subtitle text-light">Chicago</p>
            </header>
            <p className="lead text-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>

          <div
            className="col-auto "
            style={{ position: 'relative', marginLeft: 'auto' }}
          >
            <div className="about__container-img">
              <img
                className="img-fluid rounded"
                src={img_1}
                alt="Mario and Adrian #1"
              />
            </div>

            <div className="about__container-img about__container-img--2 ">
              <img
                className="img-fluid rounded"
                src={img_2}
                alt="Mario and Adrian #2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
