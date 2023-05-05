import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
import StarIcon from '@material-ui/icons/Star'
import PeopleIcon from '@material-ui/icons/People'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import SettingsIcon from '@material-ui/icons/Settings'

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link: "/home"
    },
    {
        title:"Favorites",
        icon:<StarIcon/>,
        link: "/favorites"
    },
    {
        title:"People",
        icon:<PeopleIcon/>,
        link: "/people"
    },
    {
        title:"Sales",
        icon:<LoyaltyIcon/>,
        link: "/sales"
    },
    {
        title:"Shop",
        icon:<ShoppingCartIcon/>,
        link:"/shoppingCart"
    },
    {
        title:"Settings",
        icon:<SettingsIcon/>,
        link: "/settings"
    },
    {
        title:"Help",
        icon:<HelpIcon/>,
        link: "/help"
    }
]