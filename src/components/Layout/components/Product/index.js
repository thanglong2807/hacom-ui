import Laptop from './Laptop';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);
const danhmuc = [
    {
        title: 'LAPTOP, TABLET, MOBILE',
        id: 1,
        describe: ['Laptop, Máy Tính Xách Tay', ' Điện Thoại, Máy Tính Bảng'],
    },
    {
        title: 'PC VĂN PHÒNG, AIO, MINI PC',
        id: 2,
        describe: [
            'Máy Tính Văn Phòng HACOM',
            ' Máy Tính Để Bàn Dell',
            ' Máy Tính Để Bàn HP',
            ' Máy Tính Để Bàn Asus',
            '  Máy Tính Để Bàn Lenovo',
            '  Máy Tính Để Bàn Acer',
        ],
    },

    {
        title: 'PC GAMING, STREAMING',
        id: 3,
        describe: [
            'Máy Tính Chơi Game HACOM',
            ' Máy Tính Live Stream, PC Streamer, Youtuber',
            'Máy Tính Chơi Game Asus',
            ' Máy Tính Chơi Game Lenovo',
            ' Máy Tính Chơi Game MSI',
            'GIGABYTE',
        ],
    },
    {
        title: 'PC ĐỒ HỌA, RENDER, MÁY CHỦ',
        id: 4,
        describe: [
            'PC Đồ Họa',
            'Render HACOM',
            ' Máy Chủ HACOM',
            ' Máy Trạm Hãng',
            ' Máy Chủ Hãng',
            '  Linh Kiện Máy Chủ, Máy Trạm',
        ],
    },
    {
        title: 'LAPTOP GAMING, ĐỒ HỌA',
        id: 5,
        describe: [],
    },
];
function Product() {
    return (
        <div className={cx('wrapper')}>
            {danhmuc.map((result) => (
                <Laptop key={result.id} data={result} />
            ))}
        </div>
    );
}

export default Product;
