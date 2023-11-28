import React, { useEffect } from "react";

export default function useLocalStorage({ localTitle }) {
  useEffect(() => {
    window.localStorage.getItem(localTitle);
  }, []);
}
