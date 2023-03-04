import { useRouter } from "next/router";
import { useEffect } from "react";
import { getFromLocalStorage } from "..";

export const useAuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getFromLocalStorage();
    if (!token) {
      router.push("/login");
    }
  }, []);
};
