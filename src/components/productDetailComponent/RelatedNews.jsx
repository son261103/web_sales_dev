import React from 'react';

const RelatedNews = () => {
    return (
        <div className="col-lg-6 col-md-12 mt-5">
            <div className="news-section">
                <h3>Tin tức liên quan</h3>
                <ul>
                    <li>
                        <a href="#">
                            <img src="https://placehold.co/150x50" alt="Image 1" />
                            ASUS ra mắt dòng màn hình mới cho dân đồ họa
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.co/150x50" alt="Image 2" />
                            So sánh các dòng màn hình 24 inch hiện có trên thị trường
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.co/150x50" alt="Image 3" />
                            Hướng dẫn sử dụng màn hình Asus ProArt PA248QV
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.co/150x50" alt="Image 4" />
                            Lợi ích của tấm nền IPS cho dân thiết kế đồ họa
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://placehold.co/150x50" alt="Image 5" />
                            Cách chọn màn hình phù hợp cho công việc thiết kế
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RelatedNews;
