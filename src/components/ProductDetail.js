import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p className="product-detail-price">${product.price}</p>
        <p className="product-detail-category">Category: {product.category}</p>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
