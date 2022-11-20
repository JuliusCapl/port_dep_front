import React from 'react'
import './About.css'
import retrato from '../../assets/img/retrato.jpg'

const About = () => {
  return (
    <div className="bg-white" id="about">
      <section className="about-- container py-5 py-md-5">
        <div className="about--text py-5 px-md-5">
          <h3 className="mb-4">A little about me...</h3>
          <p>
          Hey There!! My name is Julio Capdevilla and I am new in the industry, I'm trying to learn every day something new.<br></br>
          This is my first portfolio and, in this section, it should say some cool things about me. but I am not cool. I have some knowledge in the technologies below: Javascript, NodeJS, MongoDB, PostgreSQL, ReactJS.<br></br>
          Soon you will be able to see in the section "Projects" some of the thing that I have been working on, and if you have any comment about anything in my portfolio you can write me whatever you want in the section "Contact".
          By the way the guy in the picture is not me.
          </p>
        </div>
        <div className="about--img">
          <img src={retrato} alt="portrait about section" />
        </div>
      </section>
    </div>
  )
}

export default About