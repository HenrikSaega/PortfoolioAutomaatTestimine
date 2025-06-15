import AIRSOFT_HERO from "../pics/Projects/MTU_VU/AIRSOFT-HERO.PNG"
import AIRSOFT_PRE1 from "../pics/Projects/MTU_VU/AIRSOFT-PRE1.PNG"
import AIRSOFT_PRE2 from "../pics/Projects/MTU_VU/AIRSOFT-PRE2.PNG"
import AIRSOFT_PRE3 from "../pics/Projects/MTU_VU/AIRSOFT-PRE3.PNG"
import FIRST_PORTFOLIO1 from "../pics/Projects/FIRST_PORTFOLIO/first_portfolio_index.PNG"
import FIRST_PORTFOLIO2 from "../pics/Projects/FIRST_PORTFOLIO/first_portfolio_experience.PNG"
import FIRST_PORTFOLIO3 from "../pics/Projects/FIRST_PORTFOLIO/first_portfolio_aboutme.PNG"
import OHERDI_TEAM01 from "../pics/Projects/OHERDI TEAM/oherdi_team_hero.PNG"
import OHERDI_TEAM02 from "../pics/Projects/OHERDI TEAM/oherdi_team_section1.PNG"
import OHERDI_TEAM03 from "../pics/Projects/OHERDI TEAM/oherdi_team_section2.PNG"


const projects = [
    {
    id: 1,
    title: "FIRST PORTFOLIO WEBSITE",
    category: "WEB",
    releaseDate: "May, 2024",
    description: "The first website I submitted as part of my school application. I had been learning HTML for almost a month while serving in the military.",
    tags: ["HTML", "CSS"],
    image: FIRST_PORTFOLIO1,
    gallery: [FIRST_PORTFOLIO2, FIRST_PORTFOLIO3],
    live: "https://vso24saega.ita.voco.ee/old_portfolio/index.html"
  },
  {
    id: 2,
    title: "MTÜ VALGA UNDERGROUND",
    category: "WEB",
    releaseDate: "November, 2024",
    description: "The first website, created as a final project for the HTML + CSS learning module, is still a DEMO. The site will continue to be developed and will eventually be launched as the official page for Valga Underground airsoft community.",
    tags: ["HTML", "CSS"],
    image: AIRSOFT_HERO,
    gallery: [AIRSOFT_PRE1, AIRSOFT_PRE2, AIRSOFT_PRE3],
    live: "https://vso24saega.ita.voco.ee/veebiarendus/l6puprojekt/Leht/index.html",
  },
  {
    id: 2,
    title: "OHERDI TEAM",
    category: "WEB",
    releaseDate: "June, 2025",
    description: "This was a client project developed with a team of 3 using WordPress. My main focus was on the website’s visual appearance and functionality.",
    tags: ["WordPress"],
    image: OHERDI_TEAM01,
    gallery: [OHERDI_TEAM02, OHERDI_TEAM03],
    live: "https://uus.oherditeam.ee/",
  },

];

export default projects;
