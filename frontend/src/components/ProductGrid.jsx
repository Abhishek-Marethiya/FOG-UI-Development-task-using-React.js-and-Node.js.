import React, { useState ,useEffect} from 'react'
import ProductCard from './ProductCard';
function ProductGrid({filters ,onResultCountUpdate}) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      const query = new URLSearchParams({
        ...filters,
        page,
        limit: 12,
      }).toString();
  try {
     setIsLoading(true);
      const response = await fetch(`https://fog-ui-development-task-backend.vercel.app/api/products?${query}`);
      // const response = await fetch(`http://localhost:5000/api/products?${query}`);    
      const data = await response.json();
      console.log(data);
      
      setProducts(data.products);
      setTotal(data.total);
      onResultCountUpdate(data.total);
  } catch (error) {
    console.log(error);
  }finally{
    setIsLoading(false);
  }
      // setIsLoading(true);
      // const response = await fetch(`http://localhost:5000/api/products?${query}`);    
      // const data = await response.json();
      // setProducts(data.products);
      // setTotal(data.total);
      // onResultCountUpdate(data.total);
     
    };

    fetchProducts();
  }, [filters, page]);

  if (isLoading) {
        return <img src="/icons/icons8-loading-96.png" alt="" className='loader' />
      }
    
      if (products.length === 0) {
        return <p className='loading-message'>No products found matching the filters.</p>;
      }

  return (
  <div>
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

  {/* //pagination */}

  <div className="pagination">
  
  {Array.from({ length: Math.ceil(total / 12) }, (_, i) => (
    <button 
      key={i} 
      onClick={() => setPage(i + 1)} 
      className={page === i + 1 ? "Pageactive" : ""}
    >
      {i + 1}
    </button>
  ))}
  <button 
    onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(total / 12)))} 
    disabled={page === Math.ceil(total / 12)} 
    className={page === Math.ceil(total / 12) ? "disabled" : ""}
  >
    Next
  </button>
</div>
</div>
  )
}

export default ProductGrid

