"use client"
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full min-h-screen flex-row">
        <Sidebar />
      </div>
    </main>
  );
}