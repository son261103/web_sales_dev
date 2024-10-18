import React from 'react';

const TechNews = () => {
    const newsItems = [
        {
            title: 'Tổng hợp Code Anime Adventures mới nhất 2024',
            image: 'https://placehold.co/600x400?text=Anime+Adventures',
            link: '#',
        },
        {
            title: 'Cách tải ảnh trên Instagram về điện thoại, máy tính cực dễ với vai thao tác',
            image: 'https://placehold.co/600x400?text=Instagram',
            link: '#',
        },
        {
            title: 'TOP 10 website tạo ảnh bằng AI từ văn bản, ảnh thật siêu chất',
            image: 'https://placehold.co/600x400?text=AI+Website',
            link: '#',
        },
        {
            title: 'Getnada là gì? Hướng dẫn chi tiết cách tạo mail Getnada cực dễ',
            image: 'https://placehold.co/600x400?text=Getnada',
            link: '#',
        },
    ];

    return (
        <section className="tech-news">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Tin tức công nghệ</h2>
                    <a href="#" className="view-all">Xem tất cả</a>
                </div>
                <div className="news-grid">
                    {newsItems.map((news, index) => (
                        <div className="news-item" key={index}>
                            <img src={news.image} alt={news.title} className="news-image" />
                            <div className="news-content">
                                <h3 className="news-title">{news.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechNews;
