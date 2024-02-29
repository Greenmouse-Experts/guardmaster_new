import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props {
  cart: cartProps[];
  saveCart: (data: cartProps[]) => void;
  clearCart: () => void;
}
interface cartProps {
  id: string;
  coverImg: string;
  title: string;
  price: string;
}
const cartInitState = [] as cartProps[];
const useAuthStore = create<Props>()(
  persist(
    (set) => ({
      cart: cartInitState,
      saveCart: (data: cartProps[]) =>
        set(() => ({
          cart: data,
        })),
      clearCart: () =>
        set(() => ({
          cart: cartInitState,
        })),
    }),
    {
      name: "guard_cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
