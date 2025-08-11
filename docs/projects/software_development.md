# :gear: Software Development

On this page, I list the software projects I contribute to or develop myself. Most of them are developed in *C* or [*The Julia Programming Language*](https://julialang.org "https://julialang.org").

## MDOODZ - a 2D geodynamic modelling library

I first started working with the geodynamic modeling software [*MDOODZ*](https://github.com/tduretz/MDOODZ7.0 "https://github.com/tduretz/MDOODZ7.0") during my PhD and still contribute to its development today.
*MDOODZ* is a C-library for simulating geological processes across a wide range of scales — from the deformation of individual mineral grains to lithospheric-scale rifting, subduction, Archean tectonics, and mantle convection.

The animation below highlights one of its capabilities: predicting the burial and exhumation cycle of ultra-high-pressure (UHP) tectonic units in the European Alps.
On the left, you see the strain evolution across the mountain range, and on the right, the temperature–pressure paths of individual rock units traced by markers.
This simulation was part of my PhD research.

::: warning Details
🔧 **Tech:** C, Finite Difference, Julia and MATLAB for visualisation

🏢 **Context:** Lithsopheric-scale geodynamic modelling | PhD @ Université de Lausanne
:::

<figure>
  <img
    src="/projects/software_dev/UHP_exhum_alps.gif"
    alt="(U)HP rock exhumation"
  />
  <figcaption>
    Movie: <em>MDOODZ</em>-simulation of (U)HP units exhuming along the plate interface.
  </figcaption>
</figure>