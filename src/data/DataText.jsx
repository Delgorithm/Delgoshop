import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5"


// Header
export const headerText = [
    {
        id: 1,
        title: "DelgoShop"
    }
];

// Hero

export const heroText = [
    {
        id: 1,
        title: "Nouveautés",
        subtitle: "Voir les arrivées",
    },
    {
        id: 2,
        title: "dfoijaa",
    },
];

// Page product : Jacket 
export const jacketPage = [
    {
        id: 1,
        title: "Vestes",
        subtitle: "Nos vestes tendances alliant confort et style tout en restant élégant"
    },
    {
        id: 2,
        title: "Doudoune légère",
        price: 39.9,
    },
    {
        id: 3,
        title: "Veste classique",
        price: 69.90,
    }
]

// Page single product : Jacket 
export const jacketProductPage = [
    {
        id: 1,
        title: "Veste style surchemise",
        price: "69,90 €",
        oldprice: "129,90 €",
        review: "4.5 (15)",
        color: "Couleur: ",
        size: "Taille: ",
        quantiy: "Quantité : ",
    }
]
// Page single product : Doudoune 

// Footer
export const footerText = [
    {
        id: 1,
        icon: <AiOutlineHome />,
        title: "Accueil",
    },
    {
        id: 2,
        icon: <BsBookmark />,
        title: "Favoris",
    },
    {
        id: 3,
        icon: <IoNotificationsOutline />,
        title: "Notifications",
    },
    {
        id: 4,
        icon: <IoPersonOutline />,
        title: "Me",
    },
];

