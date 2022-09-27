import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import styles from './ProductFilter.module.scss';

const cx = classNames.bind(styles);
function ProductFilter() {
    return (
        <div className={cx('__container-items-products')}>
            <div className={cx('warehouse')}>
                <div className={cx('warehouse-item')}>
                    <div className={cx('warehouse-item-left')}>
                        <select className={cx('list-sort')}>
                            <option value="">Tình trạng kho hàng</option>

                            <option value="https://hacom.vn/laptop-tablet-mobile?other_filter=in-stock">
                                Còn hàng
                            </option>
                        </select>

                        <select className={cx('list-sort')}>
                            <option value="/laptop-tablet-mobile">Tất cả kho</option>
                            <option value="?storeId=ton101">131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</option>
                            <option value="?storeId=ton102">43 Thái Hà - Đống Đa - Hà Nội</option>
                            <option value="?storeId=ton103">406 Tô Hiệu - Lê Chân - Hải Phòng</option>
                            <option value="?storeId=ton104">79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội</option>
                            <option value="?storeId=ton105">511 Quang Trung - Hà Đông - Hà Nội</option>
                            <option value="?storeId=ton106">520 Cách Mạng Tháng 8 - Quận 3 - TP HCM</option>
                            <option value="?storeId=ton107">398 Nguyễn Văn Cừ - Long Biên - Hà Nội</option>
                            <option value="?storeId=ton110">299 Minh Khai - Từ Sơn - Bắc Ninh</option>
                            <option value="?storeId=ton111">59 Thợ Nhuộm - Hoàn Kiếm - Hà Nội</option>
                            <option value="?storeId=ton112">CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội</option>
                            <option value="?storeId=ton113">77 Cao Lỗ - Đông Anh - Hà Nội</option>
                            <option value="?storeId=ton114">57 Trần Phú - Hà Đông - Hà Nội</option>
                            <option value="?storeId=ton115">135 Hùng Vương - Hoàng Văn Thụ - Bắc Giang</option>
                            <option value="?storeId=ton116">136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam</option>
                            <option value="?storeId=ton117">147 Lê Lợi - Thành Phố Vinh - Nghệ An</option>
                            <option value="?storeId=ton118">126 Lương Ngọc Quyến - Quang Trung - Thái Nguyên</option>
                            <option value="?storeId=ton119">Số 6 Trần Phú - Điện Biên - Thanh Hóa</option>
                            <option value="?storeId=ton120">500 Nguyễn Thị Thập - Quận 7 - TP. Hồ Chí Minh</option>
                            <option value="?storeId=ton121">Số 2 Thoại Ngọc Hầu - Tân Phú - TP. Hồ Chí Minh</option>
                        </select>

                        <div className={cx('horizontal-price-filter')}>
                            Lọc theo giá tiền:
                            <div className={cx('horizontal-price-filter-child')}>
                                <input value="0" />
                                <div className={cx('price-curency')}>₫</div>
                            </div>
                            <div className="horizontal-price-separator"> - </div>
                            <div className={cx('horizontal-price-filter-child')}>
                                <input value="0" />
                                <div className={cx('price-curency')}>₫</div>
                            </div>
                            <span className={cx('button-filter')}>Lọc</span>
                        </div>
                    </div>
                </div>
                <div className={cx('new-warehouse-item')}>
                    <div className="list-n">
                        <Link className={cx('new-sort-zone')} to="/">
                            Hàng Mới
                        </Link>

                        <Link className={cx('new-sort-zone')} to="/">
                            Xem Nhiều
                        </Link>
                        <Link className={cx('new-sort-zone')} to="/">
                            Giá Giảm Nhiều
                        </Link>
                        <Link className={cx('new-sort-zone')} to="/">
                            Giá Tăng Dần
                        </Link>
                        <Link className={cx('new-sort-zone')} to="/">
                            Giá Giảm Dần
                        </Link>
                    </div>

                    <select title="Sắp xếp theo" className={cx('list-sort')}>
                        <option value="0">Lọc sản phẩm</option>

                        <option value="https://hacom.vn/laptop-tablet-mobile?sort=rating">Đánh giá</option>

                        <option value="https://hacom.vn/laptop-tablet-mobile?sort=name">Tên A-&gt;Z</option>
                    </select>

                    <div className={cx('paging', 'new-sort-zone-page')}>
                        <Link to="/" className={cx('current', 'btn-page')}>
                            1
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            2
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            3
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            4
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            5
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            6
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            7
                        </Link>

                        <Link className={cx('btn-page')} to="/">
                            next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductFilter;
