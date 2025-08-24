"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { useEffect, useMemo } from "react";
import classNames from "classnames";
// import { useSidebar, useUser } from "@/store/zustand";
import Cookies from "js-cookie";
import { useSidebar } from "../../../store/zustand";
import { useTranslation } from "react-i18next";

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';

import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

export default function Sidebar() {
    const getCookie = (name) => {
        if (typeof document === "undefined") return null;
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? match[2] : null;
    };
    const username = getCookie("username");

    const { position, setPosition, opacity, setOpacity, positionLng, setPositionLng } = useSidebar();
    // const { user } = useUser();
    const pathname = usePathname()
    const { t, i18n } = useTranslation();
    const languages = ["uz", "ru"]

    const links = [
        {
            link: "/admin",
            name: t("admin.sidebar.dashboard"),
            icon: <GroupsOutlinedIcon />,
            active: <GroupsRoundedIcon />
        },
        {
            link: "/admin/users",
            name: t("admin.sidebar.users"),
            icon: <PeopleAltOutlinedIcon />,
            active: <PeopleAltRoundedIcon />
        },
        {
            link: "/admin/tax",
            name: t("admin.sidebar.tax"),
            icon: <ReceiptOutlinedIcon />,
            active: <ReceiptRoundedIcon />
        },
        {
            link: "/admin/taxdata",
            name: t("admin.sidebar.taxdata"),
            icon: <ReceiptLongOutlinedIcon />,
            active: <ReceiptLongRoundedIcon />
        },
        {
            link: "/admin/services",
            name: t("admin.sidebar.services"),
            icon: <BusinessCenterOutlinedIcon />,
            active: <BusinessCenterRoundedIcon />
        },
    ];

    const handleLanguage = (locale) => {
        i18n.changeLanguage(locale);
        Cookies.set("language", locale, { expires: 365 });
    }

    const getLanguageName = (lng) => {
        if (lng === "ru") return "ру"
        return lng
    }

    useEffect(() => {
        const index = links.findIndex((item) => item.link === pathname);
        if (index !== -1) setPosition(index * 48);
        setOpacity(index !== -1 ? 1 : 0);
    }, [pathname]);

    useEffect(() => {
        const index = languages.findIndex((item) => item === i18n.language);
        if (index !== -1) setPositionLng((index * 110) + (index * 4) + 4);
    }, [i18n.language]);

    return <nav id="sidenav">
        <div id="wrapper">
            <Link href="/admin" className="logo">
                <Image src='/logo.png' width={256} height={256} alt="MovieGo Logo" />
                <h1>ASCO</h1>
            </Link>
            <ul>
                {links.map((section, i) => (
                    <li key={i}><Link href={section.link} className={classNames({ active: pathname == section.link })}>
                        <div className="icon">{pathname == section.link ? section.active : section.icon}</div>
                        <span>{section.name}</span>
                    </Link></li>
                ))}
                <motion.li initial={{ top: position, opacity: opacity }} animate={{ top: position, opacity: opacity }} className="interactive" />
            </ul>
        </div>
        <div id="account">
            <ul className="language">
                {languages.map((lng, i) => (
                    <li key={i} className={classNames("lng", { active: i18n.language == lng })} onClick={() => handleLanguage(lng)}>
                        <span>{getLanguageName(lng)}</span>
                    </li>
                ))}
                <motion.li initial={{ left: positionLng }} animate={{ left: positionLng }} className="interactive" />
            </ul>
            <Link href="/" className="back" onClick={() => {
                Cookies.remove("token");
                Cookies.remove("username");
            }}>
                {/* <Image src={user ? user.image : '/user.webp'} width={256} height={256} alt="avatar" />
                <div className="name">
                    <h3>{user && user.name}</h3>
                    <p>{user && user.email}</p>
                </div> */}

                <Image src={'/user.webp'} width={256} height={256} alt="avatar" />
                <div className="name">
                    <h3>{username}</h3>
                    {/* <p>example@domain.com</p> */}
                </div>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </Link>
        </div>
    </nav>
}
