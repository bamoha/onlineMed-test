export function OrderDates({ createdAt, estimatedDelivery }: { createdAt: string; estimatedDelivery: string }) {
    return (
      <div className="flex items-start gap-3 lg:gap-6 mt-5">
        <div className="flex-1 border-r">
          <p className="text-custom-neutral-5 text-[10px] lg:text-xs">Created at</p>
          <p className="text-custom-neutral-2 font-medium text-xm lg:text-sm">{createdAt}</p>
        </div>
        <div className="w-px bg-gray-200 h-auto" />
        <div className="flex-1">
          <p className="text-custom-neutral-5 text-[10px] lg:text-xs">Estimated Delivery</p>
          <p className="text-custom-neutral-2 font-medium text-xm lg:text-sm">{estimatedDelivery}</p>
        </div>
      </div>
    );
  }
  