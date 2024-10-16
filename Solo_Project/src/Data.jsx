import { IoCheckmarkCircle, IoWarning, IoCloudUploadOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";

export const colorArray = ["Gray", "Red", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"]

export const bannerArray = [
    {
        icon: <IoCheckmarkCircle />,
        status: "Success",
        title: "Congratulations!",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    },
    {
        icon: <IoWarning />,
        status: "Warning",
        title: "Attention",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    },
    {
        icon: <MdCancel />,
        status: "Error",
        title: "There is a problem with your application",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    },
    {
        icon: <FaExclamationCircle />,
        status: "Neutral",
        title: "Update available",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    }]

export const cardArray = [
    {
        iconCard: <IoCloudUploadOutline />,
        cardTitle: "Easy Deployment",
        cardText: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.Et magna sit morbi lobortis."
    }
]