
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx =  classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                  <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return ( 
        <div>
            <Tippy
                
                interactive
                delay={[800, 0]}
                placement='bottom'
                render={renderPreview}
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img 
                    className={cx('avatar')}
                    src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0d91a42b39f742501e7a9dafce72d480.jpeg?lk3s=a5d48078&x-expires=1713672000&x-signature=Buk%2F9kLiRF%2FCyAkHDhrA%2F6PppEo%3D' 
                    alt=''
                    />
        
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenquocphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Nguyen Quoc Phu</p>
                        
                    </div>
        
                </div>
            </Tippy>
        </div>
     )
}

export default AccountItem;