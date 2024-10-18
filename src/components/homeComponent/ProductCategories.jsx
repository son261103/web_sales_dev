import React from 'react';

const ProductCategories = () => {
    const categories = [
        { name: 'Laptop', image: 'https://placehold.co/60x60?text=Laptop' },
        { name: 'PC', image: 'https://placehold.co/60x60?text=PC' },
        { name: 'Màn hình', image: 'https://placehold.co/60x60?text=Màn+hình' },
        { name: 'Mainboard', image: 'https://placehold.co/60x60?text=Mainboard' },
        { name: 'CPU', image: 'https://placehold.co/60x60?text=CPU' },
        { name: 'VGA', image: 'https://placehold.co/60x60?text=VGA' },
        { name: 'RAM', image: 'https://placehold.co/60x60?text=RAM' },
        { name: 'Ổ cứng', image: 'https://placehold.co/60x60?text=Ổ+cứng' },
        { name: 'Case', image: 'https://placehold.co/60x60?text=Case' },
        { name: 'Tản nhiệt', image: 'https://placehold.co/60x60?text=Tản+nhiệt' },
        { name: 'Nguồn', image: 'https://placehold.co/60x60?text=Nguồn' },
        { name: 'Bàn phím', image: 'https://placehold.co/60x60?text=Bàn+phím' },
        { name: 'Chuột', image: 'https://placehold.co/60x60?text=Chuột' },
        { name: 'Ghế', image: 'https://placehold.co/60x60?text=Ghế' },
        { name: 'Tai nghe', image: 'https://placehold.co/60x60?text=Tai+nghe' },
        { name: 'Loa', image: 'https://placehold.co/60x60?text=Loa' },
        { name: 'Console', image: 'https://placehold.co/60x60?text=Console' },
        { name: 'Phụ kiện', image: 'https://placehold.co/60x60?text=Phụ+kiện' },
        { name: 'Thiết bị VP', image: 'https://placehold.co/60x60?text=Thiết+bị+VP' },
        { name: 'Apple', image: 'https://placehold.co/60x60?text=Apple' },
    ];

    return (
        <section className="product-categories py-5">
            <div className="container">
                <h2 className="section-title mb-4">Danh mục sản phẩm</h2>
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <div className="category-item" key={index}>
                            <img src={category.image} alt={category.name} />
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
