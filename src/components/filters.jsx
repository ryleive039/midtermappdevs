import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [stock, setStock] = useState("");

  const handleFilter = () => {
    onFilter(min, max, stock);
  };

  const handleReset = () => {
    setMin(0);
    setMax(1000);
    setStock("");
    onFilter(0, 1000, "");
  };

  return (
    <div className="filters-card">
      <h3>Filters</h3>

      
      <div className="filter-section">
        <label>Min Price</label>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
        />
        <label>Max Price</label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />
      </div>

    
      <div className="filter-section">
        <p>Availability</p>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={stock === "in"}
            onChange={() => setStock(stock === "in" ? "" : "in")}
          />
          In Stock
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={stock === "out"}
            onChange={() => setStock(stock === "out" ? "" : "out")}
          />
          Out of Stock
        </label>
      </div>

      
      <div className="filter-buttons">
        <button onClick={handleFilter} className="filter-btn">Apply Filters</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default Filters;