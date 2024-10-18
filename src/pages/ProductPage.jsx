import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Banner from '../components/productComponent/Banner';
import ProductList from '../components/productComponent/ProductList';
import Pagination from '../components/productComponent/Pagination';
import '../styles/user/css/product-list.css';
import { fetchProducts } from "../redux/actions/productActions";

const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Tính toán chỉ số sản phẩm cần hiển thị
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Chuyển đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList products={currentProducts} />
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <Footer />
        </div>
    );
};

export default ProductPage;
