import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signln";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import Contact from "../pages/contact";

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    },
];

const routesNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound,
    },
]

const routes = [...routesAdmin,...routesClient,...routesNotFound];
export default routes;