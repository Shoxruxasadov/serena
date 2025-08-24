'use client';
import { useQuery } from "@tanstack/react-query";
import Login from "./login";
import Sidebar from "./sidebar";
import { useEffect } from "react";
import api from "@/library/axios";
import Loader from "./loader";

export default function AdminContainer({ children, title }) {
    const getCookie = (name) => {
        if (typeof document === "undefined") return true;
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? match[2] : null;
    };
    const token = getCookie("token");

    const { data, isSuccess, isLoading, isFetching, refetch, isFetched } = useQuery({
        queryKey: ["checkToken"],
        queryFn: async () => api.get(`/api/v1/checkToken`).then(({ data }) => data),
        enabled: !!token,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 1,
    })

    if (!token) return <Login />
    if (isFetching) return <Loader title={title} />
    if (!data) return <Login />
    return (
        <main id="admin">
            <Sidebar />
            <div id="content">
                <header id="header"><div id="wrapper">
                    <h1>{title ? title : "Dashboard"}</h1>
                </div></header>
                {children}
            </div>
        </main>
    );
}
