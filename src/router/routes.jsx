import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductPage from '../pages/ProductPage';
import RegisterPage from '../pages/RegisterPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

const routes = [
    {
        path: '/home',
        exact: true,
        component: HomePage,
        breadcrumbName: 'Trang chủ',
    },
    {
        path: '/login',
        component: LoginPage,
        breadcrumbName: 'Đăng nhập',
    },
    {
        path: '/register',
        component: RegisterPage,
        breadcrumbName: 'Đăng ký',
    },
    {
        path: '/products',
        component: ProductPage,
        breadcrumbName: 'Sản phẩm',
    },
    {
        path: '/products/:id',
        component: ProductDetailPage,
        breadcrumbName: 'Chi tiết sản phẩm',
    },
    {
        path: '/cart',
        component: ShoppingCartPage,
        breadcrumbName: 'Giỏ hàng',
    },
];

export default routes;
