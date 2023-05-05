import React from 'react'
import Header from '../../components/Header'
import aboutUs from '../../images/aboutUs.jpeg'
import aboutCompany from '../../images/aboutCompany.jpeg'
import aboutWhatwedo from '../../images/aboutWhatwedo.jpeg'
import vission from '../../images/vission.jpeg'
import mission from '../../images/mission.jpeg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title='About us' image={aboutUs}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus ut ea tempora labore maxime error illo ratione molestiae commodi?
      </Header>
      <section className='about__story' style={{ marginTop: '5rem' }}>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={aboutCompany} />
          </div>
          <div className='about__section-content'>
            <h1>About Company</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, maiores. Voluptatibus, alias. Officia eligendi commodi aut debitis autem suscipit non provident, repellat aperiam odit, cumque vitae repellendus quasi. Sapiente, doloribus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, maiores. Voluptatibus, alias. Officia eligendi commodi aut debitis autem suscipit non provident, repellat aperiam odit, cumque vitae repellendus quasi. Sapiente, doloribus!</p>
          </div>

        </div>
      </section>
      <section className='whatwedo' style={{ marginTop: '5rem' }}>
        <div className='container about__whatwedo-container'>
          <div className='about__section-content'>
            <h1>What we do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, maiores. Voluptatibus, alias. Officia eligendi commodi aut debitis autem suscipit non provident, repellat aperiam odit, cumque vitae repellendus quasi. Sapiente, doloribus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, maiores. Voluptatibus, alias. Officia eligendi commodi aut debitis autem suscipit non provident, repellat aperiam odit, cumque vitae repellendus quasi. Sapiente, doloribus!</p>
          </div>
          <div className='about__section-image'>
            <img src={aboutWhatwedo} />
          </div>
        </div>
      </section>
      <section className='about__mission' style={{ marginTop: '5rem' }}>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={vission} />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>We exist to create the beautiful backdrops against which our clients experience their lives. We are honored by the trust clients impart to us to select the sofa on which emotional conversations will occur, a table on which a young artist will create many masterpieces, and a fabric which can evoke a specific memory 50 years later. Walls contain hope, joy, sadness, grief, and laughter; it is our privilege and our promise to design beautiful spaces within which to experience emotion and life.</p>
          </div>

        </div>
      </section>
      <section className='about__vision' style={{ marginTop: '5rem' }}>
        <div className='container about__vision-container'>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>We aspire to convey the sense of passion we feel about our craft and our clients through our work each day. We hope to challenge and inspire generations of clients through design born of diversity, innovation, collaboration, laughter, and layers. Remove the ego and create design that works—and wows.</p>
          </div>
          <div className='about__section-image'>
            <img src={mission} />
          </div>
        </div>

      </section>
    </>
  )
}

export default About
