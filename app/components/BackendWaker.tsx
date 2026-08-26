"use client";

import { useEffect } from "react";

export function BackendWaker() {
  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_RANOK_BACKEND_URL;

    if (!backendUrl) {
      console.warn("NEXT_PUBLIC_RANOK_BACKEND_URL is not configured");
      return;
    }

    fetch(backendUrl, {
      method: "GET",
      mode: "no-cors",
    });
  }, []);

  return null;
}
