import classNames from 'classnames/bind';
import styles from '../ProductDetail.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function ProductImgLeft({ data }) {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <div className={cx('items-img')}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('mySwiper2')}
            >
                {data.map((result) => (
                    <SwiperSlide>
                        <img src={result} alt="anh" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('mySwiper-leftimg')}
            >
                {data.map((result) => (
                    <SwiperSlide>
                        <img className={cx('items-left-img')} src={result} alt="anh" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductImgLeft;
