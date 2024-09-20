import { create } from "zustand";

interface State {
  ready: boolean;
  isReady: () => void;
}

const useStore = create<State>((set) => ({
  ready: false,
  isReady: () => set({ ready: true }),
}));

export default useStore;
