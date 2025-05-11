"use client";
import { DoctorInfo } from "@/components/DoctorInfo";
import { OrderDates } from "@/components/OrderDates";
import { OrderPatientDetail } from "@/components/OrderPatientDetail";
import { OrderTimeline } from "@/components/OrderTimeline";
import StepProgress from "@/components/StepProgress";
import { orderData } from "@/types/order";
import { steps } from "@/types/step";

export default function OrderPage() {
  return (
    <div>
      <div className="p-16 bg-secondary-custom-blue lg:bg-white pb-28 lg:pb-6 rounded-b-3xl lg:rounded-none mt-0 lg:mt-12">
        <h1 className="text-[32px] font-sans leading-[1.2] font-semibold mb-2 text-custom-neutral-2">
          Your Order Status
        </h1>
        <h5 className="font-sans w-[80%] leading-[1.5] text-custom-neutral-3">
          You are all set, we will notify you when your note is ready
        </h5>

        <div className="my-5">
          <StepProgress steps={steps} />
        </div>
      </div>

      <div className="mx-16 mt-[-100px] lg:m-16">
        <div className="rounded-xl border border-gray-200 p-6 space-y-6 text-sm text-custom-neutral-5 bg-white">
          <DoctorInfo doctor={orderData.doctor} />
          <OrderDates
            createdAt={orderData.createdAt}
            estimatedDelivery={orderData.estimatedDelivery}
          />
          <OrderTimeline timeline={orderData.timeline} />
          <OrderPatientDetail patient={orderData.patient} />
        </div>
      </div>
    </div>
  );
}
