import React, {useEffect} from 'react';

const HeroCarousel = () => {
    useEffect(() => {
        // Initialize carousel to auto slide
        const carouselElement = document.getElementById('heroCarousel');
        const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 5000, // Auto-slide every 5 seconds
            ride: 'carousel',
            pause: 'hover', // Pause on hover
            wrap: true // Allows carousel to loop from last to first slide
        });

        return () => {
            // Cleanup on unmount
            bootstrapCarousel.dispose();
        };
    }, []);

    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                ></button>
                <button
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to="2"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://hanoicomputercdn.com/media/banner/22_Aug9a34251e6f042d4d6d527974eddc1d30.jpg"
                        className="d-block w-100"
                        alt="Latest Smartphones"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="hero-overlay">
                            {/*<h2 className="display-4 fw-bold">Khám phá smartphone mới nhất</h2>*/}
                            {/*<p className="lead">*/}
                            {/*    Trải nghiệm công nghệ đỉnh cao với các mẫu điện thoại thông minh mới nhất*/}
                            {/*</p>*/}
                            <a href="#" className="btn btn-primary btn-lg">Xem ngay</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://hanoicomputercdn.com/media/banner/29_Julee7413309980e7476aee463e0dd468ec.png"
                        className="d-block w-100"
                        alt="Smart Home Devices"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="hero-overlay">
                            {/*<h2 className="display-4 fw-bold">Biến ngôi nhà của bạn thành smart home</h2>*/}
                            {/*<p className="lead">*/}
                            {/*    Khám phá các thiết bị thông minh để tạo nên một ngôi nhà hiện đại*/}
                            {/*</p>*/}
                            <a href="#" className="btn btn-primary btn-lg">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://hanoicomputercdn.com/media/banner/08_Aug994069d58be51af8c5199643ffbe09b0.jpg"
                        className="d-block w-100"
                        alt="Wearable Tech"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="hero-overlay">
                            {/*<h2 className="display-4 fw-bold">Công nghệ đeo tay tiên tiến</h2>*/}
                            {/*<p className="lead">*/}
                            {/*    Nâng cao sức khỏe và hiệu suất với các thiết bị đeo thông minh*/}
                            {/*</p>*/}
                            <a href="#" className="btn btn-primary btn-lg">Khám phá ngay</a>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroCarousel;
