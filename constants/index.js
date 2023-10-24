import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { FaPhoneAlt } from 'react-icons/fa'

export const navbar = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Services',
    path: 'services',
  },
  // {
  //   name: 'Gallery',
  //   path: 'gallery',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',l
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
]

export const heroBtns = [
  {
    name: 'Learn More',
    path: 'about',
  },
  {
    name: 'Contact Us',
    path: 'contact',
  },
]

export const services = [
  {
    icon: {
      img: '/icons/code.svg',
      alt: 'Mower Icon',
    },
    img: '',
    alt: '',
    subtitle: 'Expertise with NYCDOB, FDNY, NYC SBS, NYC SCA, PANYNJ, NYCDEP, MTA, NJ, and other special districts. ',
    title: 'Code Consulting and Expediting',
    text: "Famtech knows the specific challenges with obtaining a TCO in NYC and it is our job to get you there while still maintaining high levels of life safety. With our staff we have years of hands on code consulting experience coming from our design, construction, and consulting work. Through years of working alongside with DOB and FDNY, our professional staff's working knowledge of the code change process gives us the background and experience to recommend effective solutions. These solutions prevent issues that might cause design changes, add costs, or delay building occupancy for your project.",
    tags: [
      'ICC Certified Plan Examiner',
      'Permit assistance',
      
    ]
  },
  {
    icon: {
      img: '/icons/building-tool.svg',
      alt: 'Trees Icon',
    },
    img: '',
    alt: 'designs',
    subtitle: '',
    title: 'Professional Design Consultation',
    text: "We have offered extensive support to Architects, Engineers, and Contractors by conducting thorough reviews of detailed designs and facilitating their development. Our invaluable construction experience, coupled with our in-depth understanding of code implementation, uniquely positions us to provide optimal guidance to on-site teams, resulting in practical and effective designs.\n Our expertise extends to comprehensive design consultations encompassing areas such as tie-backs, structural systems, fire-stopping, fire-proofing, egress, sprinklers, standpipes, shoring, and concrete pouring procedures. A significant portion of our design contributions have been instrumental in addressing objections raised by the Department of Buildings (DOB). It's worth noting that all our designs are meticulously prepared by Licensed Engineers and Architects.",


    tags: [
    
    ]
  },
  {
    icon: {
      img: '/icons/building-toolz.svg',
      alt: 'Turf Laying Icon',
    },
    img: '',
    alt: 'construction',
    subtitle: 'Decades of Experience',
    title: 'Construction Management/Inspection',
    text: 'Famtech provides Construction Inspections for construction work as part of a Resident Engineering and/or QA/QC Program.   We understand that many NYC private and public clients have long recognized the need for independent, experienced inspection and quality control services on complex projects. Our process is to verify that the product furnished by the contractor is in full compliance with the plans, specifications, and other contract documents. Our sound inspection procedures lead to a measure of quality control with the purpose of reducing costly construction delays and subsequent servicing and maintenance costs. \n Famtech brings technical our hands-on technical expertise as well as lessons learned from our diverse project backgrounds.  Our Construction Management team includes Certified Construction Managers (CCM) as certified by the Construction Management Association of America as well as DOB Licensed Site Safety Managers (SSMs).      ',
    tags: [
      'Provide status reports      ',
      'Schedule Management      ',
      'Site Superintendent      ',
      'Material Management      ',
      'Dispute Management      ',
  
    ]
  },
  
  {
    icon: {
      img: '/icons/care-icon.svg',
      alt: 'Garden Maintenance Icon',
    },
    img: '',
    alt: 'forensic analysis',
    subtitle: '',
    title: 'Forensic Investigation/Failure Analysis',
    text: 'Due to our unique experience with design, construction, as well as material testing, we have been tasked many times with providing forensic investigations for clients.  We have studied failure for boilers, concrete structures, steel structures, and mechanical systems. We offer:    ',
    tags: [
      'Site Inspections and analysis      ',
      'Steel coupons  ',
      'System Testing  ',
      'Failure Analysis  ',
      'Chemical Analysis      ',
      'Probing and analysis      ',
      'Material sampling and testing      ',

    ]
  }
];

export const guarantee = [
  {
    
    title: 'Safety',
    text: 'Safety of workers, pedesterians, and property is a top priority on any Famtech project. Strict Standards are put in place with a zero-tolerance policy. Famtech strives to create a culture that encourages personal responsibilty for the health and safety of every member of the project and local community.',
  },
  {
    title: 'Experience',
    text: 'The vast experience Mr. Mannan and his team has accumulated over the years allow for Famtech to perform according to its creed of "EXPERTISE, EXPERIENCE, AND DIAGNOSTIC SENSIBILTY" Famtech approaches each project with the same goals: to protect and enchance the long term value of the property as efficently and effectively as possible',
   
  },
  {
    title: 'Personalized Service',
    text: 'We understand that every client is unique. We take the time to understand your preferences and collaborate closely with you throughout the entire process.',
  }
];

export const latestProjects = [
  {
    id: 'project-1',
    imgUrl: '/imgs/projects/unknown-03.jpg',
    title: 'Kean University',
  },
  {
    id: 'project-2',
    imgUrl: '/imgs/projects/hudsonyard.jpg',
    title: 'Hudson Yards',
  },
  {
    id: 'project-3',
    imgUrl: '/imgs/projects/elanora-02.jpg',
    title: 'The City College of New York',
  },
  {
    id: 'project-4',
    imgUrl: '/imgs/projects/oneworld.jpg',
    title: 'One World Trade Center',
  },
  {
    id: 'project-5',
    imgUrl: '/imgs/projects/statenisland.jpg',
    title: 'Staten Island Public School System',
  },
];

export const blog = [
  {
    id: 'blog-1',
    date: 'May 20, 2023',
    imgUrl: '/imgs/vertical-garden.jpg',
    title: 'Making The Most of Small Spaces',
    subtitle: 'Landscaping Ideas for Compact Yards',
    sections: [
      {
        heading: '',
        content: 'Welcome to our comprehensive guide on landscaping ideas for compact yards. If you have a small outdoor space, don\'t fret! With the right design strategies and creative thinking, you can transform your limited yard into a beautiful and functional oasis.In this article, we\'ll share expert tips and inspiring ideas to maximize the potential of small spaces. Whether you\'re dealing with a tiny backyard or a narrow strip of land, these landscaping solutions will help you make the most of what you have.',
      },
      {
        heading: '1. Plan with Purpose',
        content: 'Before diving into any landscaping project, it\'s crucial to plan with purpose.Assess your available space and consider how you want to use it. Do you envision a cozy seating area, a vibrant garden, or a combination of both? Understanding your goals will guide your design decisions and ensure efficient space utilization. Sketch a rough layout and take measurements to visualize how different elements can fit together harmoniously. Remember to consider the scale and proportions of features to maintain a balanced and inviting atmosphere.',
      },
      {
        heading: '2. Create Layers and Levels',
        content: 'One effective way to maximize a small yard is by creating layers and levels. Varying the heights of your landscape elements adds visual interest and gives the illusion of more space. For instance, construct raised beds or planters along the perimeter, filling them with colorful flowers and foliage. Introduce vertical elements such as trellises, pergolas, or hanging baskets to draw the eye upward. These vertical features not only provide additional planting space but also add depth to the overall design. Utilize different flooring materials, like stepping stones or decking, to demarcate distinct zones and create a sense of separation within the yard.',
      },
      {
        heading: '3. Opt for Space-Saving Plant Selections',
        content: `When choosing plants for a small yard, opt for space-saving varieties that won't overwhelm the space. Select compact shrubs, dwarf trees, and petite perennials that maintain their shape and size without sprawling out of control. Consider using ornamental grasses or tall, slender plants to provide vertical interest while occupying minimal ground space. Utilize hanging planters or vertical gardens for trailing or climbing plants to maximize vertical greenery. Additionally, incorporating container gardens allows for mobility and flexibility, letting you easily rearrange or replace plants as desired.`,
      },
      {
        heading: '4. Embrace Vertical Gardening',
        content: `Vertical gardening is a game-changer for small yards. Utilize vertical surfaces like walls, fences, or even balcony railings to create stunning green walls or herb gardens. Install modular vertical garden systems or build custom trellises to support climbing plants. This not only saves valuable ground space but also adds a lush, vibrant backdrop to your outdoor area. Consider using pocket planters or vertical hanging pouches to grow herbs, succulents, or trailing flowers, adding a touch of greenery without sacrificing space. Vertical gardening not only maximizes your planting capacity but also adds a visually appealing focal point to the landscape.`,
      },
      {
        heading: '5. Think Multi-Functional',
        content: `To make the most of a compact yard, think multi-functional when choosing landscape elements. Incorporate furniture that doubles as storage, such as benches with built-in compartments or ottomans with hidden storage space. Use raised beds or seating walls with integrated planters to combine seating and greenery. Designate areas that can serve multiple purposes, such as a patio space that can transform into an outdoor dining area or a play area for children. By maximizing the functionality of each element, you can optimize the use of your limited space.`,
      },
      {
        heading: '',
        content: `With these landscaping ideas for compact yards, you can create a stunning outdoor space regardless of its size. By planning with purpose, utilizing layers and levels, selecting space-saving plants, embracing vertical gardening, and incorporating multi-functional elements, you'll transform your small yard into a beautiful and functional haven. Remember, small spaces can still make a big impact with thoughtful design and creativity. Get inspired, unleash your imagination, and enjoy the process of transforming your limited yard into a personal oasis.`,
      }
    ],
  },
  {
    id: 'blog-2',
    date: 'May 15, 2023',
    imgUrl: '/imgs/sprinkler.jpg',
    title: "Mastering the Basics: Lawn Care 101",
    subtitle: "A Comprehensive Guide to Achieving a Healthy and Vibrant Lawn",
    sections: [
      {
        heading: "",
        content: "Maintaining a lush and vibrant lawn requires proper care and attention. From mowing to watering and fertilizing, understanding the basics of lawn care is essential for achieving a beautiful outdoor space. In this comprehensive guide, we will take you through the fundamental practices of lawn care, providing expert tips and insights to help you achieve a healthy and vibrant lawn that will be the envy of the neighborhood."
      },
      {
        heading: "1. Mowing",
        content: "Mowing your lawn correctly is crucial for its overall health and appearance. Set your mower blades to the appropriate height, typically between 2.5 to 3 inches. Regularly mow the grass, ensuring you never remove more than one-third of the blade's height in a single mowing session. This practice prevents stress on the grass and promotes strong root development."
      },
      {
        heading: "2. Watering",
        content: "Proper watering is essential for the health of your lawn. Water deeply and infrequently, aiming for approximately 1 inch of water per week, including rainfall. Watering deeply encourages the grass roots to grow deeper into the soil, making the lawn more resilient to drought. Watering in the early morning helps minimize water evaporation and allows the grass to dry before evening, reducing the risk of fungal diseases."
      },
      {
        heading: "3. Fertilizing",
        content: "Regular fertilization provides the necessary nutrients for your lawn to thrive. Begin by conducting a soil test to determine the specific nutrient needs of your lawn. Choose a high-quality, slow-release fertilizer that matches those requirements. Apply the fertilizer according to the recommended schedule, typically in early spring and fall. Avoid over-fertilizing, as it can lead to excessive growth and weaken the grass."
      },
      {
        heading: "4. Weed Control",
        content: "Weeds can quickly invade a lawn, competing with grass for resources and spoiling its appearance. Implement an effective weed control strategy, which includes regular mowing, proper watering, and applying pre-emergent herbicides in early spring to prevent weed seeds from germinating. For existing weeds, use selective herbicides that target specific weed types while sparing the grass."
      },
      {
        heading: "5. Aeration",
        content: "Compacted soil can hinder the healthy growth of grass roots. Regularly aerate your lawn, especially in high-traffic areas, to alleviate soil compaction. Core aerators remove small plugs of soil, allowing air, water, and nutrients to penetrate the root zone. This process promotes better nutrient absorption and root development."
      },
      {
        heading: "6. Overseeding",
        content: "Over time, lawns may develop thin or bare patches. Overseeding is the process of spreading grass seed over existing turf to fill in these areas and promote a denser lawn. Before overseeding, prepare the soil by raking and removing debris. Choose a grass seed blend that matches your existing lawn and follow the recommended seeding rates. Water the overseeded areas regularly to keep the soil moist for optimal seed germination."
      },
      {
        heading: "7. Pest and Disease Management",
        content: "Monitor your lawn for signs of pests and diseases, such as brown patches, chewed grass blades, or unusual discoloration. Proper cultural practices, such as regular mowing, watering, and fertilizing, contribute to the overall health of the lawn and make it more resistant to pests and diseases. If necessary, consult with a professional for targeted pest or disease control measures."
      },
      {
        heading: "",
        content: "By mastering the basics of lawn care, you can transform your outdoor space into a healthy and vibrant oasis. Regular mowing, proper watering and fertilizing, effective weed control, aeration, overseeding, and vigilant pest and disease management are the keys to achieving a beautiful lawn. Remember, consistency and patience are essential. With dedication and adherence to these practices, you can enjoy a lush and inviting lawn that becomes the pride of your home."
      },
    ],
  }
]

export const socials = [
  {
    name: 'instagram',
    icon: BsInstagram,
  },
  {
    name: 'facebook',
    icon: FaFacebookF,
  },
  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    href: '#',
  },
  {
    name: 'email',
    icon: MdEmail,
    href: 'mailto:famtechengineering@gmail.com'
  }
];

export const contact = [
  {
    name: 'location',
    icon: TiLocation,
    content: '353 West 48th Street, Suite 337, New York, NY 10036',
    url: 'https://goo.gl/maps/zgDoMDxEypQRA1KF9'
  },
  {
    name: 'email',
    icon: MdEmail,
    content: 'famtechengineering@gmail.com',
    url: 'mailto:famtechengineering@gmail.com'
  },
  {
    name: 'phone',
    icon: FaPhoneAlt,
    content: '845-248-0930',
    url: 'tel:8452480930'
  }
];
