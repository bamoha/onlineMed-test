import { Check } from "lucide-react";
import WalletIcon from "@/assets/WalletIcon";
import { HorizontalDivider } from "@/components/Dividers";
import { OrderData } from "@/types/order";

export function OrderTimeline({
  timeline,
}: {
  timeline: OrderData["timeline"];
}) {
  return (
    <div>
      <h6 className="font-bold mb-4 text-custom-neutral-2">Timeline</h6>
      <HorizontalDivider />
      <div className="space-y-6 relative">
        {timeline.map((item, index) => (
          <div key={index} className="relative">
            <span
              className={`absolute left-1.5 top-5 w-px border-l border-dashed border-gray-200 ${
                index === timeline.length - 1
                  ? "h-[50%] bg-gradient-to-b from-gray-200/50 to-transparent"
                  : "h-full"
              }`}
            />
            <span>
              {index === timeline.length - 1 ? (
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full flex items-center justify-center text-xs bg-custom-success text-white">
                  <Check size={8} />
                </span>
              ) : (
                <span className="absolute left-0 top-1">
                  <WalletIcon />
                </span>
              )}
            </span>
            <div className="ml-5">
              <p className="text-custom-neutral-5 font-medium text-xs lg:text-sm">
                {item.label}
              </p>
              <p className="text-custom-neutral-6 font-light text-[10px] lg:text-xs ">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <HorizontalDivider />
    </div>
  );
}
