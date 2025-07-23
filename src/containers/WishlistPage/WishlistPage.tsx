import Cookies from 'js-cookie';
import { Fragment, useEffect, useState } from 'react';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface WishlistItem {
  id: string | number;
  proImg: string;
  title: string;
  price: number;
  // Add other product properties as needed
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = Cookies.get('wishlist');
    if (storedWishlist) {
      try {
        const parsedWishlist: WishlistItem[] = JSON.parse(storedWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error('Failed to parse wishlist cookie:', error);
      }
    }
  }, []);

  const removeFromWishlist = (id: string | number) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    Cookies.set('wishlist', JSON.stringify(updatedWishlist), { expires: 30 });
  };

  const addToCart = (product: WishlistItem) => {
    let cart: Array<WishlistItem & { quantity: number }> = [];
    const cartCookie = Cookies.get('carts');
    
    if (cartCookie) {
      try {
        cart = JSON.parse(cartCookie);
      } catch (error) {
        console.error('Failed to parse cart cookie:', error);
      }
    }

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    Cookies.set('carts', JSON.stringify(cart), { expires: 30 });
  };

  return (
    <Fragment>
      <GsapAnimetion/>
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'Wishlist'} pagesub={'Wishlist'} />
      <div className="space">
        <div className="container">
          <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
            <div className="tinv-header">
              <h2 className="mb-30">Wishlist</h2>
            </div>
            <table className="tinvwl-table-manage-list">
              <thead>
                <tr>
                  <th className="product-cb">
                    <input 
                      type="checkbox" 
                      className="global-cb" 
                      title="Select all for bulk action" 
                      aria-label="Select all wishlist items"
                    />
                  </th>
                  <th className="product-remove"></th>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product Name</th>
                  <th className="product-price">Unit Price</th>
                  <th className="product-date">Date Added</th>
                  <th className="product-stock">Stock Status</th>
                  <th className="product-action">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center">Your wishlist is empty.</td>
                  </tr>
                ) : (
                  wishlist.map((item) => (
                    <tr className="wishlist_item" key={item.id}>
                      <td className="product-cb">
                        <input 
                          type="checkbox" 
                          name="wishlist_pr[]" 
                          value={item.id} 
                          title="Select for bulk action" 
                          aria-label={`Select ${item.title}`}
                        />
                      </td>
                      <td className="product-remove">
                        <button 
                          type="button" 
                          onClick={() => removeFromWishlist(item.id)} 
                          title="Remove"
                          aria-label={`Remove ${item.title} from wishlist`}
                        >
                          <i className="fal fa-times"></i>
                        </button>
                      </td>
                      <td className="product-thumbnail">
                        <span><img src={item.proImg} alt={item.title} width="100" height="100" /></span>
                      </td>
                      <td className="product-name">
                        <span>{item.title}</span>
                      </td>
                      <td className="product-price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">$</span>
                            {item.price.toFixed(2)}
                          </bdi>
                        </span>
                      </td>
                      <td className="product-date">
                        <time className="entry-date">{new Date().toLocaleDateString()}</time>
                      </td>
                      <td className="product-stock">
                        <p className="stock in-stock">
                          <span><i className="fas fa-check"></i></span>
                          <span className="tinvwl-txt">In stock</span>
                        </p>
                      </td>
                      <td className="product-action">
                        <button 
                          className="button th-btn" 
                          onClick={() => addToCart(item)} 
                          title="Add to Cart"
                          aria-label={`Add ${item.title} to cart`}
                        >
                          <i className="fal fa-shopping-cart"></i>
                          <span className="tinvwl-txt">Add to Cart</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="social-buttons">
              <span>Share on</span>
              <ul>
                <li>
                  <a href="#" className="social social-facebook" aria-label="Share on Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social social-twitter" aria-label="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social social-pinterest" aria-label="Share on Pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social social-whatsapp" aria-label="Share on WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social social-clipboard" aria-label="Copy to clipboard">
                    <i className="far fa-clipboard"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social social-email" aria-label="Share via email">
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default WishlistPage;