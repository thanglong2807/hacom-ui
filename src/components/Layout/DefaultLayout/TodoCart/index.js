import { faAnglesDown, faGift, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './TodoCart.module.scss';
const cx = classNames.bind(styles);
function TodoCart() {
    const haveProduct = true;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product__container-title')}>
                <span className={cx('product-title-span')}>
                    <Link className={cx('product-title-a', 'home')} to="/">
                        <span>Trang chủ</span>
                    </Link>
                    <Link className={cx('product-title-a', 'items')} to="/">
                        <span>Giỏ hàng của bạn</span>
                    </Link>
                </span>
                {!haveProduct ? (
                    <>
                        <h3 className={cx('title-h3')}>
                            Giỏ hàng <span>(0 sản phẩm)</span>
                        </h3>
                        <div className={cx('no-product-cart')}>
                            <img src="https://hacom.vn/template/july_2021/images/tk-shopping-img.png?v=1.1" alt="" />
                            <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                            <Link to="/">Tiếp tục mua sắm</Link>
                        </div>
                    </>
                ) : (
                    <div>
                        <h3 className={cx('title-h3')}>
                            Giỏ hàng <span>(0 sản phẩm)</span>
                        </h3>
                        <div className={cx('cart-container')}>
                            <div className={cx('cart-container-left')}>
                                <div className={cx('cart-container-left-items')}>
                                    <div className={cx('cart-product-items-title')}>
                                        <input type="checkbox" /> Tất cả sản phẩm
                                    </div>
                                    <div className={cx('cart-product-items-price')}> Đơn giá</div>
                                    <div className={cx('cart-product-items-amount')}> Số lượng</div>
                                    <div className={cx('cart-product-items-into-money')}> Thành tiền</div>
                                    <div className={cx('cart-product-items-delete')}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </div>
                                <div className={cx('cart-container-left-items')}>
                                    <div className={cx('cart-product-items-title')}>
                                        <input type="checkbox" />
                                        <div className={cx('product-items')}>
                                            <Link to="/">
                                                <img
                                                    className={cx('product-items-img')}
                                                    src="https://hanoicomputercdn.com/media/product/250_60848_thermal_take_core_p3_custom__1_.jpg"
                                                    alt=""
                                                />
                                            </Link>
                                            <div className={cx('product-items-chile')}>
                                                <Link to="/">
                                                    Trọn bộ tản nhiệt nước PC Thermaltake Core P3 - HT-111 (Lắp ráp theo
                                                    yêu cầu)
                                                </Link>
                                                <span>
                                                    Mã SP:<b> PCMD121</b>
                                                </span>
                                                <div className={cx('gift')}>
                                                    <div className={cx('gift-items')}>
                                                        <FontAwesomeIcon className={cx('gift-icon')} icon={faGift} />
                                                        Khuyễn mại
                                                    </div>
                                                    <div className={cx('gift-items')}>
                                                        <FontAwesomeIcon
                                                            className={cx('gift-icon')}
                                                            icon={faAnglesDown}
                                                        />
                                                        Mua sau
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('cart-product-items-price', 'price-item')}> 6.967.000₫</div>
                                    <div className={cx('cart-product-items-amount')}>
                                        <div className={cx('amount-items')}>
                                            <span className={cx('amount-items-span')}>
                                                <Link to="/" data-value="-1" title="tru">
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </Link>
                                                <input value="1" size="5" />
                                                <Link to="/" data-value="1" title="them">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cx('cart-product-items-into-money', 'red')}> 6.967.000₫</div>
                                    <div className={cx('cart-product-items-delete')}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('pay')}>
                                <div className={cx('pay-gift')}>
                                    <input placeholder="Mã giảm giá / quà tặng" />
                                    <button>áp dụng</button>
                                </div>
                                <div>
                                    <div className={cx('pay-item')}>
                                        <span>Tạm tính</span>
                                        <span className={cx('pay-price')}>6.967.000₫</span>
                                    </div>
                                    <div className={cx('pay-item')}>
                                        <span>Giảm giá</span>
                                        <span className={cx('pay-price')}>0₫</span>
                                    </div>
                                    <div className={cx('pay-item')}>
                                        <span>Thành tiền</span>
                                        <span className={cx('pay-price-pro', 'red')}>6.967.000₫</span>
                                    </div>
                                </div>
                                <span className={cx('pay-vat')}>(Đã bao gồm VAT nếu có)</span>
                                <button className={cx('pay-submit')}>Tiến hành đặt hàng</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TodoCart;
