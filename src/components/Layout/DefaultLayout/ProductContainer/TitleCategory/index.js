import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import styles from './TitleCategory.module.scss';
const cx = classNames.bind(styles);
function TitleCategory() {
    return (
        <div className={cx('__container-items-category')}>
            <span className={cx('title')}>Lọc sản phẩm</span>
            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Danh mục </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li className={cx('list-brand-check-li')}>
                            <Link to="/" className="bold" href="/laptop">
                                Laptop, Máy Tính Xách Tay
                            </Link>
                        </li>

                        <li className={cx('list-brand-check-li')}>
                            <Link to="/" className="bold" href="/dien-thoai-may-tinh-bang">
                                Điện Thoại, Máy Tính Bảng
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Hãng sản xuất </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li className={cx('half-li')}>
                            <label>
                                <span title="ACER" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=acer"
                                            title="ACER"
                                        >
                                            ACER
                                        </Link>
                                        <span className={cx('sl-sp')}>(61)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="APPLE" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=apple"
                                            title="APPLE"
                                        >
                                            APPLE
                                        </Link>
                                        <span className={cx('sl-sp')}>(209)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="ASUS" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=asus"
                                            title="ASUS"
                                        >
                                            ASUS
                                        </Link>
                                        <span className={cx('sl-sp')}>(88)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=avita"
                                        >
                                            AVITA
                                        </Link>
                                        <span className={cx('sl-sp')}>(10)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=conceptd"
                                        >
                                            CONCEPTD
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=dell"
                                        >
                                            DELL
                                        </Link>
                                        <span className={cx('sl-sp')}>(146)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=fujitsu"
                                        >
                                            FUJITSU
                                        </Link>
                                        <span className={cx('sl-sp')}>(6)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="GIGABYTE" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=gigabyte"
                                            title="GIGABYTE"
                                        >
                                            GIGABYTE
                                        </Link>
                                        <span className={cx('sl-sp')}>(18)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="HÃNG KHÁC" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=hangkhac"
                                            title="HÃNG KHÁC"
                                        >
                                            HÃNG KHÁC
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="HP" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=hp"
                                            title="HP"
                                        >
                                            HP
                                        </Link>
                                        <span className={cx('sl-sp')}>(97)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="LENOVO" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=lenovo"
                                            title="LENOVO"
                                        >
                                            LENOVO
                                        </Link>
                                        <span className={cx('sl-sp')}>(102)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="LG" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=lg"
                                            title="LG"
                                        >
                                            LG
                                        </Link>
                                        <span className={cx('sl-sp')}>(24)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="MICROSOFT" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=microsoft"
                                            title="MICROSOFT"
                                        >
                                            MICROSOFT
                                        </Link>
                                        <span className={cx('sl-sp')}>(65)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="MSI" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=msi"
                                            title="MSI"
                                        >
                                            MSI
                                        </Link>
                                        <span className={cx('sl-sp')}>(73)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="SAMSUNG" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=samsung"
                                            title="SAMSUNG"
                                        >
                                            SAMSUNG
                                        </Link>
                                        <span className={cx('sl-sp')}>(17)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li className={cx('half-li')}>
                            <label>
                                <span title="VGS" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?brand=vgs"
                                            title="VGS"
                                        >
                                            VGS
                                        </Link>
                                        <span className={cx('sl-sp')}>(12)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Nhu Cầu Sử Dụng </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Laptop Gaming" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?phan-loai-laptop=laptop-gaming"
                                            title="Laptop Gaming"
                                        >
                                            Laptop Gaming
                                        </Link>
                                        <span className={cx('sl-sp')}>(176)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Đồ Họa, Kiến Trúc" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?phan-loai-laptop=do-hoa-kien-truc-1"
                                            title="Đồ Họa, Kiến Trúc"
                                        >
                                            Đồ Họa, Kiến Trúc
                                        </Link>
                                        <span className={cx('sl-sp')}>(82)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Phổ Thông, Văn Phòng" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?phan-loai-laptop=pho-thong-van-phong-1"
                                            title="Phổ Thông, Văn Phòng"
                                        >
                                            Phổ Thông, Văn Phòng
                                        </Link>
                                        <span className={cx('sl-sp')}>(341)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Mỏng Nhẹ, Thời Trang" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?phan-loai-laptop=mong-nhe-thoi-trang"
                                            title="Mỏng Nhẹ, Thời Trang"
                                        >
                                            Mỏng Nhẹ, Thời Trang
                                        </Link>
                                        <span className={cx('sl-sp')}>(220)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Doanh nhân" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?phan-loai-laptop=doanh-nhan"
                                            title="Doanh nhân"
                                        >
                                            Doanh nhân
                                        </Link>
                                        <span className={cx('sl-sp')}>(192)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> CPU </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Intel Celeron/Pentium" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-celeronpentium"
                                            title="Intel Celeron/Pentium"
                                        >
                                            Intel Celeron/Pentium
                                        </Link>
                                        <span className={cx('sl-sp')}>(10)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Intel Core i3" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-core-i3-1-1-1-1"
                                            title="Intel Core i3"
                                        >
                                            Intel Core i3
                                        </Link>
                                        <span className={cx('sl-sp')}>(60)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Intel Core i5" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-core-i5-1-1-1-1"
                                            title="Intel Core i5"
                                        >
                                            Intel Core i5
                                        </Link>
                                        <span className={cx('sl-sp')}>(277)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Intel Core i7" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-core-i7-1-1-1-1"
                                            title="Intel Core i7"
                                        >
                                            Intel Core i7
                                        </Link>
                                        <span className={cx('sl-sp')}>(189)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Intel Core i9" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-core-i9-1-1-1"
                                            title="Intel Core i9"
                                        >
                                            Intel Core i9
                                        </Link>
                                        <span className={cx('sl-sp')}>(17)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Intel Xeon" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=intel-xeon"
                                            title="Intel Xeon"
                                        >
                                            Intel Xeon
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="AMD Ryzen 3" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=amd-ryzen-3-1-1-1"
                                            title="AMD Ryzen 3"
                                        >
                                            AMD Ryzen 3
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="AMD Ryzen Athlon" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=amd-ryzen-athlon-1-1-1"
                                            title="AMD Ryzen Athlon"
                                        >
                                            AMD Ryzen Athlon
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="AMD Ryzen 5" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=amd-ryzen-5-1-1-1"
                                            title="AMD Ryzen 5"
                                        >
                                            AMD Ryzen 5
                                        </Link>
                                        <span className={cx('sl-sp')}>(61)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="AMD Ryzen 7" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=amd-ryzen-7-1-1-1"
                                            title="AMD Ryzen 7"
                                        >
                                            AMD Ryzen 7
                                        </Link>
                                        <span className={cx('sl-sp')}>(51)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="AMD Ryzen 9" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=amd-ryzen-9-1-1"
                                            title="AMD Ryzen 9"
                                        >
                                            AMD Ryzen 9
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Microsoft SQ2" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=microsoft-sq2"
                                            title="Microsoft SQ2"
                                        >
                                            Microsoft SQ2
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Apple M1" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=apple-m1"
                                            title="Apple M1"
                                        >
                                            Apple M1
                                        </Link>
                                        <span className={cx('sl-sp')}>(28)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Apple M2" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cpu-laptop=apple-m2"
                                            title="Apple M2"
                                        >
                                            Apple M2
                                        </Link>
                                        <span className={cx('sl-sp')}>(12)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> RAM </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="4GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=4gb-1-1-1"
                                            title="4GB"
                                        >
                                            4GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(63)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="8GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=8gb-1-1-1-1"
                                            title="8GB"
                                        >
                                            8GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(383)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="16GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=16gb-1-1-1-1-1"
                                            title="16GB"
                                        >
                                            16GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(225)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="12GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=12gb"
                                            title="12GB"
                                        >
                                            12GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="32GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=32gb"
                                            title="32GB"
                                        >
                                            32GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(37)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="64GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=64gb"
                                            title="64GB"
                                        >
                                            64GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(6)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title=">32GB" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ram-laptop=32gb"
                                            title=">32GB"
                                        >
                                            &gt;32GB
                                        </Link>
                                        <span className={cx('sl-sp')}>(2)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Ổ Cứng </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Chỉ có SSD" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?o-cung-laptop=chi-co-ssd"
                                            title="Chỉ có SSD"
                                        >
                                            Chỉ có SSD
                                        </Link>
                                        <span className={cx('sl-sp')}>(715)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Chỉ có HDD" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?o-cung-laptop=chi-co-hdd"
                                            title="Chỉ có HDD"
                                        >
                                            Chỉ có HDD
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="SSD + HDD" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?o-cung-laptop=ssd-hdd"
                                            title="SSD + HDD"
                                        >
                                            SSD + HDD
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> VGA - Card Màn Hình </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="VGA NVIDIA" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?vga-laptop=vga-nvidia"
                                            title="VGA NVIDIA"
                                        >
                                            VGA NVIDIA
                                        </Link>
                                        <span className={cx('sl-sp')}>(255)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="VGA AMD" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?vga-laptop=vga-amd"
                                            title="VGA AMD"
                                        >
                                            VGA AMD
                                        </Link>
                                        <span className={cx('sl-sp')}>(9)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="VGA Onboard" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?vga-laptop=vga-onboard"
                                            title="VGA Onboard"
                                        >
                                            VGA Onboard
                                        </Link>
                                        <span className={cx('sl-sp')}>(443)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Kích Thước Màn Hình </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="11.6 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=116-inch"
                                            title="11.6 inch"
                                        >
                                            11.6 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="12.3 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=123-inch"
                                            title="12.3 inch"
                                        >
                                            12.3 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(21)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="12.4 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=124-inch"
                                            title="12.4 inch"
                                        >
                                            12.4 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="12.5 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=125-inch"
                                            title="12.5 inch"
                                        >
                                            12.5 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="13.3 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=133-inch"
                                            title="13.3 inch"
                                        >
                                            13.3 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(62)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="13.5 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=135-inch"
                                            title="13.5 inch"
                                        >
                                            13.5 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(14)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="13 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=13-inch"
                                            title="13 inch"
                                        >
                                            13 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(22)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="14.5 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=145-inch"
                                            title="14.5 inch"
                                        >
                                            14.5 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(2)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="13.6 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=136-inch"
                                            title="13.6 inch"
                                        >
                                            13.6 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="13.4 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=134-inch"
                                            title="13.4 inch"
                                        >
                                            13.4 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(7)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="14 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=14-inch"
                                            title="14 inch"
                                        >
                                            14 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(208)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="15 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=15-inch"
                                            title="15 inch"
                                        >
                                            15 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(4)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="15.6 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=156-inch"
                                            title="15.6 inch"
                                        >
                                            15.6 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(281)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="16 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=16-inch"
                                            title="16 inch"
                                        >
                                            16 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(53)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="17.3 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=173-inch"
                                            title="17.3 inch"
                                        >
                                            17.3 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(17)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="17 inch" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=17-inch"
                                            title="17 inch"
                                        >
                                            17 inch
                                        </Link>
                                        <span className={cx('sl-sp')}>(10)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Kích thước khác" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?kich-thuoc-man-hinh-=kich-thuoc-khac"
                                            title="Kích thước khác"
                                        >
                                            Kích thước khác
                                        </Link>
                                        <span className={cx('sl-sp')}>(5)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Độ Phân Giải Màn Hình </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="HD (1366x768)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=hd-1366x768"
                                            title="HD (1366x768)"
                                        >
                                            HD (1366x768)
                                        </Link>
                                        <span className={cx('sl-sp')}>(29)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Full HD (1920x1080)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=full-hd-1920x1080"
                                            title="Full HD (1920x1080)"
                                        >
                                            Full HD (1920x1080)
                                        </Link>
                                        <span className={cx('sl-sp')}>(457)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="WUXGA (1920 x 1200)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=wuxga-1920-x-1200"
                                            title="WUXGA (1920 x 1200)"
                                        >
                                            WUXGA (1920 x 1200)
                                        </Link>
                                        <span className={cx('sl-sp')}>(26)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="QHD (2560x1440)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=qhd-2560x1440"
                                            title="QHD (2560x1440)"
                                        >
                                            QHD (2560x1440)
                                        </Link>
                                        <span className={cx('sl-sp')}>(32)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="WQXGA (2560x1600)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=wqxga-2560x1600"
                                            title="WQXGA (2560x1600)"
                                        >
                                            WQXGA (2560x1600)
                                        </Link>
                                        <span className={cx('sl-sp')}>(44)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Pixel Sense (2256 x 1504)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=pixel-sense-2256-x-1504"
                                            title="Pixel Sense (2256 x 1504)"
                                        >
                                            Pixel Sense (2256 x 1504)
                                        </Link>
                                        <span className={cx('sl-sp')}>(10)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Pixel Sense (2736 x 1824)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=pixel-sense-2736-x-1824"
                                            title="Pixel Sense (2736 x 1824)"
                                        >
                                            Pixel Sense (2736 x 1824)
                                        </Link>
                                        <span className={cx('sl-sp')}>(18)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Pixel Sense Display (2880x1920)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=pixel-sense-display-2880x1920"
                                            title="Pixel Sense Display (2880x1920)"
                                        >
                                            Pixel Sense Display (2880x1920)
                                        </Link>
                                        <span className={cx('sl-sp')}>(24)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="2.8K (2880x1800)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=28k-2880x1800"
                                            title="2.8K (2880x1800)"
                                        >
                                            2.8K (2880x1800)
                                        </Link>
                                        <span className={cx('sl-sp')}>(19)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Retina (2560x1600)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=retina-2560x1600"
                                            title="Retina (2560x1600)"
                                        >
                                            Retina (2560x1600)
                                        </Link>
                                        <span className={cx('sl-sp')}>(32)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Retina (2880x1800)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=retina-2880x1800"
                                            title="Retina (2880x1800)"
                                        >
                                            Retina (2880x1800)
                                        </Link>
                                        <span className={cx('sl-sp')}>(5)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Retina (2560 x 1664)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=retina-2560-x-1664"
                                            title="Retina (2560 x 1664)"
                                        >
                                            Retina (2560 x 1664)
                                        </Link>
                                        <span className={cx('sl-sp')}>(3)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="4K (3840x2160)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=4k-3840x2160"
                                            title="4K (3840x2160)"
                                        >
                                            4K (3840x2160)
                                        </Link>
                                        <span className={cx('sl-sp')}>(12)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Độ phân giải khác" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=do-phan-giai-khac"
                                            title="Độ phân giải khác"
                                        >
                                            Độ phân giải khác
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Surface laptop go (1536×1024)" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?do-phan-giai-man-hin=surface-laptop-go-15361024"
                                            title="Surface laptop go (1536×1024)"
                                        >
                                            Surface laptop go (1536×1024)
                                        </Link>
                                        <span className={cx('sl-sp')}>(6)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Cảm Ứng Màn Hình </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Có cảm ứng" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cam-ung-laptop=co-cam-ung"
                                            title="Có cảm ứng"
                                        >
                                            Có cảm ứng
                                        </Link>
                                        <span className={cx('sl-sp')}>(92)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Không có" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?cam-ung-laptop=khong-co-1-1"
                                            title="Không có"
                                        >
                                            Không có
                                        </Link>
                                        <span className={cx('sl-sp')}>(614)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Tần Số Màn Hình </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="60 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=60-hz"
                                            title="60 Hz"
                                        >
                                            60 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(559)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="90 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=90-hz"
                                            title="90 Hz"
                                        >
                                            90 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(8)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="120 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=120-hz"
                                            title="120 Hz"
                                        >
                                            120 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(33)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="144 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=144-hz"
                                            title="144 Hz"
                                        >
                                            144 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(59)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="165 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=165-hz"
                                            title="165 Hz"
                                        >
                                            165 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(32)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="240 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=240-hz"
                                            title="240 Hz"
                                        >
                                            240 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(23)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="300 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=300-hz"
                                            title="300 Hz"
                                        >
                                            300 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(2)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="360 Hz" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?tan-so-man-hinh-lapt=360-hz"
                                            title="360 Hz"
                                        >
                                            360 Hz
                                        </Link>
                                        <span className={cx('sl-sp')}>(2)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Hệ Điều hành </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Windows" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?he-dieu-hanh-laptop=windows"
                                            title="Windows"
                                        >
                                            Windows
                                        </Link>
                                        <span className={cx('sl-sp')}>(586)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Linux" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?he-dieu-hanh-laptop=linux-1-1"
                                            title="Linux"
                                        >
                                            Linux
                                        </Link>
                                        <span className={cx('sl-sp')}>(19)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Dos" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?he-dieu-hanh-laptop=dos-1-1"
                                            title="Dos"
                                        >
                                            Dos
                                        </Link>
                                        <span className={cx('sl-sp')}>(73)</span>
                                    </span>
                                </span>
                            </label>
                        </li>

                        <li>
                            <label>
                                <span title="Mac OS" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?he-dieu-hanh-laptop=mac-os"
                                            title="Mac OS"
                                        >
                                            Mac OS
                                        </Link>
                                        <span className={cx('sl-sp')}>(39)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('p-filter-item')}>
                <span className={cx('title-items')}> Chương Trình Trả Góp HD SAISON </span>
                <div className={cx('p-filter-list-value')}>
                    <ul className={cx('list-brand-check')}>
                        <li>
                            <label>
                                <span title="Có" className={cx('brand-checker-link')}>
                                    <span className={cx('ahihi')}>
                                        <Link
                                            to="/"
                                            className={cx('filter-link')}
                                            href="https://hacom.vn/laptop-tablet-mobile?ct-saison=co"
                                            title="Có"
                                        >
                                            Có
                                        </Link>
                                        <span className={cx('sl-sp')}>(1)</span>
                                    </span>
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TitleCategory;
