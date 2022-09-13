import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faTemperature0, faWrench } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Menu from '~/components/Layout/DefaultLayout/components/Menu';
let cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('header-top')}>
                    <div className={cx('header-top-items')}>
                        <div className={cx('top-item')}>
                            <Tippy
                                className={cx('header-menu1')}
                                open={true}
                                content={
                                    <Menu>
                                        <span className={cx('header-menu1-span')}>Mua hàng trực tuyến (8h - 24h)</span>
                                        <span className={cx('header-menu1-span')}>Hỗ trợ kỹ thuật (9h - 21h30)</span>
                                        <span className={cx('header-menu1-span')}>
                                            Dịch vụ kỹ thuật - bảo hành (9h - 17h30)
                                        </span>
                                        <span className={cx('header-menu1-span')}>
                                            Dịch vụ kỹ thuật - bảo hành (9h - 17h30)
                                        </span>
                                    </Menu>
                                }
                            >
                                <span>Gọi mua hàng: 1900.1903</span>
                            </Tippy>
                        </div>

                        <div className={cx('top-item', 'linear-gradient')}>
                            <span>Khách Cá Nhân</span>
                        </div>
                        <div className={cx('top-item', 'linear-gradient')}>
                            <span>Khách Doanh nghiệp</span>
                        </div>
                        <div className={cx('top-item', 'linear-gradient')}>
                            <span>Bán hàng - TP HCM</span>
                        </div>
                    </div>
                    <div className={cx('header-top-items')}>
                        <div className={cx('top-item')}>
                            <span> Tìm cửa hàng gần nhất</span>
                        </div>
                        <div className={cx('top-item')}>
                            <Tippy
                                className={cx('header-menu1')}
                                content={
                                    <Menu>
                                        <span className={cx('header-menu1-span')}>Chính sách, quy định chung</span>
                                        <span className={cx('header-menu1-span')}>Chính sách vận chuyển</span>
                                        <span className={cx('header-menu1-span')}>Chính sách bảo hành</span>
                                        <span className={cx('header-menu1-span')}>Chính sách cho doanh nghiệp</span>
                                        <span className={cx('header-menu1-span')}>Chính sách hàng chính hãng</span>
                                        <span className={cx('header-menu1-span')}>Chính sách nhập lại tính phí</span>
                                        <span className={cx('header-menu1-span')}>Hướng dẫn mua hàng trực tuyến</span>
                                    </Menu>
                                }
                            >
                                <span>Hỗ trợ</span>
                            </Tippy>
                        </div>
                        <div className={cx('top-item')}>
                            <Tippy
                                className={cx('header-menu1')}
                                content={
                                    <Menu>
                                        <span className={cx('header-menu1-span')}>Tra cứu bảo hành</span>
                                        <span className={cx('header-menu1-span')}>In hóa đơn điện tử</span>
                                        <span className={cx('header-menu1-span')}>Gửi yêu cầu bảo hành</span>
                                        <span className={cx('header-menu1-span')}>Góp ý, khiếu nại</span>
                                    </Menu>
                                }
                            >
                                <span> Trung tâm dịch vụ</span>
                            </Tippy>
                        </div>
                        <div className={cx('top-item')}>
                            <span>Khuyến mại</span>
                        </div>
                        <div className={cx('top-item')}>
                            <span>Tài khoản</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('logo')}>
                    <img src="https://hanoicomputercdn.com/media/lib/01-09-2022/logo-hacom.png" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Nhập sản phẩm từ khóa cần tìm" />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('header-bottom-right')}>
                    <div className={cx('bottom-right-items')}>
                        <FontAwesomeIcon className={cx('bottom-right-icon')} icon={faWrench} />
                        <span className={cx('bottom-right-item')}>Xây dựng cấu hình</span>
                    </div>
                    <div className={cx('bottom-right-items')}>
                        <FontAwesomeIcon className={cx('bottom-right-icon')} icon={faTemperature0} />
                        <span className={cx('bottom-right-item')}>Xây dựng cấu hình</span>
                    </div>
                    <div className={cx('bottom-right-items', 'cart')}>
                        <FontAwesomeIcon className={cx('bottom-right-cart')} icon={faCartShopping} />
                        <b className={cx('count-items-cart')}>0</b>
                        <span className={cx('bottom-right-item')}>Giỏ hàng</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
