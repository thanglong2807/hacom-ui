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
        <div className={cx('layout-img')}>
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
                    className={cx('mySwiper', 'border-radius')}
                >
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/01_Aug3eb48b729ff81905359713b5a8db9661.jpg"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/05_Sep3f78cebbc94e5579898d12f0e5fe6fe6.png"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/01_Aug3eb48b729ff81905359713b5a8db9661.jpg"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/05_Sep3f78cebbc94e5579898d12f0e5fe6fe6.png"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/01_Aug3eb48b729ff81905359713b5a8db9661.jpg"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/05_Sep3f78cebbc94e5579898d12f0e5fe6fe6.png"
                            alt="anh"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://hanoicomputercdn.com/media/banner/05_Sep3f78cebbc94e5579898d12f0e5fe6fe6.png"
                            alt="anh"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={cx('slide-right')}>
                <img className={cx('border-radius')} src="https://i.ytimg.com/vi/bEqU7wf9VXY/hq720.jpg" alt="anh" />
                <img className={cx('border-radius')} src="https://i.ytimg.com/vi/bEqU7wf9VXY/hq720.jpg" alt="anh" />
            </div>

            <div className={cx('slide-bottom')}>
                <img className={cx('border-radius')} src="https://i.ytimg.com/vi/bEqU7wf9VXY/hq720.jpg" alt="anh" />
            </div>
            <div className={cx('slide-bottom')}>
                <img className={cx('border-radius')} src="https://i.ytimg.com/vi/bEqU7wf9VXY/hq720.jpg" alt="anh" />
            </div>
            <div className={cx('slide-bottom')}>
                <img className={cx('border-radius')} src="https://i.ytimg.com/vi/bEqU7wf9VXY/hq720.jpg" alt="anh" />
            </div>
        </div>
    );
}

export default ImgAds;
