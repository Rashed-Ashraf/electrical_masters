import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  keyFeatures: string[];
  deliverables: string[];
  standards: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cable-tray-ladder',
    title: 'Cable Tray & Cable Ladder Systems',
    shortDesc:
      'Complete engineering, fabrication, and on-site installation of heavy-duty perforated cable trays, ladder systems, and wire mesh trays for organized industrial power distribution.',
    fullDesc:
      'Electrical Masters provides industrial-grade cable management solutions customized for heavy commercial and industrial infrastructure. Our cable tray and ladder systems are manufactured using high-yield hot-dip galvanized steel, pre-galvanized sheet, and aluminum to resist severe atmospheric corrosion.',
    badge: 'CABLE MANAGEMENT',
    iconName: 'Layers',
    keyFeatures: [
      'Heavy-duty perforated cable trays & ladder type raceways',
      'Hot-dip galvanized (HDG), pre-galvanized, and powder-coated finishes',
      'Standard load test compliant up to NEMA VE-1 / IEC 61537',
      'Complete accessories: bends, tees, reducers, covers, and unistrut brackets',
      'Structured routing design avoiding thermal hotspot accumulation',
    ],
    deliverables: [
      'Site load calculations & route mapping',
      'Structural seismic & vibration supports',
      'Turnkey installation & safety inspection',
    ],
    standards: ['IEC 61537', 'NEMA VE-1', 'BS 7671'],
  },
  {
    id: 'earthing-systems',
    title: 'Earthing & Grounding Systems (All Types)',
    shortDesc:
      'Professional design, soil resistivity testing, installation, and certification of high-efficiency earthing systems including chemical, copper plate, and copper-bonded rod systems.',
    fullDesc:
      'A robust grounding system is paramount for personnel safety and equipment protection against fault currents. We provide turnkey earthing systems tailored to soil condition, low ground resistance (< 1 Ohm), and high fault current dissipation.',
    badge: 'SAFETY & GROUNDING',
    iconName: 'ShieldCheck',
    keyFeatures: [
      'Chemical earthing with maintenance-free ground enhancing compound (BFC)',
      'High-purity electrolytic 99.9% copper plate & copper-bonded steel rods',
      'Deep well bore grounding for difficult soil / rocky terrains',
      'Exothermic welding (Cadweld) for permanent low-resistance connections',
      'Pre-commissioning Earth Resistance Megger Testing & compliance certification',
    ],
    deliverables: [
      'Wenner 4-Point Soil Resistivity Survey',
      'Equipotential bonding verification',
      'Official Earth Pit Resistance Test Report',
    ],
    standards: ['IEEE 80', 'BS 7430', 'IEC 62305'],
  },
  {
    id: 'lightning-protection',
    title: 'Lightning Protection Systems',
    shortDesc:
      'Advanced Early Streamer Emission (ESE) and conventional Faraday Cage lightning protection systems protecting commercial structures, towers, and factories against surges.',
    fullDesc:
      'We engineer active and passive lightning protection solutions that intercept direct lightning strikes, safely channel massive surge energy to the ground, and safeguard sensitive automation electronics via Class I & Class II surge protection devices (SPDs).',
    badge: 'SURGE & LIGHTNING',
    iconName: 'Zap',
    keyFeatures: [
      'Active Early Streamer Emission (ESE) air terminals with certified radius',
      'Conventional Franklin rod & Faraday mesh network systems',
      'Heavy-duty insulated down conductors & lightning strike event counters',
      'Main switchboard Type 1+2 surge protection coordination',
      'Zero-voltage gradient dissipation grounding grid',
    ],
    deliverables: [
      'NF C 17-102 & IEC 62305 Risk Assessment Matrix',
      'Protection radius coverage simulation',
      'Post-installation flashover safety audit',
    ],
    standards: ['NF C 17-102', 'IEC 62305', 'UL 96A'],
  },
  {
    id: 'cabling-lighting',
    title: 'Industrial Cabling & Plant Lighting',
    shortDesc:
      'Comprehensive low and medium voltage power cabling, precision cable terminations, high-bay industrial lighting, and energy-saving lighting distribution networks.',
    fullDesc:
      'From 11kV medium voltage feeds to factory floor lighting automation, our technicians execute cable pulls, glanding, termination, and lighting installation with flawless phase balancing and thermal management.',
    badge: 'POWER & ILLUMINATION',
    iconName: 'Lightbulb',
    keyFeatures: [
      'HT / LT armored power & control cable laying (underground & overhead)',
      'Heat-shrinkable and cold-shrinkable high voltage cable terminations',
      'High-bay LED industrial lighting with smart daylight harvesting sensors',
      'Flameproof & explosion-proof lighting for hazardous chemical zones',
      'Emergency egress lighting with backup battery inverter systems',
    ],
    deliverables: [
      'Lux level calculation & Dialux lighting simulation',
      'Cable insulation resistance (Megger) & Hi-Pot testing',
      'Complete cable scheduling & tagging documentation',
    ],
    standards: ['IEC 60502', 'BS 5266', 'CIE Industrial Lighting'],
  },
  {
    id: 'power-house-installation',
    title: 'Power House & Substation Installation',
    shortDesc:
      'Turnkey electrical power house erection, diesel generator synchronization, step-down transformer placement, capacitor banks, and main distribution switchboards.',
    fullDesc:
      'We manage complete power house infrastructure projects from civil foundation coordination to electrical bus-duct connection, generator auto-synchronization, and full utility-to-generator ATS transfer schemes.',
    badge: 'INFRASTRUCTURE',
    iconName: 'Cpu',
    keyFeatures: [
      'Step-down distribution transformer rigging, placement & oil filtration',
      'Multiple generator synchronizing & load sharing panel integration',
      'Compact substation (CSS) and package substation integration',
      'Main busway / sandwich busduct installation up to 5000A',
      'Substation ventilation, acoustic attenuation & fire safety interlocks',
    ],
    deliverables: [
      'Substation single-line diagrams (SLD) & layout blueprints',
      'Pre-energization safety audit with local utility liaison',
      '24/7 load commissioning monitoring',
    ],
    standards: ['IEC 61936', 'IEEE C37', 'Local Grid Codes'],
  },
  {
    id: 'lighting-poles',
    title: 'High Mast & Outdoor Lighting Poles',
    shortDesc:
      'Manufacture, foundation casting, and erection of octagonal, polygonal, and high-mast lighting poles with motorized lowering systems for industrial complexes and roads.',
    fullDesc:
      'Engineered to withstand high wind velocities, our lighting poles feature hot-dip galvanized coating and structural integrity. Ideal for highway illumination, sports arenas, industrial yards, and municipal parks.',
    badge: 'OUTDOOR INFRASTRUCTURE',
    iconName: 'Lamp',
    keyFeatures: [
      'High mast poles (15m to 40m) with motorized winch gear for lantern carriage',
      'Octagonal and conical continuous-taper poles (3m to 12m)',
      'Solar-integrated hybrid street lighting with MPPT controllers',
      'Anchor bolt cage casting and civil foundation structural engineering',
      'Automated timer & photocell dusk-to-dawn switching enclosures',
    ],
    deliverables: [
      'Structural wind load calculations (EN 40 standard)',
      'Foundation civil design drawings',
      'Complete luminaire assembly and commissioning',
    ],
    standards: ['BS EN 40', 'ASTM A123', 'ISO 1461'],
  },
  {
    id: 'testing-commissioning',
    title: 'Installation, Testing & Commissioning of Switchgear',
    shortDesc:
      'Certified testing, relay calibration, secondary injection, breaker timing, and on-site commissioning of low & medium voltage switchgear panels.',
    fullDesc:
      'Our factory-trained commissioning engineers ensure every switchboard operates with precision reliability before live energization. We perform rigorous dielectric, functional, interlock, and protection relay testing.',
    badge: 'TESTING & AUDIT',
    iconName: 'CheckCircle2',
    keyFeatures: [
      'Primary and secondary current injection testing for protection relays',
      'Circuit breaker timing & contact resistance (Ductor) measurements',
      'High potential (Hi-Pot) & insulation resistance megger testing',
      'Thermal imaging infrared thermography under full operational load',
      'Mechanical and electrical interlocking functional validation',
    ],
    deliverables: [
      'Comprehensive Commissioning Test Protocol Book',
      'Relay trip curve settings calibration certificates',
      'Infrared thermographic anomaly survey report',
    ],
    standards: ['IEC 61439-1/2', 'NETA ATS', 'IEEE 43'],
  },
  {
    id: 'retrofits-maintenance',
    title: 'Switchgear Retrofit, Maintenance & AMC',
    shortDesc:
      'Annual Maintenance Contracts (AMC), retrofitting legacy air circuit breakers with modern digital units, busbar thermal imaging, and 24/7 emergency response.',
    fullDesc:
      'Extend the lifecycle of existing switchgear without full plant shutdown. We replace obsolete breakers with cutting-edge ACB/MCCB units, upgrade capacitor banks, and provide preventative maintenance programs.',
    badge: 'LIFECYCLE SUPPORT',
    iconName: 'Wrench',
    keyFeatures: [
      'Direct retrofit cradle kits for vintage switchgear (ABB, Schneider)',
      'Scheduled preventative maintenance & contact point deoxidization',
      'PFI capacitor cell capacitance health check and replacement',
      '24/7 emergency fault diagnosis and breakdown support',
      'Arc flash mitigation upgrades and remote racking retrofit',
    ],
    deliverables: [
      'Health assessment & life extension roadmap',
      'Scheduled quarterly / bi-annual AMC service visits',
      'Priority emergency call-out dispatch',
    ],
    standards: ['NFPA 70B', 'IEC 60364-6', 'IEEE 3007.2'],
  },
];
