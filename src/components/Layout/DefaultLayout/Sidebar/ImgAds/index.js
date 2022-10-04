// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

import classNames from 'classnames/bind';
import styles from './ImgAds.module.scss';
import { useEffect, useState } from 'react';
import request from '~/utils/request';

const cx = classNames.bind(styles);
function ImgAds() {
    const [productItem, setProductItem] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`adsimg`);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, []);
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
                    {productItem.map((result) => (
                        <SwiperSlide>
                            <img src={result.avatar} alt="anh" />
                        </SwiperSlide>
                    ))}
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
