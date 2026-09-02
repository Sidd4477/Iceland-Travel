import { Suspense } from "react";
import OnlineBooking from "@/components/online-booking/OnlineBooking";

export default function OnlineBookingPage() {
  return (
    <Suspense fallback={null}>
      <OnlineBooking />
    </Suspense>
  );
}