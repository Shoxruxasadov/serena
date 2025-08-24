'use client';
import AdminContainer from "@/components/admin/adminContainer";
import { useTranslation } from "react-i18next";
import api from "@/library/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Pagination } from "@mui/material";
import AdminUserList from "@/components/admin/users";

export default function AdminUsers() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(0);
  const size = 8;
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const { data, isSuccess, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["users", page, size],
    queryFn: async () => api.get(`/api/v1/bot/get-users/page?page=${page}&size=${size}`).then(({ data }) => {
      setTotalPages(data.result.page.totalPages);
      setTotalElements(data.result.page.totalElements);
      return data.result;
    }).catch(error => { throw error }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return (
    <AdminContainer title={t("admin.sidebar.users")}>
      <section id="users" className="content">
        <div id="table" className="user-table">
          <div id="headline">
            <h3>{t("admin.users.tableTitle")}</h3>
            <p>
              <span>{page == 0 ? 1 : page * size + 1}-{(page + 1) * size > totalElements ? totalElements : (page + 1) * size}</span>
              <span> {t("admin.of")} {totalElements}</span>
            </p>
          </div>
          <ul id="column">
            <li>
              <span>ID</span>
            </li>
            {/* <li>
              <span>{t("admin.users.name")}</span>
            </li> */}
            <li>
              <span>{t("admin.users.id")}</span>
            </li>
            <li>
              <span>{t("admin.groups.lang")}</span>
            </li>
            <li>
              <span>{t("admin.groups.active")}</span>
            </li>
            <li>
              <span>{t("admin.groups.3day")}</span>
            </li>
            <li>
              <span>{t("admin.groups.2day")}</span>
            </li>
            <li>
              <span>{t("admin.groups.1day")}</span>
            </li>
            <li>
              <span>{t("admin.groups.tax")}</span>
            </li>
            <li>
            </li>
          </ul>
          {data?.content?.map((user) => (
            <AdminUserList key={user.id} user={user} refetch={refetch} />
          ))}
          {((isLoading || isFetching) && !data) && <div className="loading"><span className="loader"></span></div>}
          <Pagination
            count={totalPages}
            defaultPage={page + 1}
            shape="rounded"
            page={page + 1}
            onChange={(event, value) => setPage(value - 1)}
          />
        </div>
      </section>
    </AdminContainer>
  );
}
