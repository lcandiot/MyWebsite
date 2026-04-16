# 🌍 Geoscience projects

Welcome to a brief selection of research projects I’ve led in the domain of Geosciences. This list isn’t exhaustive — it includes only articles where I’m the first author. Follow me on <a href="https://www.researchgate.net/profile/Lorenzo-Candioti">ResearchGate</a> for updates on my scientific work!

## Validating Thermodynamic Models of Arc-Magma Differentiation and Training Neural Networks for Rapid Thermodynamic Property Inference (2026)

In this article, I tackle one of the biggest computational hurdles in reactive transport modelling: the sheer slowness of traditional Gibbs Free Energy Minimization (GFEM). Because calculating mineral phases is often orders of magnitude slower than solving for physics like fluid flow, it creates a massive bottleneck for researchers.

To solve this, I developed a Multi-Layer-Perceptron (MLP) surrogate model designed to replace traditional solvers. The real breakthrough wasn’t just the architecture, but how I handled the data. Geochemical data is notoriously sparse due to the limits of lab experiments, so I built an entirely new workflow to bridge the gap. I started by randomly sampling compositions to capture broad trends, then used a traditional GFEM solver to generate a robust synthetic dataset for training.

The result is a neural network capable of lightning-fast thermodynamic property inference. It performs about **3000x faster** than traditional methods while maintaining high precision, delivering liquid compositions with an **error of less than 1 wt.%**. This approach offers a more efficient path for incorporating complex geochemistry into large-scale models without the typical computational overhead 

::: tip **Why it matters**
Accelerating geochemical computations brings us one step closer to more realistic reactive transport models that simulate geological processes like the formation of critical mineral resources.
:::

::: warning Details
🔧 **Tech:** Julia language, Lux.jl, MLP surrogate models, GFEM

🏢 **Context:** Postdoc @ ETH Zürich

📄 **Article:** [Candioti et al., 2026, Geochemistry, Geophysics, Geosystems](https://doi.org/10.1029/2025GC012766 "Candioti et al., 2026, Gcubed")
:::

<figure>
  <img
    src="/projects/geoscientific_research/Candioti_et_al_2026_surrogateAccuracy.pdf"
    alt="Surrogate model accuracy"
  />
  <figcaption>
    <strong> Figure </strong> Surrogate model vs. traditional GFEM-solver predictions for thermodynamic quantities (taken from Candioti et al., 2026).
  </figcaption>
</figure>

## Horizontal force required for subduction initiation (2022)

I used 2D petrological–thermomechanical models to investigate how much horizontal force is needed to trigger subduction at passive margins. The simulations show that moderate shear heating (~50 °C) during deformation can significantly lower the strength of the lithosphere — reducing the required force to around 14–15 TN·m⁻¹, much lower than previous estimates.

The models account for realistic margin architecture and include mineral phase transitions like the olivine–wadsleyite transformation. Results also reveal how lithospheric strength controls the timing and geometry of slab detachment.

::: tip **Why it matters**
Understanding the mechanical thresholds for subduction helps explain how convergent plate boundaries can form spontaneously — a key process in Earth’s tectonic evolution.
:::

::: warning Details
🔧 **Tech:** C, Finite Difference, MATLAB, OpenMP

🏢 **Context:** PhD @ Université de Lausanne

📄 **Article:** [Candioti et al., 2022, Frontiers in Earth Sciences](https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2022.785418/full "Candioti et al., 2022, Frontiers")
:::

<figure>
  <img
    src="/projects/geoscientific_research/Candioti_et_al_2022_forces.png"
    alt="Horizontal forces"
   />
  <figcaption>
    <strong> Figure </strong> Evolution of horizontal and buoyancy forces during the formation of mountain belts (taken from Candioti et al., 2022).
  </figcaption>
</figure>

## Buoyancy vs shear forces controlling mountain belt formation (2021)

Leveraging 2D numerical models I analyzed the forces that drive mountain building, with a focus on long-term lithosphere–mantle interactions. My simulations quantify the balance between buoyancy forces and plate-induced shear forces, showing that both contribute significantly to orogenic dynamics. The models also explore how oceanic lithosphere strength and the crustal density structure — shaped in part by chemical reactions during metamorphism — affect deep rock recycling and surface topography in active mountain belts.

::: tip **Why it matters**
This work helps clarify how internal buoyancy forces—often underestimated—play a crucial role in orogen dynamics and mountain building, offering insight into the structural evolution of regions like the Alps and Pyrenees.
:::

::: warning Details
🔧 **Tech:** C, Finite Difference, MATLAB, OpenMP

🏢 **Context:** PhD @ Université de Lausanne

📄 **Article:** [Candioti et al., 2021, EGU Solid Earth](https://se.copernicus.org/articles/12/1749/2021/ "Candioti et al., 2021, EGU SE")
:::

<figure>
  <img
    src="/projects/geoscientific_research/Candioti_et_al_2021_buoyancy.png"
    alt="Buoyancy vs shear"
  />
  <figcaption>
    <strong> Figure </strong> How the magnitude and balance of buoyancy and shear force during the formation impacts on the the geometry of the mountain belts (taken from Candioti et al., 2021).
  </figcaption>
</figure>

## Impact of upper mantle convection on long-term cycles of the lithosphere (2020)

I conducted 2D thermo‑mechanical simulations that model a full tectonic cycle — extension, cooling, and convergence — over ~120 Myr. The goal was to explore how upper mantle convection influences lithospheric thinning and the mechanics of forced subduction initiation at passive margins.

The results show that mantle convective forces significantly govern both single‑side and double‑side subduction scenarios. The simulations quantify the horizontal stress levels required to trigger subduction, demonstrating that plate convergence must overcome lithosphere strength shaped by prior hyper-extension and thermal evolution.

::: tip **Why it matters**
This work clarifies how tectonic forces together with suction forces in the mantle can lead to or resist subduction initiation—key to understanding continental breakup and mountain-building processes in regions such as the Alpine Tethys.
:::

::: info **Model validation:**
Before modelling the full tectonic cycle, we made sure that our model accurately predicts real-world mantle convection by performing a community benchmark defined by [Tosi et al., 2015](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015gc005807 "Tosi et al., 2015, AGU G3").
:::

::: warning Details
🔧 **Tech:** C, Finite Difference, MATLAB, OpenMP

🏢 **Context:** PhD @ Université de Lausanne

📄 **Article:** [Candioti et al., 2020, EGU Solid Earth](https://se.copernicus.org/articles/11/2327/2020/ "Candioti et al., 2020, EGU SE")
:::


<figure>
  <img
    src="/projects/geoscientific_research/Candioti_et_al_2020_benchmark.png"
    alt="Convection benchmark"
  />
  <figcaption>
    <strong> Figure </strong> Results of a convection benchmark to verify our inhouse developed CFD solver (taken from Candioti et al., 2020).
  </figcaption>
</figure>

## References

<div class="references">

1. Candioti, L. G., Nathwani, C. L., & Chelle-Michou, C. (2026). Validating thermodynamic models of arc-magma differentiation and training neural networks for rapid thermodynamic property inference. Geochemistry, Geophysics, Geosystems, 27, e2025GC012766. https://doi.org/10.1029/2025GC012766
2. Candioti, L. G., Duretz, T., & Schmalholz, S. M. (2022). Horizontal force required for subduction initiation at passive margins with constraints from slab detachment. Frontiers in Earth Science, 10, 785418. https://doi.org/10.3389/feart.2022.785418
3. Candioti, L. G., Duretz, T., Moulas, E., and Schmalholz, S. M.: Buoyancy versus shear forces in building orogenic wedges, Solid Earth, 12, 1749–1775, https://doi.org/10.5194/se-12-1749-2021, 2021.
4. Candioti, L. G., Schmalholz, S. M., and Duretz, T.: Impact of upper mantle convection on lithosphere hyperextension and subsequent horizontally forced subduction initiation, Solid Earth, 11, 2327–2357, https://doi.org/10.5194/se-11-2327-2020, 2020.
5. Tosi, N., et al. (2015), A community benchmark for viscoplastic thermal convection in a 2-D square box, Geochem. Geophys. Geosyst., 16, 21752196, doi:10.1002/2015GC005807.

</div>

