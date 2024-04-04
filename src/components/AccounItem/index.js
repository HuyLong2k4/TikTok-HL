import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/abd95ae25a622e8cb244f24cdefce94f.jpeg?lk3s=a5d48078&x-expires=1712278800&x-signature=TQCpRqK1Lpdjd4u9ejB%2BbujYVjI%3D"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('userName')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
