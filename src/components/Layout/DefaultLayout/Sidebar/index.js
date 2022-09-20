/* eslint-disable jsx-a11y/alt-text */

import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';
import ImgAds from './ImgAds';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <SidebarItem />
            <ImgAds />
        </div>
    );
}

export default Sidebar;
