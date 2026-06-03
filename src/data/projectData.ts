export const projectData = {
  hero: {
    title: 'Volcanological History of the Oamaru Area',
    subtitle: 'Waitaki Basin, New Zealand • Mid-Cretaceous to Mid-Miocene',
    positioning: 'A digital field report and case study exploring the geological evolution and monogenetic Surtseyan volcanic events of North Otago.',
  },
  overview: {
    description: 'This field project investigates the sedimentation and volcanological history of the Waitaki Basin from the Mid-Cretaceous through the Mid-Miocene. Using field mapping, clast counting, and outcrop analysis, the project unpacks the transition from fluvial systems to deep marine environments, punctuated by the explosive Eocene-Oligocene submarine volcanism of the Waiareka and Deborah volcanic groups.',
    themes: ['Basin Sedimentology', 'Submarine Volcanism', 'Field Mapping', 'Clast Analysis'],
  },
  timeline: [
    {
      period: 'Mid-Cretaceous',
      formation: 'Mataeka Group',
      environment: 'Steep gradient fluvial',
      description: 'Sedimentation began with the Horse Range Formation. Braided river formation in a non-marine, low-energy to high-energy fluvial environment.',
    },
    {
      period: 'Early Eocene',
      formation: 'Kauru Formation & Tapui Sandstone',
      environment: 'Shallow inner shelf',
      description: 'Sea-level rise transitioned the environment from non-marine to a high-energy shallow inner shelf, depositing glauconitic sandstones.',
    },
    {
      period: 'Late Eocene - Early Oligocene',
      formation: 'Alma Group & Volcanics',
      environment: 'Mid-outer shelf',
      description: 'Maximum inundation of Zealandia. Deposition of Otatara Limestone. Eruption of Waiareka (Late Eocene) and Deborah (Early Oligocene) volcanics.',
    },
    {
      period: 'Late Oligocene',
      formation: 'Marshall Paraconformity',
      environment: 'Erosional/Inner shelf',
      description: 'A regional surface erosion or non-deposition event, characterized by phosphatic nodules and sea-level drop.',
    },
    {
      period: 'Mid-Miocene',
      formation: 'Rifle Butts Formation',
      environment: 'Non-marine',
      description: 'Massive gray siltstones indicate sea level dropping again, shifting back to a non-marine fluvial environment.',
    }
  ],
  evidence: [
    {
      title: 'Boatsman Harbour Pillow Lava',
      location: 'Boatsman Harbour, Oamaru',
      type: 'Waiareka Volcanics',
      description: 'Basaltic pillow lavas infilled with Bryozoan-rich Otatara Limestone matrix. Formed by very fast cooling lava during submarine basaltic eruptions. Volcanic glass forms distinctive rings surrounding the basalt clasts.',
    },
    {
      title: 'Surtseyan Eruption at Kakanui South',
      location: 'Headland, Kakanui South',
      type: 'Deborah Volcanics',
      description: 'Basaltic juvenile-rich olivine lapilli-tuff resulting from a monogenic surtseyan-style submarine eruption. Identified clasts include olivine, calcium-rich feldspar, and garnet.',
    },
    {
      title: 'Oamaru Paleoblocks Illustrations',
      location: 'Waitaki Basin',
      type: 'Paleoblocks',
      description: 'Analysis of paleoblocks reveals significant structural rotation and displacement within the basin, providing evidence of early tectonic framework and structural controls before the main volcanic phases.',
    },
    {
      title: 'Dissolution Cavities',
      location: 'Gee\'s Point & Campbell Beach',
      type: 'Unconformity Evidence',
      description: 'Gee Greensand records Ophiomorpha burrowing and bioclasts. Otakaike Limestone exhibits dissolution cavities formed by the younger Gee Greensand dissolving the underlying Otatara limestone.',
    }
  ],
  interpretations: [
    {
      observation: 'Largest juvenile clast (70cm diameter) centralized near the cliff in Kakanui South headland.',
      interpretation: 'Clast sizing identifies the center of the hydrothermal vent and eruption point, as large juveniles cannot travel far from their source.',
    },
    {
      observation: 'Outcrop dip angle shows opposite 50° angles.',
      interpretation: 'Indicates the eruption formed an antiform cone structure, identifying the physical remnants of the volcanic cone.',
    },
    {
      observation: 'Volcanic and amphibole minerals found cemented within Otatara Limestone.',
      interpretation: 'Juvenile materials did not have time to cool completely underwater before deposition with mid-outer shelf sediments, forming distinct volcaniclastic rocks.',
    }
  ],
  methods: [
    'Regional field mapping to identify structural geologic features.',
    'Clast counting (measuring ash vs. lapilli sizing) at Kakanui Mineral Breccia to compare primary vent proximity.',
    'Identification of primary lithologies, crystal abundances, and depositional facies.',
    'Observations of bioclastic matrices and structural dips to infer paleo-environments.'
  ],
  insights: [
    {
      title: 'Submarine Eruption Dynamics',
      text: 'Explosive Surtseyan-style monogenetic eruptions dominated the Eocene-Oligocene, triggered by basaltic magma interacting with supersaturated marine environments.',
    },
    {
      title: 'Shifting Paleoenvironments',
      text: 'The Waitaki Basin underwent a complete cycle from Cretaceous fluvial braided rivers, deeply inundating into outer-shelf marine environments by the Oligocene, and retreating to fluvial plains by the Miocene.',
    },
    {
      title: 'Hydrothermal Activity',
      text: 'Extensive hydrothermal alteration occurred alongside eruptions, depositing pinkish magnesium calcite around fault boundaries near ancient vent systems.',
    }
  ],
  reflection: 'This field study changed how I read outcrops: small details like uncooled juvenile clasts and calcite veins pointed to submarine eruptions and hydrothermal influence, and when combined with mapping they revealed a coherent volcanic history for the area.'
};
