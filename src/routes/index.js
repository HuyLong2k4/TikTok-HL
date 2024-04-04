import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload/index.js';

//chứa các Router không phải đăng nhập vẫn xem đc
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

//chứa các Router phải đăng nhập mới xem đc, nếu chưa đn thì lái qua trang login

const privateRoutes = [];

export { publicRoutes, privateRoutes };
