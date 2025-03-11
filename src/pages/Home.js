import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../features/productSlice";
import Input from "../components/Input";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(data.length / perPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filteredData = data.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  if (sort === "low") filteredData.sort((a, b) => a.price - b.price);
  if (sort === "high") filteredData.sort((a, b) => b.price - a.price);

  const paginatedData = filteredData.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container">
      <div className="controls">
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-dropdown">
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
      <div className="product-grid">
        {paginatedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="pagination-button"
        >
          Previous
        </Button>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="pagination-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;