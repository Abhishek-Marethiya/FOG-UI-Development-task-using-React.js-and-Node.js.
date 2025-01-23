import React, { useState } from "react";


function FilterBar({ onFilterChange, total }) {
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    priceMin: "",
    priceMax: "",
    sortBy: "",
    order: "asc",
  });
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-bar">
      <div className="filter" onClick={toggleSidebar}>
        <img
          src="/src/assets/icons/system-uicons-filtering.svg"
          alt="Filter Icon"
        />
        <span>Filter</span>
      </div>

      {/* Sidebar for mobile and tablet views */}
      <div
        className={`filter-sidebar ${showSidebar ? "open" : ""}`}
      >
        <div className="sidebar-header">
          <h3>Filters</h3>
          <button onClick={toggleSidebar}><img src="/src/assets/icons/icons8-cross-48.png" alt="" /></button>
        </div>
        <div className="dropdown">
          <label>Brand</label>
          <select
            name="brand"
            value={filters.brand}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value="Luxspace">Luxspace</option>
            <option value="IKEA">IKEA</option>
            <option value="WoodCraft">WoodCraft</option>
          </select>
        </div>
         {/* <img src="/src/assets/icons/line-5.svg" alt="Separator" /> */}
        <div className="dropdown">
          <label>Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All</option>
            <option value="Chair">Chair</option>
            <option value="Table">Table</option>
            <option value="Sofa">Sofa</option>
            <option value="Desk">Desk</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Price Range</label>
          <input
            type="number"
            name="priceMin"
            value={filters.priceMin}
            placeholder="Min"
            onChange={handleChange}
          />
          <input
            type="number"
            name="priceMax"
            value={filters.priceMax}
            placeholder="Max"
            onChange={handleChange}
          />
        </div>
        <div className="dropdown">
          <label>Sort by</label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
          >
            <option value="">Default</option>
            <option value="currentPrice">Price</option>
            <option value="brand">Brand</option>
          </select>
          <select
            name="order"
            value={filters.order}
            onChange={handleChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
        <div className="filter-bar-2">
          <div className="view-options filter-2">
            <img
              src="/src/assets/icons/ci-grid-big-round.svg"
              alt="List View"
              className="listView"
            />
            <img
              src="/src/assets/icons/bi-view-list.svg"
              alt="Grid View"
              className="gridView"
            />
          </div>
          <img src="/src/assets/icons/line-5.svg" alt="Separator" />
          <div className="results-info">
            <p>Showing {total} results</p>
          </div>
        </div>
      
    </div>
  );
}

export default FilterBar;
