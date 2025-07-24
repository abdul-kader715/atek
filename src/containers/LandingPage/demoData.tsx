// pagesList.ts

import img1 from './img/pages/index.webp';
import img2 from './img/pages/home-2.webp';
import img3 from './img/pages/home-3.webp';
import img4 from './img/pages/home-4.webp';
import img5 from './img/pages/home-5.webp';
import img6 from './img/pages/home-6.webp';
import img7 from './img/pages/home-7.webp';
import img8 from './img/pages/home-8.webp';
import img9 from './img/pages/home-9.webp';
import img10 from './img/pages/home-10.webp';
import img11 from './img/pages/home-11.webp';
import img12 from './img/pages/home-12.webp';
import img13 from './img/pages/home-13.webp';
import comingSoon from './img/pages/comming.webp';

// ✅ Define the type for each item
interface PagePreview {
  image: string;
  title: string;
  alt: string;
  link: string;
}

const pagesList: PagePreview[] = [
  { image: img1, title: '01_Home(IT Consulting Services)', alt: '01_Home(IT Consulting Services)', link: '/home' },
  { image: img2, title: '02_Home(Cloud Computing Solutions)', alt: '02_Home(Cloud Computing Solutions)', link: '/home-cloud' },
  { image: img3, title: '03_Home(AI & Machine Learning)', alt: '03_Home(AI & Machine Learning)', link: '/home-ai-machine' },
  { image: img4, title: '04_Home(Startup Tech Agency)', alt: '04_Home(Startup Tech Agency)', link: '/home-startup' },
  { image: img5, title: '05_Home(Cybersecurity & Data Protection)', alt: '05_Home(Cybersecurity & Data Protection)', link: '/home-cybersecurity' },
  { image: img6, title: '06_Home(SaaS Business Product)', alt: '06_Home(SaaS Business Product)', link: '/home-sass' },
  { image: img7, title: '07_Home(Tech Support Services)', alt: '07_Home(Tech Support Services)', link: '/home-tech-support' },
  { image: img8, title: '08_Home(Software Development Company)', alt: '08_Home(Software Development Company)', link: '/home-software-development' },
  { image: img9, title: '09_Home(Web & App Development)', alt: '09_Home(Web & App Development)', link: '/home-app-development' },
  { image: img10, title: '10_Home(IT Solutions)', alt: '10_Home(IT Solutions)', link: '/home-it-solutions' },
  { image: img11, title: '11_Home(Digital Transformation)', alt: '11_Home(Digital Transformation)', link: '/home-digital-transformation' },
  { image: img12, title: '12_Home(Data Analytics & Big Data)', alt: '12_Home(Data Analytics & Big Data)', link: '/home-data-analytics' },
  { image: img13, title: '13_Home(Blockchain & Fintech)', alt: '13_Home(Blockchain & Fintech)', link: '/home-blockchain-fintech' },
  { image: comingSoon, title: 'More Coming Soon', alt: 'More Coming Soon', link: '' },
];

export default pagesList;
export type { PagePreview };
