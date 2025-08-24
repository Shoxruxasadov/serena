'use client';
import Sidebar from "./sidebar";

export default function Loader({ title }) {
    return (
        <main id="admin">
            <Sidebar />
            <div id="content">
                <header id="header"><div id="wrapper">
                    <h1>{title ? title : "Dashboard"}</h1>
                </div></header>
                <section id="loading" className="content">
                    <span className="loader"></span>
                </section>
            </div>
        </main>
    );
}
