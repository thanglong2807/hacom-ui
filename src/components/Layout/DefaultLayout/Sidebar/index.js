/* eslint-disable jsx-a11y/alt-text */

import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';
import ImgAds from './ImgAds';
import { useEffect, useState } from 'react';
import request from '~/utils/request';
const cx = classNames.bind(styles);
function Sidebar() {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await request.get(`producttype/`);

                setProductItem(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getProduct();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <SidebarItem data={productItem} />
            <ImgAds />
        </div>
    );
}

export default Sidebar;
