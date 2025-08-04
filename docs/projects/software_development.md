# :gear: Software development

On this page, I list the software projects I contribute to or develop myself. Most of them are developed in C or Julia :rocket:

## :mountain: MDOODZ7.0 - a 2D geodynamic modelling library

I started using this state-of-the-art geodynamic modelling software during my PhD and I am still actively contributing to it. [*MDOODZ*](https://github.com/tduretz/MDOODZ7.0 "https://github.com/tduretz/MDOODZ7.0") is a C-library that can be used to simulate geological processes acting across mutliple scales from deformation of individual grains up to full lithospheric-scale rifting, subduction, archean tectonics and mantle convection :fire:

The animation below showcases *MDOODZ*'s capability of predicting the burial and exhumation cycle of ultra-high-pressure (UHP) tectonic units observed in the European Alps. The right column shows a strain map across the mountain range, the left column shows the temperature and pressure evolution of different units traced by individual markers. This simulation has been conducted as part of my PhD thesis.

::: warning Details
🔧 **Tech:** C, Finite Difference, MATLAB for visualisation

🏢 **Context:** Lithsopheric-scale geodynamic modelling | PhD @ Université de Lausanne
:::

<figure style="margin: 3rem 0; text-align: center;">
  <img
    src="/projects/software_dev/UHP_exhum_alps.gif"
    alt="(U)HP rock exhumation"
    style="max-width: 100%; height: auto; border-radius: 6px;"
  />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666;">
    Animation: Simulation of (U)HP units exhuming along the subduction interface.
  </figcaption>
</figure>