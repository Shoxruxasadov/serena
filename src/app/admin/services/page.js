'use client';
import { toast } from "react-toastify";
import AdminContainer from "@/components/admin/adminContainer";
import { useTranslation } from "react-i18next";

export default function AdminServices() {
 const { t, i18n } = useTranslation();

  return (
    <AdminContainer title={t("admin.sidebar.services")}>
      <section id="dashboard" className="content">
        <h1>Services</h1>
      </section>
    </AdminContainer>
  );
}
