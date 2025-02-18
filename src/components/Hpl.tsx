import React from "react";
import './Hpl.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discountPrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface HorizontalProductListProps {
  products: Product[];
  showDiscounts?: boolean;
  highlightNew?: boolean;
  showBestSellers?: boolean;
}

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  products,
  showDiscounts = true,
  highlightNew = true,
  showBestSellers = true,
}) => {
  return (
    <div className="horizontal-product-list">
      <div className="product-container">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${
              highlightNew && product.isNew ? "new-product" : ""
            } ${showBestSellers && product.isBestSeller ? "best-seller" : ""}`}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            {showDiscounts && product.discountPrice ? (
              <p className="product-price discount">
                <span className="old-price">${product.price.toFixed(2)}</span>
                <span className="new-price">${product.discountPrice.toFixed(2)}</span>
              </p>
            ) : (
              <p className="product-price">${product.price.toFixed(2)}</p>
            )}
            {highlightNew && product.isNew && <span className="badge new">New</span>}
            {showBestSellers && product.isBestSeller && <span className="badge best">Best Seller</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalProductList;