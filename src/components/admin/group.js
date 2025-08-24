'use client';

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; // Used for individual options within the Select
import { Switch } from "@mui/material";
import { useState } from "react";
import api from "@/library/axios";


export default function AdminGroupList({ group, refetch }) {
    const { t, i18n } = useTranslation();

    const [langGroup, setLangGroup] = useState(group.lang || "uz");
    const [active, setActive] = useState(group.isActive || false);
    const [threeDay, setThreeDay] = useState(group.threeDaysAgo || false);
    const [twoDay, setTwoDay] = useState(group.twoDaysAgo || false);
    const [oneDay, setOneDay] = useState(group.theDayBefore || false);

    const handleSave = async () => api.put(`/api/v1/bot/group-update/${group.groupId}`, {
        "isActive": active,
        "lang": langGroup,
        "threeDaysAgo": threeDay,
        "twoDaysAgo": twoDay,
        "theDayBefore": oneDay
    }).then(({ data }) => {
        toast.success(data.result, { autoClose: 2000 });
        refetch();
    }).catch(error => { throw error });

    return (
        <ul className="list" key={group.id}>
            <li>
                <p>{group.id}</p>
            </li>
            <li>
                <p>{group.groupName}</p>
            </li>
            <li>
                <p>{group.groupId}</p>
            </li>
            <li>
                <a target="_blank" href={group.link}>{t("admin.view")}</a>
            </li>
            <li>
                <p>{group.groupType}</p>
            </li>
            <li>
                <Select
                    defaultValue={langGroup}
                    value={langGroup}
                    style={{ height: "36px", fontSize: "14px", backgroundColor: "#fff", borderRadius: "4px" }}
                    onChange={(event) => setLangGroup(event.target.value)}
                >
                    <MenuItem value="uz">uz</MenuItem>
                    <MenuItem value="ru">ru</MenuItem>
                </Select>
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
                    onChange={(event) => setThreeDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <Switch
                    checked={twoDay}
                    onChange={(event) => setTwoDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <Switch
                    checked={oneDay}
                    onChange={(event) => setOneDay(event.target.checked)}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
            </li>
            <li>
                <p>{group.countTaxInfo}</p>
            </li>
            <li>
                <button onClick={() => handleSave()}>{t("admin.save")}</button>
            </li>
        </ul>
    );
}
