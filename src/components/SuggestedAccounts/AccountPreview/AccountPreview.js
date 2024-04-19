import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')} >
                <img className={cx('avatar')} 
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0d91a42b39f742501e7a9dafce72d480.jpeg?lk3s=a5d48078&x-expires=1713672000&x-signature=Buk%2F9kLiRF%2FCyAkHDhrA%2F6PppEo%3D" 
                alt="Long" />
                <Button primary className={cx('btn-tippy')}>Follow </Button>
            </div>

            <div className={cx('body')}>
                 <p className={cx('nickname')}>
                            <strong>nguyenquocphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Nguyen Quoc Phu</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Followers </span>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Like </span>
                        </p>
            </div>
        </div>
     );
}

export default AccountPreview;