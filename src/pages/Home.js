// import React from 'react';
// import { useEffect, useState } from "react";
// import ProductList from '../components/ProductList';
// import Banner from '../components/Banner/Banner';
// import SearchBox from "../pages/Search";
// import CategoryButtons from "../components/CategoryButtons/CategoryButtons";
// import {
//     fetchProducts,
//     fetchCategories,
//     fetchProductsInCategory,
//     filterProductsByTitle,
// } from "../data/items.json";

// function Home() {
//     const api_url = "../data/items.json";
//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         fetchProducts(api_url, setProducts);
//         fetchCategories(api_url, setCategories);
//     }, []);

//     const getProductInCategory = (catname) => {
//         fetchProductsInCategory(api_url, catname, setProducts);
//     };

//     const searchProducts = () => {
//         filterProductsByTitle(api_url, searchQuery, setProducts);
//     };

//     return (
//         <>
//             <Banner />
//             <SearchBox handleSearch={searchProducts} setSearchQuery={setSearchQuery} />
//             <CategoryButtons
//                 categories={categories}
//                 getProductInCategory={getProductInCategory}
//                 getProducts={() => fetchProducts(api_url, setProducts)}
//             />
//             <ProductList products={products} />
//         </>
//     );
// }

// export default Home;
