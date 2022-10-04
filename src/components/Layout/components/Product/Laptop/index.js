/* eslint-disable jsx-a11y/anchor-has-content */
import { Swiper, SwiperSlide } from 'swiper/react';

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
const cx = classNames.bind(styles);
function Laptop({ data }) {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`product?loaispId=${data.id}`);
                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, []);

    return (
        <>
            <div className={cx('items')}>
                <div className={cx('items-title')}>
                    <div className={cx('items-title-container')}>
                        <span>{data.title}</span>
                        <div className={cx('title-container')}>
                            {data.describe.map((result) => (
                                <span className={cx('title-container-item')}>{result}</span>
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
                    {productItem.map((result) => (
                        <SwiperSlide>
                            <div className={cx('items-container')}>
                                <ItemProduct key={result.id} data={result} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Laptop;
