import {
  MdOutlineDashboard, MdOutlineShoppingCart,
} from 'react-icons/md';
import { HiOutlineUsers } from "react-icons/hi2";
import { BiGitPullRequest } from 'react-icons/bi';
import { IoNotificationsCircleOutline } from "react-icons/io5";
export interface RouteType {
  name:string;
  icon: any;
  route:string;
  submenu: {
    name:string;
    icon: any;
    route:string;
  }[]
}
export const Routes = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard className="text-xl" />,
    route: '/user/dashboard',
    submenu: [],
  },
  {
    name: 'Courses',
    icon: <HiOutlineUsers className="text-xl" />,
    route: '/user/courses',
    submenu: [],
  },
  {
    name: 'Progress',
    icon: <BiGitPullRequest className="text-xl" />,
    route: '/user/progress',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/user/notify',
    submenu: [],
  },
  {
    name: 'Purchase History',
    icon: <MdOutlineShoppingCart className="text-xl" />,
    route: '/user/payments',
    submenu: [],
  },
]