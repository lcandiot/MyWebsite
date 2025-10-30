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
    <strong> Movie </strong> <em>MDOODZ</em>-simulation of (U)HP units exhuming along the plate interface.
  </figcaption>
</figure>

## Julia Packages

### GeoUtils.jl

For many of my projects, I often need software tools that are closely tailored to the specific problems I’m working on. Since these needs are highly individual, it wasn’t surprising to find relevant pieces scattered across various existing Julia packages. Still, the solutions I built, along with all their dependencies, often felt stitched together and increasingly cumbersome to maintain. 

Over time, I realized I was repeatedly re-implementing the same components for visualization, numerical schemes, and statistical data analysis. One example is the creation of 2D *kernel density maps* (KDE). 

<figure>
  <img
    src="/projects/software_dev/kde_map_Makie.png"
    alt="2D Kernel density map"
  />
  <figcaption>
    <strong> Figure </strong> Visualizing data coverage with KDEs using <a href=https://github.com/lcandiot/GeoUtils.jl > <i>GeoUtils.jl</i> </a>.
  </figcaption>
</figure>

To streamline this process, I decided to consolidate all these functions into a single framework: [***GeoUtils.jl***]((https://github.com/lcandiot/GeoUtils.jl)). The package is still evolving, and I continue to expand it as new tasks arise, but it’s already rewarding to have all essential tools gathered in one place.

At this stage, the package isn’t registered in Julia’s General registry since it’s highly personal and not yet broadly applicable. However, that might change in the future. Until then, you can install it directly from GitHub.