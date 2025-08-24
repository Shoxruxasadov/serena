import { create } from "zustand";
import { persist } from "zustand/middleware";

// import api from "@/library/axios";

export const useSidebar = create((set) => ({
  position: 0,
  setPosition: (position) => set({ position }),
  opacity: 1,
  setOpacity: (opacity) => set({ opacity }),
  positionLng: 4,
  setPositionLng: (positionLng) => set({ positionLng }),
}));
