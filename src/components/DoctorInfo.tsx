import Image from "next/image";
import { OrderData } from "@/types/order";

export function DoctorInfo({ doctor }: { doctor: OrderData["doctor"] }) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src="/dr-img.png"
        alt={doctor.name}
        width={56}
        height={56}
        className="rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-custom-neutral-2">{doctor.name}</p>
        <p className="text-custom-neutral-3">{doctor.specialty}</p>
      </div>
    </div>
  );
}