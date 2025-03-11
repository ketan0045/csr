import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="details-button">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;