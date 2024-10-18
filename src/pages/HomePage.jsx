import React from 'react';
import '../styles/user/css/index.css'; // Import CSS file
import Navbar from "../components/common/Navbar";
import HeroCarousel from "../components/homeComponent/HeroCarousel";
import ProductCategories from "../components/homeComponent/ProductCategories";
import TechNews from "../components/homeComponent/TechNews";
import Footer from "../components/common/Footer";
import FeaturedProducts from "../components/homeComponent/FeaturedProducts";
import NewlyUpdatedProducts from "../components/homeComponent/NewlyUpdatedProducts";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <FeaturedProducts />
            <NewlyUpdatedProducts />
            <ProductCategories />
            <TechNews />
            <Footer />
        </>
    );
};

export default HomePage;
