import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { IoRestaurantSharp } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 3,
        name: "soups",
        icon: <LuSoup className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 5,
        name: "main_course",
        icon: <IoRestaurantSharp className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id: 7,
        name: "burger",
        icon: <PiHamburgerFill className="w-[60px] h-[60px] text-orange-600" />
    },
]

export default Categories