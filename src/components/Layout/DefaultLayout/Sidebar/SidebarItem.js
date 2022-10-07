import {
    faCamera,
    faCompactDisc,
    faDesktop,
    faGamepad,
    faGraduationCap,
    faHeadphones,
    faHouse,
    faLaptop,
    faLaptopCode,
    faMicrochip,
    faPrint,
    faServer,
    faTemperature1,
    faVolumeHigh,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import MenuContainer from './Menu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SibarItem() {
    return (
        <div className={cx('sidebar-menus')}>
            <ul className={cx('items-ul')}>
                <Tippy
                    interactive={true}
                    placement="right-start"
                    render={(attrs) => <MenuContainer className={cx('menu-sidebar')} tabIndex="-1" {...attrs} />}
                >
                    <li className={cx('items-li')}>
                        <Link to="/product/loaisp/2/laptop">
                            <FontAwesomeIcon icon={faLaptop} />
                            <span>Laptop, Tablet, Mobile</span>
                        </Link>
                    </li>
                </Tippy>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faLaptop} />
                        <span>Phụ Kiện Laptop, PC, Mobile</span>
                    </Link>
                </li>

                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <span>PC Gaming, Streaming</span>
                    </Link>
                </li>

                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faServer} />
                        <span>PC Đồ Họa, Render, Máy Chủ</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faDesktop} />
                        <span>PC Văn Phòng, AIO, Mini PC</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faMicrochip} />
                        <span>Linh Kiện Máy Tính</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faTemperature1} />
                        <span>Tản Nhiệt PC, Cooling</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faLaptop} />
                        <span>Màn Hình Máy Tính</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faGamepad} />
                        <span>Phím Chuột, Ghế Game, Gear</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <span>Máy Chơi Game, Tay Game</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faHeadphones} />
                        <span>Loa, Tai Nghe, Mic, Webcam</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faCamera} />
                        <span>Camera Quan Sát</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faPrint} />
                        <span>Máy In, Máy Chấm Công</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faPrint} />
                        <span>Thiết Bị Văn Phòng Khác</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>TB Siêu Thị, Máy Bán Hàng</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>Họp, Giảng Dạy, Stream</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faCompactDisc} />
                        <span>Thiết Bị Lưu Trữ, USB, Thẻ</span>
                    </Link>
                </li>
                <li className={cx('items-li')}>
                    <Link to="/hacom-ui">
                        <FontAwesomeIcon icon={faWifi} />
                        <span>Thiết Bị Mạng, Phần Mềm</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SibarItem;
