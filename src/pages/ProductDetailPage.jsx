import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from "../components/common/Navbar";
import ProductDetailImages from "../components/productDetailComponent/ProductDetailImages";
import ProductDetailInfo from "../components/productDetailComponent/ProductDetailInfo";
import Footer from "../components/common/Footer";
import Specifications from "../components/productDetailComponent/Specifications";
import RelatedNews from "../components/productDetailComponent/RelatedNews";
import ComparisonSection from "../components/productDetailComponent/ComparisonSection";
import { fetchProductById } from "../redux/actions/productActions";

import "../styles/user/css/product-detail.css";

const Product = () => {
    const { id } = useParams(); // Sử dụng useParams để lấy id
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product); // Lấy sản phẩm từ state

    useEffect(() => {
        dispatch(fetchProductById(id)); // Gọi action để lấy sản phẩm
    }, [dispatch, id]); // Chỉ phụ thuộc vào id

    if (!product) return <div>Loading...</div>; // Hiển thị loading khi dữ liệu chưa có

    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Product Detail Component */}
            <div id="product-root">
                {/* Container for Product Component */}
                <div className="product-container container">
                    <ProductDetailImages images={product.images} />
                    <ProductDetailInfo product={product} />
                </div>
            </div>

            <div className={"specifications container my-5"}>
                <div className={"row"}>
                    {/* Specification Component */}
                    <Specifications specs={product.specs} />

                    {/* Related News Component */}
                    <RelatedNews/>
                </div>
            </div>
            {/* Comparison Section Component */}
            <ComparisonSection/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default Product;
