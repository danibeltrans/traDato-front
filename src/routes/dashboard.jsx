import Dashboard from 'views/Dashboard/Dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardBGC from 'components/DashboardBGC';
import Reports from 'components/Reports';


const dashRoutes = [
  {
    path: '/admin/BGC',
    name: 'BGC',
    icon: DashboardIcon,
    component: DashboardBGC,
  }, {
    path: '/admin/database-status',
    name: 'Database',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/reports',
    name: 'Reports',
    icon: DashboardIcon,
    component: Reports,
  }, {
    path: '/admin/batch-upload',
    name: 'Batch Upload',
    icon: DashboardIcon,
    component: Dashboard,
  }, {
    path: '/admin/account-settings',
    name: 'Settings',
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard',
  },
];
export default dashRoutes;
