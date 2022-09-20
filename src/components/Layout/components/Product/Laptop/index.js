/* eslint-disable jsx-a11y/anchor-has-content */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import classNames from 'classnames/bind';
import styles from '../Product.module.scss';
const cx = classNames.bind(styles);
function Laptop() {
    return (
        <div className={cx('items')}>
            <div className={cx('items-title')}>
                <div className={cx('items-title-container')}>
                    <span>LAPTOP, TABLET, MOBILE</span>
                    <div className={cx('title-container')}>
                        <span className={cx('title-container-item')}>Laptop, Máy Tính Xách Tay</span>
                        <span className={cx('title-container-item')}>Điện Thoại, Máy Tính Bảng</span>
                    </div>
                </div>
                <a className={cx('title-container-a')} href="/">
                    xem tất cả
                </a>
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
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={cx('mySwiper')}
            >
                <SwiperSlide>
                    <div className={cx('items-container')}>
                        <div className={cx('items-img')}>
                            <a className={cx('items-img-a')} href="/">
                                <img
                                    className={cx('items-img-children')}
                                    src="https://hanoicomputercdn.com/media/product/250_67191_pcgm522_17_003.jpg"
                                    alt="PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)"
                                />
                            </a>
                        </div>
                        <div className={cx('items-evaluate')}>
                            <a
                                className={cx('items-evaluate-a')}
                                href="/pc-hacom-shark-s02-i5-12400f-b660-8gb-ram-500gb-ssd-gtx-1660s-550w#tab5"
                            >
                                <img
                                    src="https://hacom.vn/media/lib/star_0.png"
                                    alt="rate"
                                    className={cx('items-evaluate-img')}
                                />
                                <span className={cx('items-evaluate-cound')}>(0)</span>
                            </a>
                            <p>Mã: PCGM522</p>
                        </div>
                        <div className={cx('items-info')}>
                            <h3 className={cx('items-info-name')}>
                                <a href="/">PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)</a>
                            </h3>

                            <div>
                                <span className={cx('items-info-mprice')}> 19.999.000₫ </span>
                                <span className={cx('items-info-discount')}>
                                    <span className={cx('noMinPrice')}>(Tiết kiệm: 19% )</span>
                                </span>
                            </div>
                            <span className={cx('items-info-price')}> 16.899.000₫</span>
                        </div>
                        <div className={cx('items-action')}>
                            <span className={cx('items-qty')}>
                                <i className="fa fa-check" aria-hidden="true"></i> Còn hàng
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('items-container')}>
                        <div className={cx('items-img')}>
                            <a className={cx('items-img-a')} href="/">
                                <img
                                    className={cx('items-img-children')}
                                    src="https://hanoicomputercdn.com/media/product/250_67191_pcgm522_17_003.jpg"
                                    alt="PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)"
                                />
                            </a>
                        </div>
                        <div className={cx('items-evaluate')}>
                            <a
                                className={cx('items-evaluate-a')}
                                href="/pc-hacom-shark-s02-i5-12400f-b660-8gb-ram-500gb-ssd-gtx-1660s-550w#tab5"
                            >
                                <img
                                    src="https://hacom.vn/media/lib/star_0.png"
                                    alt="rate"
                                    className={cx('items-evaluate-img')}
                                />
                                <span className={cx('items-evaluate-cound')}>(0)</span>
                            </a>
                            <p>Mã: PCGM522</p>
                        </div>
                        <div className={cx('items-info')}>
                            <h3 className={cx('items-info-name')}>
                                <a href="/">PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)</a>
                            </h3>

                            <div>
                                <span className={cx('items-info-mprice')}> 19.999.000₫ </span>
                                <span className={cx('items-info-discount')}>
                                    <span className={cx('noMinPrice')}>(Tiết kiệm: 19% )</span>
                                </span>
                            </div>
                            <span className={cx('items-info-price')}> 16.899.000₫</span>
                        </div>
                        <div className={cx('items-action')}>
                            <span className={cx('items-qty')}>
                                <i className="fa fa-check" aria-hidden="true"></i> Còn hàng
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('items-container')}>
                        <div className={cx('items-img')}>
                            <a className={cx('items-img-a')} href="/">
                                <img
                                    className={cx('items-img-children')}
                                    src="https://hanoicomputercdn.com/media/product/250_67191_pcgm522_17_003.jpg"
                                    alt="PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)"
                                />
                            </a>
                        </div>
                        <div className={cx('items-evaluate')}>
                            <a
                                className={cx('items-evaluate-a')}
                                href="/pc-hacom-shark-s02-i5-12400f-b660-8gb-ram-500gb-ssd-gtx-1660s-550w#tab5"
                            >
                                <img
                                    src="https://hacom.vn/media/lib/star_0.png"
                                    alt="rate"
                                    className={cx('items-evaluate-img')}
                                />
                                <span className={cx('items-evaluate-cound')}>(0)</span>
                            </a>
                            <p>Mã: PCGM522</p>
                        </div>
                        <div className={cx('items-info')}>
                            <h3 className={cx('items-info-name')}>
                                <a href="/">PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)</a>
                            </h3>

                            <div>
                                <span className={cx('items-info-mprice')}> 19.999.000₫ </span>
                                <span className={cx('items-info-discount')}>
                                    <span className={cx('noMinPrice')}>(Tiết kiệm: 19% )</span>
                                </span>
                            </div>
                            <span className={cx('items-info-price')}> 16.899.000₫</span>
                        </div>
                        <div className={cx('items-action')}>
                            <span className={cx('items-qty')}>
                                <i className="fa fa-check" aria-hidden="true"></i> Còn hàng
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('items-container')}>
                        <div className={cx('items-img')}>
                            <a className={cx('items-img-a')} href="/">
                                <img
                                    className={cx('items-img-children')}
                                    src="https://hanoicomputercdn.com/media/product/250_67191_pcgm522_17_003.jpg"
                                    alt="PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)"
                                />
                            </a>
                        </div>
                        <div className={cx('items-evaluate')}>
                            <a
                                className={cx('items-evaluate-a')}
                                href="/pc-hacom-shark-s02-i5-12400f-b660-8gb-ram-500gb-ssd-gtx-1660s-550w#tab5"
                            >
                                <img
                                    src="https://hacom.vn/media/lib/star_0.png"
                                    alt="rate"
                                    className={cx('items-evaluate-img')}
                                />
                                <span className={cx('items-evaluate-cound')}>(0)</span>
                            </a>
                            <p>Mã: PCGM522</p>
                        </div>
                        <div className={cx('items-info')}>
                            <h3 className={cx('items-info-name')}>
                                <a href="/">PC HACOM SHARK S02 (i5 12400F/B660/8GB RAM/500GB SSD/GTX 1660S/550W)</a>
                            </h3>

                            <div>
                                <span className={cx('items-info-mprice')}> 19.999.000₫ </span>
                                <span className={cx('items-info-discount')}>
                                    <span className={cx('noMinPrice')}>(Tiết kiệm: 19% )</span>
                                </span>
                            </div>
                            <span className={cx('items-info-price')}> 16.899.000₫</span>
                        </div>
                        <div className={cx('items-action')}>
                            <span className={cx('items-qty')}>
                                <i className="fa fa-check" aria-hidden="true"></i> Còn hàng
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Laptop;
