import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserIcon, LiveIcon, UserIconActive, LiveIconActive, HomeIconActive } from '~/components/icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserIcon />} activeIcon={<UserIconActive />}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />}/>
            </Menu> 

           <SuggestedAccounts label="Suggested accounts"/>
           <SuggestedAccounts label="Following accounts"/>
        </aside>
    );
}

export default Sidebar;
