"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { I18nextProvider } from "react-i18next";
import i18n from "@/config/i18n";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss"; // Import global styles

export default function RootClientPage({ children }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </QueryClientProvider>
  );
}