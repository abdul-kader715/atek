import Cookies from "js-cookie";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  delPrice?: number;
  proImg: string;
  [key: string]: any; 
}

interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleAddToCart = () => {
    let cart: (Product & { quantity: number })[] =
      Cookies.get("carts") != null
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



  return (
    <div className="th-product list-view">
      <div className="product-img">
        <img src={product.proImg} alt="Product Image" />
        <div className="actions">
          <span className="icon-btn" onClick={handleAddToCart}>
            <i className="far fa-cart-plus"></i>
          </span>
        </div>
      </div>
      <div className="product-content">
        <span className="price">
          ${product.price}
          <del>${product.delPrice}</del>
        </span>
        <h3 className="product-title">
          <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
            {product.title}
          </Link>
        </h3>
        <div
          className="star-rating"
          role="img"
          aria-label="Rated 5.00 out of 5"
        >
          <span>
            Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
            <span className="rating">1</span> customer rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
