import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Preloader from '../components/Preloader/Preloader';
import AboutPage from './AboutPage/AboutPage';
import AboutPageS2 from './AboutPageS2/AboutPageS2';
import BlogDetailsPage from './BlogDetailsPage/BlogDetailsPage';
import BlogGridPage from './BlogGridPage/BlogGridPage';
import BlogPage from './BlogPage/BlogPage';
import CareerPage from './CareerPage/CareerPage';
import CareerdetailsPage from './CareerdetailsPage/CareerdetailsPage';
import CartPage from './CartPage/CartPage';
import CasePage from './CasePage/CasePage';
import CasedetailsPage from './CasedetailsPage/CasedetailsPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import ContactPage from './ContactPage/ContactPage';
import ContactPageS2 from './ContactPageS2/ContactPageS2';
import ErrorPage from './ErrorPage/ErrorPage';
import FaqPage from './FaqPage/FaqPage';
import GalleryPage from './GalleryPage/GalleryPage';
import HomePage from './HomePage/HomePage';
import HomePageS10 from './HomePageS10/HomePageS10';
import HomePageS11 from './HomePageS11/HomePageS11';
import HomePageS12 from './HomePageS12/HomePageS12';
import HomePageS13 from './HomePageS13/HomePageS13';
import HomePageS2 from './HomePageS2/HomePageS2';
import HomePageS3 from './HomePageS3/HomePageS3';
import HomePageS4 from './HomePageS4/HomePageS4';
import HomePageS5 from './HomePageS5/HomePageS5';
import HomePageS6 from './HomePageS6/HomePageS6';
import HomePageS7 from './HomePageS7/HomePageS7';
import HomePageS8 from './HomePageS8/HomePageS8';
import HomePageS9 from './HomePageS9/HomePageS9';
import LandingPage from './LandingPage/LandingPage';
import PricingPage from './PricingPage/PricingPage';
import ProjectDetailsPage from './ProjectDetailsPage/ProjectDetailsPage';
import ProjectPage from './ProjectPage/ProjectPage';
import ServiceDetailsPage from './ServiceDetailsPage/ServiceDetailsPage';
import ServicePage from './ServicePage/ServicePage';
import ShopDetailsPage from './ShopDetailsPage/index';
import ShopPage from './ShopPage/ShopPage';
import TeamPage from './TeamPage/TeamPage';
import TeamdetailsPage from './TeamDetailsPage/TeamDetailsPage';
import WishlistPage from './WishlistPage/WishlistPage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFadeAnimation, setShowFadeAnimation] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    // Preloader timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowFadeAnimation(true);
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="home-cloud" element={<HomePageS2 />} />
          <Route path="home-ai-machine" element={<HomePageS3 />} />
          <Route path="home-startup" element={<HomePageS4 />} />
          <Route path="home-cybersecurity" element={<HomePageS5 />} />
          <Route path="home-sass" element={<HomePageS6 />} />
          <Route path="home-tech-support" element={<HomePageS7 />} />
          <Route path="home-software-development" element={<HomePageS8 />} />
          <Route path="home-app-development" element={<HomePageS9 />} />
          <Route path="home-it-solutions" element={<HomePageS10 />} />
          <Route path="home-digital-transformation" element={<HomePageS11 />} />
          <Route path="home-data-analytics" element={<HomePageS12 />} />
          <Route path="home-blockchain-fintech" element={<HomePageS13 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about2" element={<AboutPageS2 />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="case-study" element={<CasePage />} />
          <Route path="case-study-details/:slug" element={<CasedetailsPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="career-details/:slug" element={<CareerdetailsPage />} />
          <Route path="team-guide" element={<TeamPage />} />
          <Route path="team-guider-details/:slug" element={<TeamdetailsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-details/:slug" element={<ServiceDetailsPage />} />
          <Route path="blog-grid" element={<BlogGridPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-details/:slug" element={<BlogDetailsPage />} />
          <Route path="project-grid" element={<ProjectPage />} />
          <Route path="project-details/:slug" element={<ProjectDetailsPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop-details/:slug" element={<ShopDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="price" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact-2" element={<ContactPageS2 />} />
          <Route path="error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;