import React from 'react';

const ProductDetailImages = () => {
    return (
        <div className="product-images">
            {/* Main Product Image */}
            <div className="swiper-container main-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="https://placehold.co/1200x800" data-lightbox="product-images">
                            <img src="https://placehold.co/500x300" alt="Main Image 1" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://placehold.co/1200x800" data-lightbox="product-images">
                            <img src="https://placehold.co/500x300" alt="Main Image 2" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://placehold.co/1200x800" data-lightbox="product-images">
                            <img src="https://placehold.co/500x300" alt="Main Image 3" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="https://placehold.co/1200x800" data-lightbox="product-images">
                            <img src="https://placehold.co/500x300" alt="Main Image 4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="swiper-container thumbnail-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="https://placehold.co/150x50" alt="Thumbnail 1" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://placehold.co/150x50" alt="Thumbnail 2" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://placehold.co/150x50" alt="Thumbnail 3" />
                    </div>
                    <div className="swiper-slide">
                        <img src="https://placehold.co/150x50" alt="Thumbnail 4" />
                    </div>
                </div>
                {/* Navigation Arrows */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
};

export default ProductDetailImages;
