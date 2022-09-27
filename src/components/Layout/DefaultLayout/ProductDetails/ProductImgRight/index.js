import { faAngleDown, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ProductImg.module.scss';
const cx = classNames.bind(styles);
function ProductImgRight() {
    return (
        <div>
            <div className={cx('product_detail-meta')}>
                <div className={cx('product_detail-sku')}>
                    Mã SP: <span className={cx('sku')}>LTAU733</span>
                </div>
                <div className={cx('product_detail-separator')}></div>
                Đánh giá:
                <a href="#tab5" className={cx('product_detail-star')}>
                    <div className={cx('danh-gia-sao')}></div>
                </a>
                <a href="#tab5" className={'count-rate'}>
                    1
                </a>
                <div className={cx('product_detail-separator')}></div>
                <a href="#comment" className={cx('product_detail-view-counter')}>
                    Bình luận: <span className={cx('counter-number')}>3</span>
                </a>
                <div className={cx('product_detail-separator')}></div>
                <div className={cx('product_detail-view-counter')}>
                    Lượt xem: <span className={cx('counter-number')}>9051</span>
                </div>
            </div>
            <div className={cx('product-summary-item')}>
                <div className={cx('product-summary-item-title')}>Thông số sản phẩm</div>

                <ul className={cx('product-summary-item-ul')}>
                    <li>CPU Intel® Core™ i5-12500H Processor (18MB cache, up to 4.5GHz)</li>

                    <li>RAM 8GB DDR4 Onboard ( còn 1 khe ram trống)</li>

                    <li>SSD 512GB M.2 NVMe™ PCIe® 3.0</li>

                    <li>VGA Intel® Iris® Xe Graphics</li>

                    <li>Màn hình 15.6Inch OLED FHD</li>

                    <li>Backlit Chiclet Keyboard</li>

                    <li>Màu: Bạc</li>

                    <li>OS Windows 11 Home SL</li>
                </ul>
                <a href="/" className={cx('viewmoretskt')}>
                    Xem thêm <FontAwesomeIcon icon={faAngleDown} />
                </a>
            </div>
            <div className={cx('price-2021')}>
                <p>Giá khuyến mại:</p>
                <span className={cx('gia-km-cu')}>19.299.000₫</span>
                <div className={cx('gia-thang-5')}>
                    <p>Giá đặc biệt ưu đãi tháng 9:</p>

                    <strong className={cx('giakm')} data-price="18999000">
                        18.999.000₫
                    </strong>

                    <strong className={cx('giany')}> 19.999.000₫ </strong>

                    <label className={cx('tietkiem')}>Tiết kiệm 1.000.000₫</label>
                </div>

                <div className={cx('tra-gop-zero')}>Ưu đãi trả góp 0%</div>

                <div className={cx('gia-quet-vnpay')}>
                    Giá VNPAY:
                    <span>18.699.000₫</span>
                    <a href="/">Click xem chi tiết</a>
                </div>

                <div className={cx('product-summary-items')}>
                    <div className={cx('yellow-ribbon')}>Giá đã có VAT</div>

                    <div className={cx('yellow-ribbon')}>Bảo hành 24 Tháng</div>

                    <div className={cx('yellow-ribbon')}>Quét VNPAYQR giảm thêm 100k</div>
                </div>
            </div>
            <div className={cx('box-number-detail')}>
                <span className={cx('so-luong')}>Số lượng:</span>
                <span className={cx('new-cart-quantity')}>
                    <a href="/" className={cx('minor', 'quantity-change')} data-value="-1">
                        –
                    </a>
                    <input className={cx('buy-quantity', 'quantity-change')} value="1" size="5" />
                    <a href="/" className={cx('add', 'quantity-change')} data-value="1">
                        +
                    </a>
                </span>
                <a href="/" className={cx('them-vao-gio-nao')}>
                    <FontAwesomeIcon icon={faCartPlus} /> <span>Thêm vào giỏ hàng</span>
                </a>

                <a className={cx('like-product')} href="/" title="Thích sản phẩm này">
                    <FontAwesomeIcon className={cx('like-product-icon')} icon={faHeart} />
                </a>
            </div>
            <div className={cx('btn-buy')}>
                <div className={cx('top-buttons-th1')}>
                    <a className={cx('btn-buy-top')} href="/">
                        <span>Đặt mua ngay</span> Giao hàng tận nơi nhanh chóng
                    </a>
                </div>
                <div className={cx('bottom-buttons-th1')}>
                    <a className={cx('btn-buy-bottom')} href="/">
                        <span>TRẢ GÓP QUA THẺ VISA, MASTER,...</span>
                        Chỉ từ 1.583.250₫/ tháng (12 tháng)
                    </a>
                    <a className={cx('btn-buy-bottom')} href="/">
                        <span>TRẢ GÓP HỒ SƠ DUYỆT 15 PHÚT</span>
                        Chỉ từ 3.166.500₫/ tháng (6 tháng)
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductImgRight;
