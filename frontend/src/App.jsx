
import './App.css'
import './Responsive.css'
import Breadcrumb from './components/Breadcrumb';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid'
import { useState } from 'react';


function App() {

  const [filters, setFilters] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const handleResultCountUpdate = (count) => {
    setTotalResults(count);
  };
  
    return (
      <div className="fog-assignment">
        <Header />
      <Breadcrumb />
      <FilterBar onFilterChange={setFilters} total={totalResults} />
      <ProductGrid filters={filters} onResultCountUpdate={handleResultCountUpdate}/>
      <Features />
     
      </div>
    );
  
}

export default App
