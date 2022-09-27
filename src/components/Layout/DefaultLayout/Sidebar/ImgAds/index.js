// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

import classNames from 'classnames/bind';
import styles from './ImgAds.module.scss';

const cx = classNames.bind(styles);
function ImgAds() {
    return (
        <>
            <div className={cx('img-ads-container')}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className={cx('mySwiper')}
                >
                    <SwiperSlide>
                        <img src="~/asset/images/anh1.png" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh2.jpg" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh1.png" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh2.jpg" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh1.png" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh2.jpg" alt="anh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="~/asset/images/anh2.jpg" alt="anh" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cx('slide-right')}></div>
        </>
    );
}

export default ImgAds;
