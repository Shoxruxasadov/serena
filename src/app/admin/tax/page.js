'use client';
import { toast } from "react-toastify";
import AdminContainer from "@/components/admin/adminContainer";
import { useTranslation } from "react-i18next";

export default function AdminTax() {
 const { t, i18n } = useTranslation();

  return (
    <AdminContainer title={t("admin.sidebar.tax")}>
      <section id="dashboard" className="content">
        <h1>Tax</h1>
      </section>
    </AdminContainer>
  );
}
