'use client';

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; // Used for individual options within the Select
import { Switch } from "@mui/material";
import { useState } from "react";
import api from "@/library/axios";


export default function AdminUserList({ user, refetch }) {
    const { t, i18n } = useTranslation();

    const [langUser, setLangUser] = useState(user.lang || "uz");
    const [active, setActive] = useState(user.isActive || false);
    const [threeDay, setThreeDay] = useState(user.threeDaysAgo || false);
    const [twoDay, setTwoDay] = useState(user.twoDaysAgo || false);
    const [oneDay, setOneDay] = useState(user.theDayBefore || false);

    const handleSave = async () => api.put(`/api/v1/bot/user-update/${user.chatId}`, {
        "isActive": active,
    }).then(({ data }) => {
        toast.success(data.result, { autoClose: 2000 });
        refetch();
    }).catch(error => { throw error });

    return (
        <ul className="list" key={user.id}>
            <li>
                <p>{user.id}</p>
            </li>
            {/* <li>
                <p>{user.step}</p>
            </li> */}
            <li>
                <p>{user.chatId}</p>
            </li>
            <li>
                {/* <Select
                    defaultValue={langUser}
                    value={langUser}
                    style={{ height: "36px", fontSize: "14px", backgroundColor: "#fff", borderRadius: "4px" }}
                    onChange={(event) => setLangUser(event.target.value)}
                >
                    <MenuItem value="uz">uz</MenuItem>
                    <MenuItem value="ru">ru</MenuItem>
                </Select> */}

                <p>{langUser}</p>
            </li>
            <li>
                <Switch
                    checked={active}
                    onChange={(event) => setActive(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <Switch
                    checked={threeDay}
                    // onChange={(event) => setThreeDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <Switch
                    checked={twoDay}
                    // onChange={(event) => setTwoDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <Switch
                    checked={oneDay}
                    // onChange={(event) => setOneDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <p>{user.countTaxInfo}</p>
            </li>
            <li>
                <button onClick={() => handleSave()}>{t("admin.save")}</button>
            </li>
        </ul>
    );
}
