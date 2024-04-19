// layout
import { HeaderOnly } from '~/layouts';
// pagesS
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload/index.js';
import Search from '~/pages/Search';
import Live from '~/pages/Live';


import config from '~/config';
//chứa các Router không phải đăng nhập vẫn xem đc
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

//chứa các Router phải đăng nhập mới xem đc, nếu chưa đn thì lái qua trang login

const privateRoutes = [];

export { publicRoutes, privateRoutes };
