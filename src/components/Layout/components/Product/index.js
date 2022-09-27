import Laptop from './Laptop';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import PCgaming from './PCgaming';
import PCRender from './PCRender';
import LaptopGaming from './LaptopGaming';
import Accessory from './Accessory';
import MiniPc from './MiniPc';
import Gear from './Gear';
import Cooling from './Cooling';
import ComputerScreen from './ComputerScreen';
import axios from 'axios';
const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Laptop />
            <PCgaming />
            {/* <PCRender />
            <LaptopGaming />
            <Accessory />
            <MiniPc />
            <Gear />
            <Cooling />
            <ComputerScreen /> */}
        </div>
    );
}

export default Product;
