"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => router.push("/upsc-insights")}>
        UPSC Insights
      </button>

      <button onClick={() => router.push("/pricing")}>
        Pricing
      </button>
    </div>
  );
}