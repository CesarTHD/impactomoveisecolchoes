import { Suspense } from "react";
import HomeClient from "./page-client";

export default function Home() {
  <Suspense fallback={null}>
    <HomeClient />
  </Suspense>
}
