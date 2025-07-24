import Cookies from "js-cookie";
import { Fragment, useEffect, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import GsapAnimetion from '../../components/GsapAnimetion/GsapAnimetion';

interface CartItem {
  id: string | number;
  proImg: string;
  title: string;
  price: number;
  quantity?: number;
}

const CartPage: FC = () => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [shippingMethod, setShippingMethod] = useState<"flat_rate" | "free_shipping">("flat_rate");

  // Load cart from cookies
  useEffect(() => {
    const cookieData = Cookies.get("carts");
    if (cookieData) {
      try {
        const parsedCart: CartItem[] = JSON.parse(cookieData);
        setCarts(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart cookie:", error);
      }
    }
  }, []);

  const updateCartCookie = (updatedCart: CartItem[]) => {
    Cookies.set("carts", JSON.stringify(updatedCart), { expires: 30 });
    setCarts(updatedCart);
  };

  const increment = (itemId: string | number) => {
    const updatedCart = carts.map(item =>
      item.id === itemId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCartCookie(updatedCart);
  };

  const decrement = (itemId: string | number) => {
    const updatedCart = carts.map(item => {
      if (item.id === itemId && (item.quantity || 1) > 1) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    updateCartCookie(updatedCart);
  };

  const removeItem = (itemId: string | number) => {
    const updatedCart = carts.filter(item => item.id !== itemId);
    updateCartCookie(updatedCart);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const cartSubtotal = carts.reduce(
    (sum: number, item: CartItem) => sum + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <Fragment>
      <GsapAnimetion/>
      <HeaderArea className={'th-header header-layout1'} />
      <PageTitle pageTitle={'Cart Page'} pagesub={'Cart Page'} />

      <div className="th-cart-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Shipping costs updated.</div>
          </div>
          <form action="#" className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item: CartItem) => (
                  <tr className="cart_item" key={item.id}>
                    <td data-title="Product">
                      <span className="cart-productimage">
                        <img width="91" height="91" src={item.proImg} alt={item.title} />
                      </span>
                    </td>
                    <td data-title="Name">
                      <span className="cart-productname">{item.title}</span>
                    </td>
                    <td data-title="Price">
                      <span className="amount"><bdi><span>$</span>{parseFloat(item.price?.toString()).toFixed(2) }</bdi></span>
                      
                    </td>
                    <td data-title="Quantity">
                      <div className="quantity">
                        <button 
                          type="button" 
                          className="quantity-plus qty-btn" 
                          onClick={() => increment(item.id)}
                          aria-label="Increase quantity"
                        >
                          <i className="far fa-chevron-up"></i>
                        </button>
                        <input
                          type="number"
                          className="qty-input"
                          value={item.quantity || 1}
                          readOnly
                          aria-label="Quantity"
                        />
                        <button 
                          type="button" 
                          className="quantity-minus qty-btn" 
                          onClick={() => decrement(item.id)}
                          aria-label="Decrease quantity"
                        >
                          <i className="far fa-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td data-title="Total">
                      <span className="amount">
                        <bdi>
                          <span>$</span>{(item.price * (item.quantity || 1)).toFixed(2)}
                        </bdi>
                      </span>
                    </td>
                    <td data-title="Remove">
                      <span 
                        className="remove" 
                        onClick={() => removeItem(item.id)} 
                        style={{ cursor: "pointer" }}
                        aria-label="Remove item"
                      >
                        <i className="fal fa-trash-alt"></i>
                      </span>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan={8} className="actions">
                    <div className="th-cart-coupon">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Coupon Code..." 
                        aria-label="Coupon code"
                      />
                      <button type="submit" className="th-btn">Apply Coupon</button>
                    </div>
                    <button type="submit" className="th-btn">Update cart</button>
                    <Link onClick={ClickHandler} to="/shop" className="th-btn">Continue Shopping</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <div className="row justify-content-end">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <h2 className="h4 summary-title">Cart Totals</h2>
              <table className="cart_totals">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td data-title="Cart Subtotal">
                      <span className="amount"><bdi><span>$</span>{cartSubtotal.toFixed(2)}</bdi></span>
                    </td>
                  </tr>
                  <tr className="shipping">
                    <th>Shipping and Handling</th>
                    <td data-title="Shipping and Handling">
                      <ul className="woocommerce-shipping-methods list-unstyled">
                        <li>
                          <input
                            type="radio"
                            id="free_shipping"
                            name="shipping_method"
                            className="shipping_method"
                            value="free_shipping"
                            checked={shippingMethod === "free_shipping"}
                            onChange={() => setShippingMethod("free_shipping")}
                          />
                          <label htmlFor="free_shipping">Free shipping</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="flat_rate"
                            name="shipping_method"
                            className="shipping_method"
                            value="flat_rate"
                            checked={shippingMethod === "flat_rate"}
                            onChange={() => setShippingMethod("flat_rate")}
                          />
                          <label htmlFor="flat_rate">Flat rate</label>
                        </li>
                      </ul>
                      <p className="woocommerce-shipping-destination">
                        Shipping options will be updated during checkout.
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="order-total">
                    <td>Order Total</td>
                    <td data-title="Total">
                      <strong><span className="amount"><bdi><span>$</span>{cartSubtotal.toFixed(2)}</bdi></span></strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="wc-proceed-to-checkout mb-30">
                <Link onClick={ClickHandler} to="/checkout" className="th-btn">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterArea className={'footer-wrapper footer-layout1 black-bg space-top'} />
      <Scrollbar />
    </Fragment>
  );
};

export default CartPage;