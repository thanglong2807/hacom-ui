import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ProductDetailsStatic.module.scss';
const cx = classNames.bind(styles);
function ProductDetailsStatic() {
    return (
        <div className={cx('product-detail-static-content')}>
            <div className={cx('static-item')}>
                <div className={cx('title-gradient')}>
                    Có
                    <b>15</b>
                    cửa hàng có sẵn sản phẩm này
                </div>

                <div className={cx('static-nd')}>
                    <div className={cx('store-list-group-2022')}>
                        <div className={cx('store-province')}>
                            <select>
                                <option value="0">Tỉnh/Thành</option>
                                <option value="5">Hải Phòng</option>
                                <option value="1">Hà Nội</option>
                                <option value="2">TP HCM</option>
                                <option value="11">Bắc Ninh</option>
                                <option value="56">Thanh Hóa</option>
                                <option value="10">Bắc Giang</option>
                                <option value="26">Hà Nam</option>
                                <option value="41">Nghệ An</option>
                                <option value="55">Thái Nguyên</option>
                            </select>
                        </div>
                        <div className={cx('store-district')}>
                            <select>
                                <option>Quận/Huyện</option>
                            </select>
                        </div>
                        <div className={cx('store-list')}>
                            <div className={cx('item')} data-erp="Ton101">
                                <a href="/" target="_blank" title="131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 36285551
                                    </span>
                                    • 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton102">
                                <a href="/" target="_blank" title="43 Thái Hà - Đống Đa - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 35380088
                                    </span>
                                    • 43 Thái Hà - Đống Đa - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton103">
                                <a href="/" target="_blank" title="406 Tô Hiệu - Lê Chân - Hải Phòng">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (022) 58830013
                                    </span>
                                    • 406 Tô Hiệu - Lê Chân - Hải Phòng
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton104">
                                <a href="/" target="_blank" title="79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 38610088
                                    </span>
                                    • 79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton105">
                                <a href="/" target="_blank" title="511 Quang Trung - Hà Đông - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 38580088
                                    </span>
                                    • 511 Quang Trung - Hà Đông - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton106">
                                <a href="/" target="_blank" title="520 Cách Mạng Tháng 8 - Quận 3 - TP HCM">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (028) 73000322
                                    </span>
                                    • 520 Cách Mạng Tháng 8 - Quận 3 - TP HCM
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton107">
                                <a href="/" target="_blank" title="398 Nguyễn Văn Cừ - Long Biên - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 73088877
                                    </span>
                                    • 398 Nguyễn Văn Cừ - Long Biên - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton112">
                                <a href="/" target="_blank" title="CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 32030188
                                    </span>
                                    • CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton113">
                                <a href="/" target="_blank" title="77 Cao Lỗ - Đông Anh - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 32001088
                                    </span>
                                    • 77 Cao Lỗ - Đông Anh - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton114">
                                <a href="/" target="_blank" title="57 Trần Phú - Hà Đông - Hà Nội">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (024) 73062868
                                    </span>
                                    • 57 Trần Phú - Hà Đông - Hà Nội
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton116">
                                <a href="/" target="_blank" title="136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (022) 67302868
                                    </span>
                                    • 136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton118">
                                <a href="/" target="_blank" title="126 Lương Ngọc Quyến - Quang Trung - Thái Nguyên">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (020) 87302868
                                    </span>
                                    • 126 Lương Ngọc Quyến - Quang Trung - Thái Nguyên
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton119">
                                <a href="/" target="_blank" title="Số 6 Trần Phú - Điện Biên - Thanh Hóa">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (023) 77308868
                                    </span>
                                    • Số 6 Trần Phú - Điện Biên - Thanh Hóa
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton120">
                                <a href="/" target="_blank" title="500 Nguyễn Thị Thập - Quận 7 - TP. Hồ Chí Minh">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} /> (028) 73069368
                                    </span>
                                    • 500 Nguyễn Thị Thập - Quận 7 - TP. Hồ Chí Minh
                                </a>
                            </div>

                            <div className={cx('item')} data-erp="Ton121">
                                <a href="/">
                                    <span className={cx('red')}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    • Số 2 Thoại Ngọc Hầu - Tân Phú - TP. Hồ Chí Minh
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsStatic;
