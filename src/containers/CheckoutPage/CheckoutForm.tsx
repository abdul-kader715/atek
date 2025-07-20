import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface CartItem {
    id: string;
    slug: string;
    proImg: string;
    title: string;
    price?: number;
    quantity?: number;
}

const CheckoutForm = () => {
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const [showCoupon, setShowCoupon] = useState<boolean>(true);
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState<boolean>(true);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("bacs");
    const [cart, setCart] = useState<CartItem[]>([]);
    const [subtotal, setSubtotal] = useState<number>(0);

    useEffect(() => {
        const cartData = Cookies.get('carts');
        if (cartData) {
            try {
                const parsedCart: CartItem[] = JSON.parse(cartData);
                setCart(parsedCart);
                calculateSubtotal(parsedCart);
            } catch (error) {
                console.error('Error parsing cart data:', error);
            }
        }
    }, []);

    const calculateSubtotal = (items: CartItem[]) => {
        const total = items.reduce((sum: number, item: CartItem) => {
            return sum + (item.price || 35) * (item.quantity || 1);
        }, 0);
        setSubtotal(total);
    };

    const handleLoginToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    };

    const handleCouponToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowCoupon(!showCoupon);
    };

    const handleShipToDifferentAddress = () => {
        setShipToDifferentAddress(!shipToDifferentAddress);
    };

    const handlePaymentMethodChange = (method: string) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <div className="container">
            <div className="woocommerce-form-login-toggle">
                <div className="woocommerce-info">
                    Returning customer?{' '}
                    <a href="#" className="showlogin" onClick={handleLoginToggle}>
                        Click here to login
                    </a>
                </div>
            </div>

            {showLogin && (
                <div className="row">
                    <div className="col-12">
                        <form className="woocommerce-form-login">
                            <div className="form-group">
                                <label>Username or email *</label>
                                <input type="text" className="form-control" placeholder="Username or email" />
                            </div>
                            <div className="form-group">
                                <label>Password *</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-checkbox">
                                    <input type="checkbox" id="remembermylogin" />
                                    <label htmlFor="remembermylogin">Remember Me</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="th-btn">Login</button>
                                <p className="mt-3 mb-0">
                                    <a className="text-reset" href="#">Lost your password?</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="woocommerce-form-coupon-toggle">
                <div className="woocommerce-info">
                    Have a coupon?{' '}
                    <a href="#" className="showcoupon" onClick={handleCouponToggle}>
                        Click here to enter your code
                    </a>
                </div>
            </div>

            {showCoupon && (
                <div className="row">
                    <div className="col-12">
                        <form className="woocommerce-form-coupon">
                            <div className="form-group">
                                <label>Coupon code</label>
                                <input type="text" className="form-control" placeholder="Write your coupon code" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="th-btn">Apply coupon</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="woocommerce-checkout mt-40">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="h4">Billing Details</h2>
                        <div className="row">
                            <div className="col-12 form-group">
                                <select className="form-select">
                                    <option>United Kingdom (UK)</option>
                                    <option>United State (US)</option>
                                    <option>Equatorial Guinea (GQ)</option>
                                    <option>Australia (AU)</option>
                                    <option>Germany (DE)</option>
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="col-12 form-group">
                                <input type="text" className="form-control" placeholder="Your Company Name" />
                            </div>
                            <div className="col-12 form-group">
                                <input type="text" className="form-control" placeholder="Street Address" />
                                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                            </div>
                            <div className="col-12 form-group">
                                <input type="text" className="form-control" placeholder="Town / City" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" placeholder="Country" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" placeholder="Postcode / Zip" />
                            </div>
                            <div className="col-12 form-group">
                                <input type="text" className="form-control" placeholder="Email Address" />
                                <input type="text" className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="col-12 form-group">
                                <input type="checkbox" id="accountNewCreate" />
                                <label htmlFor="accountNewCreate">Create An Account?</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <p id="ship-to-different-address">
                            <input
                                id="ship-to-different-address-checkbox"
                                type="checkbox"
                                name="ship_to_different_address"
                                checked={shipToDifferentAddress}
                                onChange={handleShipToDifferentAddress}
                            />
                            <label htmlFor="ship-to-different-address-checkbox">
                                Ship to a different address?
                                <span className="checkmark"></span>
                            </label>
                        </p>
                        {shipToDifferentAddress && (
                            <div className="shipping_address">
                                <div className="row">
                                    <div className="col-12 form-group">
                                        <select className="form-select">
                                            <option>United Kingdom (UK)</option>
                                            <option>United State (US)</option>
                                            <option>Equatorial Guinea (GQ)</option>
                                            <option>Australia (AU)</option>
                                            <option>Germany (DE)</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" className="form-control" placeholder="Your Company Name" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" className="form-control" placeholder="Street Address" />
                                        <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" className="form-control" placeholder="Town / City" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" placeholder="Country" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" placeholder="Postcode / Zip" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                        <input type="text" className="form-control" placeholder="Phone number" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="col-12 form-group">
                            <textarea cols={20} rows={5} className="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="mt-4 pt-lg-2">Your Order</h4>
                    <form action="#" className="woocommerce-cart-form">
                        <table className="cart_table mb-20">
                            <thead>
                                <tr>
                                    <th className="cart-col-image">Image</th>
                                    <th className="cart-col-productname">Product Name</th>
                                    <th className="cart-col-price">Price</th>
                                    <th className="cart-col-quantity">Quantity</th>
                                    <th className="cart-col-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length === 0 ? (
                                    <tr><td colSpan={5}>Your cart is empty.</td></tr>
                                ) : (
                                    cart.map((item) => (
                                        <tr className="cart_item" key={item.id}>
                                            <td data-title="Product">
                                                <a className="cart-productimage" href={`/shop-details/${item.slug}`}>
                                                    <img width={91} height={91} src={item.proImg} alt={item.title} />
                                                </a>
                                            </td>
                                            <td data-title="Name">
                                                <a className="cart-productname" href={`/shop-details/${item.slug}`}>
                                                    {item.title}
                                                </a>
                                            </td>
                                            <td data-title="Price">
                                                <span className="amount"><bdi>${item.price || 35}</bdi></span>
                                            </td>
                                            <td data-title="Quantity">
                                                <strong className="product-quantity">{item.quantity || 1}</strong>
                                            </td>
                                            <td data-title="Total">
                                                <span className="amount"><bdi>${(item.price || 35) * (item.quantity || 1)}</bdi></span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            <tfoot className="checkout-ordertable">
                                <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td colSpan={4}>
                                        <span className="woocommerce-Price-amount amount">
                                            <bdi>${subtotal.toFixed(2)}</bdi>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="woocommerce-shipping-totals shipping">
                                    <th>Shipping</th>
                                    <td colSpan={4}>
                                        Enter your address to view shipping options.
                                    </td>
                                </tr>
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td colSpan={4}>
                                        <strong>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>${subtotal.toFixed(2)}</bdi>
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>

                <div className="woocommerce-checkout-payment">
                    <ul className="wc_payment_methods payment_methods methods">
                        {['bacs', 'cheque', 'cod', 'paypal'].map((method) => (
                            <li key={method} className={`wc_payment_method payment_method_${method}`}>
                                <input
                                    id={`payment_method_${method}`}
                                    type="radio"
                                    className="input-radio"
                                    name="payment_method"
                                    value={method}
                                    checked={selectedPaymentMethod === method}
                                    onChange={() => handlePaymentMethodChange(method)}
                                />
                                <label htmlFor={`payment_method_${method}`}>
                                    {method === 'bacs' && 'Direct bank transfer'}
                                    {method === 'cheque' && 'Cheque Payment'}
                                    {method === 'cod' && 'Credit Card'}
                                    {method === 'paypal' && 'Paypal'}
                                </label>
                                {selectedPaymentMethod === method && (
                                    <div className={`payment_box payment_method_${method}`}>
                                        <p>
                                            {method === 'bacs' &&
                                                'Make your payment directly into our bank account. Please use your Order ID as the payment reference.'}
                                            {method === 'cheque' &&
                                                'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'}
                                            {method === 'cod' && 'Pay with cash upon delivery.'}
                                            {method === 'paypal' &&
                                                'Pay via PayPal; you can pay with your credit card if you don\'t have a PayPal account.'}
                                        </p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="form-row place-order">
                        <button type="submit" className="th-btn">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;