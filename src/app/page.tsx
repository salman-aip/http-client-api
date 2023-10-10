"use client";

import { AxiosGet, AxiosGetAsync, FetchGet } from "@/components/get-simple-example";

export default function Home() {
  AxiosGet();
  FetchGet();
  AxiosGetAsync();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black"></main>
  );
}
