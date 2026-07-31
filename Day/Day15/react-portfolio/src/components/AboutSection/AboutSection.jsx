import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Krishna' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm krishna karthik who is studying cse in MSRUAS.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
