import { OrderData } from "@/types/order";
import { HorizontalDivider } from "@/components/Dividers";

export function OrderPatientDetail({
  patient,
}: {
  patient: OrderData["patient"];
}) {
  return (
    <div>
      <h6 className="font-bold mb-4 text-custom-neutral-2">Patient Detail</h6>
      <HorizontalDivider />
      <div className="grid grid-cols-2 gap-y-4">
        <div className="text-custom-neutral-6">Full Name</div>
        <div className="text-custom-neutral-5 text-right">
          {patient.fullName}
        </div>

        <div className="text-custom-neutral-6">DOB</div>
        <div className="text-custom-neutral-5 text-right">{patient.dob}</div>

        <div className="text-custom-neutral-6">Start Date</div>
        <div className="text-custom-neutral-5 text-right">
          {patient.startDate}
        </div>

        <div className="text-custom-neutral-6">Return Date</div>
        <div className="text-custom-neutral-5 text-right">
          {patient.returnDate}
        </div>

        <div className="text-custom-neutral-6">Assigned To</div>
        <div className="text-custom-neutral-5 text-right">
          {patient.assignedTo}
        </div>
      </div>
    </div>
  );
}
