import img_1 from '../../assets/Mario_and_Adrian_A.jpg';
import img_2 from '../../assets/Mario_and_Adrian_b.jpg';

const About = () => {
  return (
    <section>
      <div>
        <header>
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </header>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>

      <div>
        <div>
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            src={img_1}
            alt="Mario and Adrian #1"
          />
        </div>

        <div>
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            src={img_2}
            alt="Mario and Adrian #2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
