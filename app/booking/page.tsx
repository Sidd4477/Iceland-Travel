import { Suspense } from "react";
import BookingPage from "@/components/booking/BookingPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}