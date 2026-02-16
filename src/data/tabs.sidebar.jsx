import {
    FaBook,
    FaComments,
    FaEnvelope,
    FaFile,
    FaHome,
    FaInfoCircle
} from "react-icons/fa";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    };
}

export const tabs = [
    {
        label: "صفحه اصلی",
        icon: <FaHome size={18} />,
        ...tabProps(0)
    },
    {
        label: "درباره من",
        icon: <FaInfoCircle size={18} />,
        ...tabProps(1)
    },
    {
        label: "رزومه من",
        icon: <FaFile size={18} />,
        ...tabProps(2)
    },
    {
        label: "نمونه کارها",
        icon: <FaBook size={18} />,
        ...tabProps(3)
    },
    {
        label: "نظرات کارفرمایان",
        icon: <FaComments size={18} />,
        ...tabProps(4)
    },
    {
        label: "ارتباط با من",
        icon: <FaEnvelope size={18} />,
        ...tabProps(5)
    },
];