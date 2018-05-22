import Dashboard from 'views/Dashboard/Dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import DashboardBGC from 'components/Dashboard';
// import Reports from 'components/Reports';


const dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/BGC',
    name: 'BGC',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/database-status',
    name: 'Database',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/reports',
    name: 'Reports',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/batch-upload',
    name: 'Btch Upload',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/account-settings',
    name: 'Settings',
    icon: DashboardIcon,
    component: Dashboard,
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
