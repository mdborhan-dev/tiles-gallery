"use client";

import { useState } from "react";
import AllPageTileCard from "@/components/shared/AllPageTileCard";
import {
  FiSearch,
  FiArrowRight,
  FiChevronDown,
  FiFilter,
  FiX,
} from "react-icons/fi";

const TilesBrowser = ({ tiles }) => {
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const uniqueCategories = new Set(tiles.map((tile) => tile.category));
  const categories = ["all", ...uniqueCategories];

  let visibleTiles = [...tiles];

  if (filterCategory !== "all") {
    visibleTiles = visibleTiles.filter(
      (tile) => tile.category === filterCategory,
    );
  }

  if (appliedSearch.trim() !== "") {
    const term = appliedSearch.toLowerCase();
    visibleTiles = visibleTiles.filter(
      (tile) =>
        tile.title.toLowerCase().includes(term) ||
        tile.shortDescription.toLowerCase().includes(term),
    );
  }

  if (sortOption === "price-asc") {
    visibleTiles.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    visibleTiles.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating-desc") {
    visibleTiles.sort((a, b) => b.rating - a.rating);
  }

  const handleSearch = () => {
    setAppliedSearch(searchInput);
  };

  const clearSearch = () => {
    setSearchInput("");
    setAppliedSearch("");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero Search Section */}
      <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/60 p-6 sm:p-8 lg:p-12">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C7844F]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C7844F]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Find Your Perfect Tile
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm lg:text-base">
            Search through our collection of premium tiles
          </p>

          {/* Large Search Bar */}
          <div className="flex gap-2 sm:gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1 group">
              <FiSearch className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-5 sm:h-6 w-5 sm:w-6 text-stone-400 transition-colors duration-300 group-focus-within:text-[#C7844F]" />
              <input
                type="text"
                placeholder="Search tiles..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="w-full bg-white/95 backdrop-blur border-2 border-transparent rounded-xl sm:rounded-2xl pl-10 sm:pl-14 pr-10 sm:pr-12 py-3 sm:py-4.5 text-stone-700 placeholder-stone-400 text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:border-[#C7844F] focus:ring-4 focus:ring-[#C7844F]/20 shadow-lg"
              />
              {searchInput && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <FiX className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#C7844F] hover:bg-[#B67342] text-white font-semibold px-4 sm:px-8 py-3 sm:py-4.5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C7844F]/30 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#C7844F]/20"
            >
              <span className="flex items-center gap-2">
                <span className="hidden sm:inline">Search</span>
                <FiArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-100 overflow-hidden mb-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full lg:hidden flex items-center justify-between p-4 text-stone-700 font-medium hover:bg-stone-50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <FiFilter className="w-5 h-5 text-[#C7844F]" />
            Filters
          </span>
          <FiChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
          />
        </button>

        {/* Filter Content */}
        <div
          className={`${showFilters ? "block" : "hidden"} lg:block p-6 lg:p-8`}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Category Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-2.5">
                Category
              </label>
              <div className="relative group">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full appearance-none bg-stone-50 border-2 border-stone-100 rounded-xl px-4 py-3.5 pr-10 text-stone-700 font-medium text-sm cursor-pointer transition-all duration-300 hover:border-stone-200 hover:bg-stone-100/50 focus:outline-none focus:border-[#C7844F] focus:ring-4 focus:ring-[#C7844F]/10 focus:bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none transition-all duration-300 group-hover:text-[#C7844F]" />
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-2.5">
                Sort By
              </label>
              <div className="relative group">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full appearance-none bg-stone-50 border-2 border-stone-100 rounded-xl px-4 py-3.5 pr-10 text-stone-700 font-medium text-sm cursor-pointer transition-all duration-300 hover:border-stone-200 hover:bg-stone-100/50 focus:outline-none focus:border-[#C7844F] focus:ring-4 focus:ring-[#C7844F]/10 focus:bg-white"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none transition-all duration-300 group-hover:text-[#C7844F]" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#C7844F]/30 to-transparent"></div>
      </div>
      {/* Results Count - Outside filter card */}
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="text-sm font-medium text-stone-500">
          Showing{" "}
          <span className="text-[#C7844F] font-bold">
            {visibleTiles.length}
          </span>{" "}
          of {tiles.length} tiles
        </p>
        {appliedSearch && (
          <button
            onClick={clearSearch}
            className="text-sm text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1"
          >
            <FiX className="w-3 h-3" />
            Clear search
          </button>
        )}
      </div>

      {/* Results */}
      {visibleTiles.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-lg text-stone-500 font-medium">
            No tiles match your search.
          </p>
          <p className="text-sm text-stone-400 mt-2">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleTiles.map((tile) => (
            <AllPageTileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TilesBrowser;
