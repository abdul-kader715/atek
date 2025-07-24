import { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

interface ProductItem {
  Tag?: string,
  brand?: string,
  category?: string,
  delPrice?: string | number,
  id?: string | number,
  price?: string | number,
  proImg?: string,
  singImg?: string, 
  size?: string
  slug?: string,
  stock?: string,
  title?: string,
  
}

interface ProductProps {
  item: ProductItem;
}

const Product: React.FC<ProductProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(prev => (prev < 100 ? prev + 1 : prev));
  };

  const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    const existingCart = Cookies.get("carts");
    let updatedCart: Array<{ id: string | number; quantity: number } & ProductItem> = [];

    if (existingCart) {
      try {
        updatedCart = JSON.parse(existingCart);
      } catch (error) {
        console.error("Error parsing cart cookies", error);
      }
    }

    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
       updatedCart.push({ ...item, quantity } as { id: string | number; quantity: number } & ProductItem);
      console.error("Item is missing an 'id' and cannot be added to cart.", item);
    }

    Cookies.set("carts", JSON.stringify(updatedCart), { expires: 30 });
  };

  const handleAddToWishlist = () => {
    const existingWishlist = Cookies.get("wishlist");
    let updatedWishlist: ProductItem[] = [];

    if (existingWishlist) {
      try {
        updatedWishlist = JSON.parse(existingWishlist);
      } catch (error) {
        console.error("Error parsing wishlist cookies", error);
      }
    }

    const isAlreadyInWishlist = updatedWishlist.some(wishItem => wishItem.id === item.id);

    if (!isAlreadyInWishlist) {
      updatedWishlist.push(item);
      Cookies.set("wishlist", JSON.stringify(updatedWishlist), { expires: 30 });
    }
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="row gx-60">
      <div className="col-lg-6">
        <div className="product-big-img">
          <div className="img">
            <img src={item.proImg} alt="Product" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="product-about">
          <p className="price">${item.price || 120.85}<del>${item.delPrice}</del></p>
          <h2 className="product-title">{item.title || 'Bluetooth Headphone'}</h2>
          <div className="product-rating">
            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
              <span style={{ width: '100%' }}>
                Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
              </span>
            </div>
            <div className="woocommerce-review-link">
              (<span className="count">4</span> customer reviews)
            </div>
          </div>
          <p className="text">
            Bluetooth headphones are a popular choice for many people due to their convenience and wireless capabilities...
          </p>
          <div className="mt-2 link-inherit">
            <p>
              <strong className="text-title me-3">Availability:</strong>
              <span className="stock in-stock">
                <i className="far fa-check-square me-2 ms-1"></i>In Stock
              </span>
            </p>
          </div>
          <div className="actions">
            <div className="quantity">
              <input
                type="number"
                className="qty-input"
                step="1"
                min="1"
                max="100"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                title="Qty"
              />
              <button className="quantity-plus qty-btn" onClick={increment}>
                <i className="far fa-chevron-up"></i>
              </button>
              <button className="quantity-minus qty-btn" onClick={decrement}>
                <i className="far fa-chevron-down"></i>
              </button>
            </div>
            <button className="th-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="icon-btn" onClick={handleAddToWishlist}>
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="product_meta">
            <span className="sku_wrapper">SKU: <span className="sku">BH-1001-BT</span></span>
            <span className="posted_in">Category: <Link onClick={ClickHandler} to="/shop">sports, gaming, music listening</Link></span>
            <span>Tags: <Link onClick={ClickHandler} to="/shop">Wireless</Link><Link onClick={ClickHandler} to="/shop">Sports</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;