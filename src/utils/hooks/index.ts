import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import { getFromLocalStorage } from "..";

export const useAuthCheck = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const token = getFromLocalStorage();
    if (!token) {
      router.push("/login");
    }
  }, []);
};
