/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import Styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faClock,
    faComments,
    faCreditCard,
    faEnvelope,
    faImages,
    faLocation,
    faMapLocation,
    faPhone,
    faRotate,
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('free-consultation')}>
                <span className={cx('footer-info')}>
                    ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
                </span>
                <div className={cx('footer-email')}>
                    <input className={cx('footer-input')} placeholder="Nhập email hoặc số điện thoại của bạn" />
                    <button className={cx('footer-btn')}>Gửi</button>
                </div>
            </div>
            <div className={cx('wrapper')}>
                <p className={cx('showroom')}>HỆ THỐNG CÁC SHOWROOM CỦA HACOM</p>
                <div className={cx('container')}>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                    <div className={cx('info-showroom')}>
                        <p className={cx('info-showroom-p')}>
                            <span className={cx('showroom-number')}>1</span>
                            <span className={cx('showroom-name')}>HACOM - HAI BÀ TRƯNG</span>
                        </p>
                        <p className={cx('info-showroom-items', 'weight-700')}>
                            <FontAwesomeIcon icon={faLocation} />
                            <span>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</span>
                        </p>
                        <p className={cx('info-showroom-items', 'red')}>
                            <a href="/image/id={}" className={cx('red')}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Hình ảnh thực tế showroom</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <a
                                className={cx('red')}
                                target="_blank"
                                href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMapLocation} />
                                <span>Xem bản đồ đường đi</span>
                            </a>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Bảo hành: 1900 1903 (máy lẻ 25393)</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email: kdbl.haibatrung@hacom.vn</span>
                        </p>
                        <p className={cx('info-showroom-items')}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>Thời gian mở cửa: Từ 8h-20h hàng ngày</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('product-payment')}>
                <div className={cx('wrapper')}>
                    <div className={cx('payment')}>
                        <FontAwesomeIcon className={cx('icon-pay')} icon={faTruckFast} />
                        <div className={cx('payment-text')}>
                            <b>CHÍNH SÁCH GIAO HÀNG</b>
                            <span>Nhận hàng và thanh toán tại nhà</span>
                        </div>
                    </div>
                    <div className={cx('payment')}>
                        <FontAwesomeIcon className={cx('icon-pay')} icon={faRotate} />
                        <div className={cx('payment-text')}>
                            <b>ĐỔI TRẢ DỄ DÀNG</b>
                            <span>1 đổi 1 trong 15 ngày</span>
                        </div>
                    </div>
                    <div className={cx('payment')}>
                        <FontAwesomeIcon className={cx('icon-pay')} icon={faCreditCard} />
                        <div className={cx('payment-text')}>
                            <b>THANH TOÁN TIỆN LỢI</b>
                            <span>Trả tiền mặt, CK, trả góp 0%</span>
                        </div>
                    </div>
                    <div className={cx('payment')}>
                        <FontAwesomeIcon className={cx('icon-pay')} icon={faComments} />
                        <div className={cx('payment-text')}>
                            <b>HỖ TRỢ NHIỆT TÌNH</b>
                            <span>Tư vấn, giải đáp mọi thắc mắc</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-introduce')}>
                <div className={cx('wrapper', 'introduce-container')}>
                    <div className={cx('footer-introduce-items')}>
                        <h3 className={cx('introduce-item-h3')}>GIỚI THIỆU HACOM</h3>
                        <p className={cx('introduce-item-p')}>Giới thiệu công ty</p>
                        <p className={cx('introduce-item-p')}>Liên hệ hợp tác kinh doanh</p>
                        <p className={cx('introduce-item-p')}>Thông tin tuyển dụng</p>
                        <p className={cx('introduce-item-p')}>Tin công nghệ</p>
                        <p className={cx('introduce-item-p')}>Thông tin tuyển dụng</p>
                        <span>
                            <svg
                                className={cx('items-icon-fb')}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                        </span>
                    </div>
                    <div className={cx('footer-introduce-items')}>
                        <h3 className={cx('introduce-item-h3')}>HỖ TRỢ KHÁCH HÀNG</h3>
                        <p className={cx('introduce-item-p')}>Hướng dẫn mua hàng trực tuyến</p>
                        <p className={cx('introduce-item-p')}>Hướng dẫn thanh toán</p>
                        <p className={cx('introduce-item-p')}>Hướng dẫn mua hàng trả góp</p>
                        <p className={cx('introduce-item-p')}>In hóa đơn điện tử</p>
                        <p className={cx('introduce-item-p')}>Gửi yêu cầu bảo hành</p>
                        <p className={cx('introduce-item-p')}>Góp ý, Khiếu Nại</p>
                    </div>
                    <div className={cx('footer-introduce-items')}>
                        <h3 className={cx('introduce-item-h3')}>CHÍNH SÁCH CHUNG</h3>
                        <p className={cx('introduce-item-p')}>Chính sách, quy định chung</p>
                        <p className={cx('introduce-item-p')}>Chính sách vận chuyển</p>
                        <p className={cx('introduce-item-p')}>Chính sách bảo hành</p>
                        <p className={cx('introduce-item-p')}>Chính sách cho doanh nghiệp</p>
                        <p className={cx('introduce-item-p')}>Chính sách hàng chính hãng</p>
                        <p className={cx('introduce-item-p')}>Bảo mật thông tin khách hàng</p>
                        <p className={cx('introduce-item-p')}>Chính sách nhập lại tính phí</p>
                    </div>
                    <div className={cx('footer-introduce-items')}>
                        <h3 className={cx('introduce-item-h3')}>THÔNG TIN KHUYẾN MẠI</h3>
                        <p className={cx('introduce-item-p')}>Thông tin khuyến mại</p>
                        <p className={cx('introduce-item-p')}>Sản phẩm khuyến mại</p>
                        <p className={cx('introduce-item-p')}>Sản phẩm mới</p>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('wrapper', 'footer-bottom-items')}>
                    <p>© 2021 Công ty Cổ phần đầu tư công nghệ HACOM</p>
                    <p>Địa chỉ: Số 129 + 131, phố Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội</p>
                    <p>GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001</p>
                    <p>Email: info@hacom.vn. Điện thoại: 1900 1903</p>
                </div>
            </div>
        </footer>
    );
}

export default footer;
