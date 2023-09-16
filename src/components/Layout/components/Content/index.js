/* eslint-disable jsx-a11y/anchor-has-content */
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ProductContent from './ProductContent';
const cx = classNames.bind(styles);
function Content() {
    const danhmuc = [
        {
            title: 'LAPTOP, TABLET, MOBILE',
            id: uuidv4(),
            describe: ['Laptop, Máy Tính Xách Tay', ' Điện Thoại, Máy Tính Bảng'],
        },
        {
            title: 'PC VĂN PHÒNG, AIO, MINI PC',
            id: uuidv4(),
            describe: [
                'Máy Tính Văn Phòng HACOM',
                ' Máy Tính Để Bàn Dell',
                ' Máy Tính Để Bàn HP',
                ' Máy Tính Để Bàn Asus',
                '  Máy Tính Để Bàn Lenovo',
                '  Máy Tính Để Bàn Acer',
            ],
        },

        {
            title: 'PC GAMING, STREAMING',
            id: uuidv4(),
            describe: [
                'Máy Tính Chơi Game HACOM',
                ' Máy Tính Live Stream, PC Streamer, Youtuber',
                'Máy Tính Chơi Game Asus',
                ' Máy Tính Chơi Game Lenovo',
                ' Máy Tính Chơi Game MSI',
                'GIGABYTE',
            ],
        },
        {
            title: 'PC ĐỒ HỌA, RENDER, MÁY CHỦ',
            id: uuidv4(),
            describe: [
                'PC Đồ Họa',
                'Render HACOM',
                ' Máy Chủ HACOM',
                ' Máy Trạm Hãng',
                ' Máy Chủ Hãng',
                '  Linh Kiện Máy Chủ, Máy Trạm',
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {danhmuc.map((result) => (
                <div key={result.id} className={cx('items')}>
                    <div className={cx('items-title')}>
                        <p>CẤU HÌNH PC KHỦNG VẬT VÃ </p>
                        <p>GAME THỦ CHƠI GAME THẬT ĐÃ</p>
                    </div>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 20000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <>
                            <SwiperSlide>
                                <ProductContent key={result.id} data={result.producttype} />
                            </SwiperSlide>
                        </>
                    </Swiper>
                    <a href="/" className={cx('items-view')}>
                        Xem tất cả sản phẩm
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Content;
