import bootstrapIcon from './img/icons/bootstrap.svg';
import cf7Icon from './img/icons/cf7.svg';
import codeIcon from './img/icons/code.svg';
import docsIcon from './img/icons/docs.svg';
import googleFontIcon from './img/icons/google_font.svg';
import gsapIcon from './img/icons/gsap.svg';
import responsiveIcon from './img/icons/responsive.svg';
import sassIcon from './img/icons/sass.svg';
import seoIcon from './img/icons/seo.svg';
import reactIcon from './img/icons/react.svg';
import supportIcon from './img/icons/support.svg';
import swiperIcon from './img/icons/swiper.svg';
import w3cIcon from './img/icons/w3c.svg';
import wooIcon from './img/icons/woocommerce.svg';

const PluginItem = ({ icon, title, description }) => (
   <div className="plugin-item text-center text-sm-start d-sm-flex">
      <div className="plugin-icon">
         <img src={icon} alt="icon" />
      </div>
      <div className="plugin-content">
         <h4 className="plugin-item-title">{title}</h4>
         <p className="plugin-item-text">{description}</p>
      </div>
   </div>
);

const FeaturesAndPlugins = () => {
   return (
      <div className="plugins-area space" id="features">
         <div className="container">
            <div className="row gy-30">
               <div className="col-xl-6">
                  <div className="plugin-box">
                     <div className="title-area plugin-titlebox">
                        <h2 className="sec-title">Awesome Features</h2>
                        <p className="sec-text">
                           This template is built with all modern and latest features. Developers can easily handle this.
                        </p>
                     </div>

                     <PluginItem icon={sassIcon} title="Made With Sass" description="Sass is a preprocessor scripting language for compiling into CSS." />
                     <PluginItem icon={googleFontIcon} title="Google Fonts" description="Google Fonts is a computer font and web font service owned by Google." />
                     <PluginItem icon={w3cIcon} title="W3C Validated Code" description="W3C Validation Service is a validator by the World Wide Web Consortium." />
                     <PluginItem icon={codeIcon} title="Easy to Customize" description="Our code is always very much customize friendly and standard." />
                     <PluginItem icon={docsIcon} title="Well Documented" description="Most of the customers love our detailed documentation you will also." />
                     <PluginItem icon={supportIcon} title="Dedicated Support" description="Our support team is always ready to help you for any kind of support." />
                     <PluginItem icon={responsiveIcon} title="Fully Responsive" description="This template is fully responsive for all kind of devices both big & small." />
                  </div>
               </div>


               <div className="col-xl-6">
                  <div className="plugin-box">
                     <div className="title-area plugin-titlebox">
                        <h2 className="sec-title">Included Plugins</h2>
                        <p className="sec-text">We have included some popular plugins for free!</p>
                     </div>

                     <PluginItem icon={swiperIcon} title="Swiper Slider" description="Swiper is a responsive carousel jQuery plugin that supports multiple breakpoints." />
                     <PluginItem icon={bootstrapIcon} title="Bootstrap 5" description="Bootstrap 5 is the latest version of the popular front-end development framework." />
                     <PluginItem
                        icon={reactIcon}
                        title="Built with React"
                        description="React is a modern JavaScript library for building fast and interactive UIs."
                     />
                     <PluginItem icon={seoIcon} title="SEO Optimized" description="Our code is SEO Optimized, It will help to index the page on search engine." />
                     <PluginItem icon={wooIcon} title="WooCommerce Ready" description="Woocommerce features are digital tools that enable businesses to conduct online transactions and manage online stores." />
                     <PluginItem icon={gsapIcon} title="GSAP Animation" description="Professional-grade JavaScript animation for the modern web, Crazy fast," />
                     <PluginItem icon={cf7Icon} title="Contact Form 7" description="A working form with Ajax is a form that uses the Ajax (Asynchronous JavaScript and XML) technology." />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeaturesAndPlugins;
