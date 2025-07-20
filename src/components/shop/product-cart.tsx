import Cookies from "js-cookie";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import './modal.css';

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  delPrice?: number;
  proImg: string;
  Tag?: string;
  [key: string]: any; 
}

interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isQuickViewOpen, setQuickViewOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    let cart: Product[] = Cookies.get("carts")
      ? JSON.parse(Cookies.get("carts") as string)
      : [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    Cookies.set("carts", JSON.stringify(cart), { expires: 30 });
  };

  const handleAddToWishlist = () => {
    let wishlist: Product[] = Cookies.get("wishlist")
      ? JSON.parse(Cookies.get("wishlist") as string)
      : [];

    const alreadyInWishlist = wishlist.find((item) => item.id === product.id);

    if (!alreadyInWishlist) {
      wishlist.push(product);
      Cookies.set("wishlist", JSON.stringify(wishlist), { expires: 30 });
    }
  };

  const increment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev) => (prev < 100 ? prev + 1 : prev));
  };

  const decrement = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div>
      <div className="th-product product-grid">
        <div className="product-img">
          <img src={product.proImg} alt="Product Image" />
          <span className="product-tag">{product.Tag}</span>
          <div className="actions">
            <span
              className="icon-btn popup-content"
              onClick={() => setQuickViewOpen(true)}
            >
              <i className="far fa-eye"></i>
            </span>
            <span className="icon-btn" onClick={handleAddToCart}>
              <i className="far fa-cart-plus"></i>
            </span>
            <span className="icon-btn" onClick={handleAddToWishlist}>
              <i className="far fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="product-content">
          <h3 className="product-title">
            <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
              {product.title}
            </Link>
          </h3>
          <span className="price">
            ${product.price}
            <del>${product.delPrice}</del>
          </span>
          <div className="woocommerce-product-rating">
            <span className="count">(5.00 Review)</span>
            <div
              className="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span>
                Rated <strong className="rating">5.00</strong> out of 5 based
                on <span className="rating">1</span> customer rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {isQuickViewOpen && (
        <div
          className="quickview-backdrop white-popup mfp-hide"
          data-lenis-prevent
        >
          <div className="m-wrapar">
            <div className="quickview-modal">
              <div className="container bg-white rounded-10 p-4">
                <span
                  title="Close (Esc)"
                  className="mfp-close"
                  onClick={() => setQuickViewOpen(false)}
                >
                  ×
                </span>
                <div className="row gx-60">
                  <div className="col-lg-6">
                    <div className="product-big-img">
                      <div className="img">
                        <img src={product.proImg} alt="Product" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="product-about">
                      <p className="price">
                        ${product.price || 120.85}
                        <del>${product.delPrice}</del>
                      </p>
                      <h2 className="product-title">
                        {product.title || "Bluetooth Headphone"}
                      </h2>
                      <div className="product-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span style={{ width: "100%" }}>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                        <div className="woocommerce-review-link">
                          (<span className="count">4</span> customer reviews)
                        </div>
                      </div>
                      <p className="text">
                        Bluetooth headphones are a popular choice for many
                        people due to their convenience and wireless
                        capabilities...
                      </p>
                      <div className="mt-2 link-inherit">
                        <p>
                          <strong className="text-title me-3">
                            Availability:
                          </strong>
                          <span className="stock in-stock">
                            <i className="far fa-check-square me-2 ms-1"></i>In
                            Stock
                          </span>
                        </p>
                      </div>
                      <div className="actions">
                        <div className="quantity">
                          <input
                            type="number"
                            className="qty-input"
                            step={1}
                            min={1}
                            max={100}
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            title="Qty"
                          />
                          <button
                            className="quantity-plus qty-btn"
                            onClick={increment}
                          >
                            <i className="far fa-chevron-up"></i>
                          </button>
                          <button
                            className="quantity-minus qty-btn"
                            onClick={decrement}
                          >
                            <i className="far fa-chevron-down"></i>
                          </button>
                        </div>
                        <button className="th-btn" onClick={handleAddToCart}>
                          Add to Cart
                        </button>
                        <button
                          className="icon-btn"
                          onClick={handleAddToWishlist}
                        >
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                      <div className="product_meta">
                        <span className="sku_wrapper">
                          SKU: <span className="sku">BH-1001-BT</span>
                        </span>
                        <span className="posted_in">
                          Category:{" "}
                          <Link onClick={ClickHandler} to="/shop">
                            sports, gaming, music listening
                          </Link>
                        </span>
                        <span>
                          Tags:{" "}
                          <Link onClick={ClickHandler} to="/shop">
                            Wireless
                          </Link>
                          <Link onClick={ClickHandler} to="/shop">
                            Sports
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
