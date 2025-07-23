import { useState, type ChangeEvent, type FC, type MouseEvent } from "react";
import api from "../../api/data.json";
import ProductCart from "../shop/product-cart";
import ProductCartS2 from "../shopS2/product-cartS2";

interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  [key: string]: any;
  slug: string;
  proImg: string;
}

interface ProductAreaProps {
  className?: string;
  totalPages?: number;
}


const ProductArea: FC<ProductAreaProps> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<string>("menu_order");
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts: Product[] = api.slice(startIndex, endIndex).map((item: any) => ({
    ...item,
    name: item.title,
    price: Number(item.price),
  }));

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= Math.ceil(api.length / itemsPerPage)) {
      setCurrentPage(pageNum);
    }
  };

  const totalPagesCalculated = Math.ceil(api.length / itemsPerPage);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handlePageClick = (e: MouseEvent<HTMLSpanElement>, pageNum: number) => {
    e.preventDefault();
    handlePageChange(pageNum);
  };

  return (
    <div>
      <section className={className}>
        <div className="container">
          <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-4">
                <div className="search-form-area">
                  <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="sorting-filter-wrap">
                  <div className="nav" role="tablist">
                    <a
                      className="active"
                      href="#"
                      id="tab-destination-grid"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-grid"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="true"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa-light fa-grid-2"></i>
                    </a>

                    <a
                      href="#"
                      id="tab-destination-list"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-list"
                      role="tab"
                      aria-controls="tab-list"
                      aria-selected="false"
                      className=""
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa-solid fa-list"></i>
                    </a>
                  </div>
                  <form className="woocommerce-ordering" method="get">
                    <div className="form-group">
                      <select
                        name="orderby"
                        className="orderby"
                        value={sortOrder}
                        onChange={handleSortChange}
                      >
                        <option value="menu_order">Default Sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-40">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="tab-grid"
                role="tabpanel"
                aria-labelledby="tab-shop-grid"
              >
                <div className="row gy-40">
                  {paginatedProducts.map((product, index) => (
                    <div className="col-xl-4 col-sm-6" key={product.id || index}>
                      <ProductCart product={product} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="tab-list"
                role="tabpanel"
                aria-labelledby="tab-shop-list"
              >
                <div className="row gy-30">
                  {paginatedProducts.map((product, index) => (
                    <div className="col-md-6" key={product.id || index}>
                      <ProductCartS2 product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {totalPagesCalculated > 1 && (
            <div className="th-pagination mt-60 text-center pt-50">
              <ul>
                {Array.from({ length: totalPagesCalculated }, (_, i) => (
                  <li key={i}>
                    <span
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={(e) => handlePageClick(e, i + 1)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handlePageChange(i + 1);
                      }}
                    >
                      {i + 1}
                    </span>
                  </li>
                ))}
                <li>
                  <span
                    className="next-page"
                    onClick={() => handlePageChange(currentPage + 1)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handlePageChange(currentPage + 1);
                    }}
                  >
                    <i className="fa-sharp fa-light fa-arrow-right"></i>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductArea;
