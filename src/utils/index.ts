import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const setToLocalStorage = (value: any) => {
  if (window) {
    localStorage.setItem("token", value);
  }
};

export const getFromLocalStorage = () => {
  if (window) {
    return localStorage.getItem("token");
  }
  return null;
};

export const clearLocalStorage = () => {
  if (window) {
    localStorage.clear();
  }
};
