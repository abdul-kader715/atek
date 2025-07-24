// Importing all images
import about from './img/pages/about.webp';
import about2 from './img/pages/about2.webp';
import blogDetails from './img/pages/blog-details.webp';
import blogGrid from './img/pages/blog-grid.webp';
import blog from './img/pages/blog.webp';
import career from './img/pages/career.webp';
import cart from './img/pages/cart.webp';
import checkout from './img/pages/checkout.webp';
import contact2 from './img/pages/contact-2.webp';
import contact from './img/pages/contact.webp';
import error from './img/pages/error.webp';
import faq from './img/pages/faq.webp';
import gallery from './img/pages/gallery.webp';
import price from './img/pages/price.webp';
import projectDetails from './img/pages/project-details.webp';
import projectGrid from './img/pages/project-grid.webp';
import serviceDetails from './img/pages/service-details.webp';
import service from './img/pages/service.webp';
import shopDetails from './img/pages/shop-details.webp';
import shop from './img/pages/shop.webp';
import teamGuide from './img/pages/team-guide.webp';
import teamGuiderDetails from './img/pages/team-guider-details.webp';
import wishlist from './img/pages/wishlist.webp';

// Define a type for each inner page item
export interface InnerPage {
   img: string;
   alt: string;
   link: string;
   title: string;
}

// Typed array of inner pages
const innerPages: InnerPage[] = [
   { img: about, alt: 'about', link: '/about', title: 'About Page' },
   { img: about2, alt: 'about2', link: '/about2', title: 'About 2 Page' },
   { img: shop, alt: 'shop', link: '/shop', title: 'Shop Page' },
   { img: shopDetails, alt: 'shop-details', link: '/shop-details/1', title: 'Shop Details Page' },
   { img: cart, alt: 'cart', link: '/cart', title: 'Cart Page' },
   { img: checkout, alt: 'checkout', link: '/checkout', title: 'Checkout Page' },
   { img: wishlist, alt: 'wishlist', link: '/wishlist', title: 'Wishlist Page' },
   { img: gallery, alt: 'gallery', link: '/gallery', title: 'Gallery Page' },
   { img: career, alt: 'career', link: '/career', title: 'Career Page' },
   { img: teamGuide, alt: 'team-guide', link: '/team-guide', title: 'Team Page' },
   { img: teamGuiderDetails, alt: 'team-guider-details', link: '/team-guider-details/1', title: 'Team Details Page' },
   { img: faq, alt: 'faq', link: '/faq', title: 'Faq Page' },
   { img: price, alt: 'price', link: '/price', title: 'Price Page' },
   { img: error, alt: 'error', link: '/error', title: 'Error Page' },
   { img: service, alt: 'service', link: '/service', title: 'Service Page' },
   { img: serviceDetails, alt: 'service-details', link: '/service-details/1', title: 'Service Details Page' },
   { img: projectGrid, alt: 'project-grid', link: '/project-grid', title: 'Project Grid Page' },
   { img: projectDetails, alt: 'project-details', link: '/project-details/1', title: 'Project Details Page' },
   { img: blog, alt: 'blog', link: '/blog', title: 'Blog Page' },
   { img: blogGrid, alt: 'blog-grid', link: '/blog-grid', title: 'Blog Grid Page' },
   { img: blogDetails, alt: 'blog-details', link: '/blog-details/1', title: 'Blog Details Page' },
   { img: contact, alt: 'contact', link: '/contact', title: 'Contact Page' },
   { img: contact2, alt: 'contact-2', link: '/contact-2', title: 'Contact 2 Page' },
];

export default innerPages;
