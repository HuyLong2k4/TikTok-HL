import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                {/*Children là 1 tham số đặc biệt dùng để truyền dữ liệu từ cha vào con */}
            </div>
        </div>
    );
}

export default DefaultLayout;
