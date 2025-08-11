---
layout: home

hero:
  name: "Dr. Lorenzo Candioti"
  text: "Simulation. Science. Software."
  tagline:  "Modelling complex systems in geoscience and industry"
  image:
    src: /home/profile_stahlgiesserei_cropped.png
  actions:
    - theme: brand
      text: View My Work
      link: /projects/index.md
    - theme: alt
      text: Contact Me
      link: /contact/index.md

features:
    - title: Geoscientific Research
      details: High-fidelity modelling of mantle convection, mountain formation, and reactive fluid systems using Julia, C, and MATLAB.
      link: /projects/geoscientific_research
    - title: Software Development
      details: Contributing to C-libraries and developing Julia packages for geodynamic modelling.
      link: /projects/software_development
---
<!-- About section -->
  <h2>About Me</h2>
  <div class="about-container">
    <!-- Text Column -->
    <div class="about-text">
    <p>
      I love building models, writing code, and teaming up with people who enjoy tackling tough problems. My work lives where geoscience, fluid mechanics, and machine learning meet, always with a focus on keeping it practical and useful.
    </p>
    <p>
      Right now, I’m a postdoctoral researcher at ETH Zürich, creating reactive transport models and AI-driven workflows for subsurface systems. Before that, I worked as a CAE engineer in industry, using CFD and FEM tools to boost product performance and speed up development.
    </p>
    <p>
      I’m always happy to connect, swap ideas, and explore new projects in science, data analysis, machine learning, and engineering. If any of that sounds interesting to you, drop me a message. I would love to hear from you.
    </p>
    </div>
    <!-- GIF Column -->
    <div class="about-gif">
    <figure>
      <img src="./public/home/FullAlpineCycle_PhD.gif" alt="Geoscience simulation animation">
        <figcaption style="font-size: 0.9rem; color: #555;">
        Movie: This cross-section model shows how the European Alps formed, from the opening of the Alpine-Tethys ocean to subduction, burial, and exhumation, based on work from my PhD that led to four published papers.
        </figcaption>
    </figure>
    </div>
  </div>

<style>
.about-container {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: none;
  gap: 2rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-text {
  flex: 1;
  text-align: left;
}

.about-text h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: left;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.about-gif {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: left
}

.about-gif img {
  height: auto;
  width: 100%;
  border-radius: 8px;
}

.about-gif figcaption{
  width: 100%;
  text-align: center
}
</style>


