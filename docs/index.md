---
layout: home

hero:
  name: "Dr. Lorenzo Candioti"
  text: "Science. Software. Stories."
  tagline: "Modelling complex systems for science and industry"
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
    - title: Research
      details: High-fidelity modelling of convection, mountain formation, and reactive fluid systems using Julia, C, and Python.
      link: /projects/geoscientific_research/
    - title: Software Development
      details: Contributing to C-libraries and developing Julia packages for geodynamic modelling.
      link: /projects/software_development/

news:
  - date: 16.04.2026
    text: 🚨📝 <strong> Paper alert </strong> - our article on validating thermodynamic models and designing neural networks for
      fast inference of material properties is now published in <a href="https://doi.org/10.1029/2025GC012766" target="_blank"><strong><i>Geochemistry, Geophysics, Geosystems</i></strong></a>!
  - date: 10.03.2026
    text: 📦 <strong> New release </strong> - my Julia package <a href="https://github.com/lcandiot/GeoUtils.jl" target="_blank"><strong><i>GeoUtils.jl</i></strong></a> has a new release. It features new visualization functions including a CairoMakie extension to plot mineral phase abundances and a function to write a GIF from pngs. Feel free to check it out and leave me a star.
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
        <figcaption>
          <strong> Movie </strong> This 2D thermo-mechanical model shows the evolution of the European Alps from the opening of the Alpine-Tethys ocean to subduction, burial, and subsequent exhumation of European continental crust. It is a cross-sectional view through the mountain range, revealing its internal deformation and temperature distribution. The simulation is based on my PhD research, which led to four peer-reviewed publications.
        </figcaption>
    </figure>
    </div>
  </div>

<style>
.about-container {
  display: flex;
  align-items: left;
  text-align: left;
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
  justify-content: left;
  text-align: left
}

.about-gif img {
  height: auto;
  width: 100%;
  border-radius: 8px;
}
.feature-news-container {
  width: 100%;
}
</style>


