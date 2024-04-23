import Image from "next/image";
import Link from "next/link";
import Main from "@/pages/main/page";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Main />

    </main>
  );
}
