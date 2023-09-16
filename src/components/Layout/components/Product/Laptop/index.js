/* eslint-disable jsx-a11y/anchor-has-content */
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import classNames from 'classnames/bind';
import styles from '../Product.module.scss';
import ItemProduct from '~/components/ItemProduct';
import { useEffect, useState } from 'react';
import request from '~/utils/request';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles);
function Laptop({ data }) {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`product?producttype=${data.id}`);
                console.log(res.data);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, [data]);

    return (
        <React.Fragment>
            <div className={cx('items')}>
                <div className={cx('items-title')}>
                    <div className={cx('items-title-container')}>
                        <span>{data.title}</span>

                        <div className={cx('title-container')}>
                            {data.describe.map((result) => (
                                <span key={uuidv4()} className={cx('title-container-item')}>{result}</span>
                            ))}
                        </div>

                    </div>
                    <Link to={`/product/${data.id}`} className={cx('title-container-a')}>
                        xem tất cả
                    </Link>
                </div>
                <Swiper
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={cx('mySwiper')}
                >
                    {
                        productItem.map((result) => (
                            <SwiperSlide>
                                <div className={cx('items-container')}>
                                    <ItemProduct key={uuidv4()} data={result} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </React.Fragment>
    );
}

export default Laptop;
