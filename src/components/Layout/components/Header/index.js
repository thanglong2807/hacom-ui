import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faTemperature0, faWrench } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
let cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('wrappe')}>
                <div className={cx('header-top')}>
                    <div className={cx('header-top-items')}>
                        <div className={cx('top-item')}>
                            <span>Gọi mua hàng: 1900.1903</span>
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
                            <span>Hỗ trợ</span>
                        </div>
                        <div className={cx('top-item')}>
                            <span> Trung tâm dịch vụ</span>
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
                    <img src="https://hanoicomputercdn.com/media/lib/01-09-2022/logo-hacom.png" alt="img" />
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
                    <Tippy
                        // placement="bottom"
                        // zIndex={999999999}
                        interactive={true}
                        visible
                        render={(attrs) => (
                            <div className tabIndex="-1" {...attrs}>
                                hello
                            </div>
                        )}
                    >
                        <div className={cx('bottom-right-items', 'cart')}>
                            <FontAwesomeIcon className={cx('bottom-right-cart')} icon={faCartShopping} />
                            <b className={cx('count-items-cart')}>0</b>
                            <span className={cx('bottom-right-item')}>Giỏ hàng</span>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
