import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props{
    user: userProps;
    saveUser: (data: userProps) => void;
    clearUser: () => void;
}
interface userProps{
    name: string;
    email: string;
    token: string;
    image: string;
    address: string;
    phone: string;
    id: string;
    account: string;
    bio: string;
    facebookUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
    joined: string;
}
const userInitState = {
    name: '',
    email: '',
    token: '',
    image: '',
    address: '',
    account: '',
    phone: '',
    id: '',
    bio: '',
    facebookUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
    joined: ''
}
const useAuthStore = create<Props>()(
  persist(
    (set) => ({
      user: userInitState,
      saveUser: (data:userProps) =>
        set(() => ({
          user: data,
        })),
      clearUser: () =>
        set(() => ({
          user: userInitState,
        })),
    }),
    {
      name: "guard_user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
