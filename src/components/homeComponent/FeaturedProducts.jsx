import React from 'react';
import HomeProductCard from "./HomeProductCard";


const FeaturedProducts = () => {
    const products = [
        {
            name: 'iPhone 14 Pro',
            description: 'A16 Bionic, màn hình 6.1" Super Retina XDR',
            price: '27.990.000đ',
            originalPrice: '30.990.000đ',
            discount: '-10%',
            image: 'https://placehold.co/200x150?text=iPhone+14+Pro',
            link: 'product-detail.html?id=iphone-14-pro',
        },
        {
            name: 'Samsung Galaxy S22',
            description: 'Exynos 2200, màn hình 6.1" Dynamic AMOLED 2X',
            price: '21.990.000đ',
            originalPrice: '25.990.000đ',
            discount: '-15%',
            image: 'https://placehold.co/200x150?text=Samsung+Galaxy+S22',
            link: 'product-detail.html?id=samsung-galaxy-s22',
        },
        // Thêm các sản phẩm khác tương tự như trên
    ];

    return (
        <section id="featured-products" className="py-4">
            <div className="container">
                <h2 className="text-primary border-bottom pb-2 mb-4">Sản phẩm nổi bật</h2>
                <div className="position-relative">
                    <div className="product-scroll-container d-flex overflow-auto">
                        {products.map((product, index) => (
                            <HomeProductCard key={index} product={product}/>
                        ))}
                    </div>
                    <button
                        className="btn btn-primary position-absolute top-50 start-0 translate-middle-y"
                        id="scrollLeft"
                        style={{zIndex: 1}}
                    >
                        <i className="fas fa-chevron-left"/>
                    </button>
                    <button
                        className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
                        id="scrollRight"
                        style={{zIndex: 1}}
                    >
                        <i className="fas fa-chevron-right"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
