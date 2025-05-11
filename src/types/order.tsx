type TimelineItem = {
  label: string;
  date: string;
};

export type OrderData = {
  doctor: {
    name: string;
    specialty: string;
  };
  createdAt: string;
  estimatedDelivery: string;
  timeline: TimelineItem[];
  patient: {
    fullName: string;
    dob: string;
    startDate: string;
    returnDate: string;
    assignedTo: string;
  };
};

const orderData: OrderData = {
  doctor: {
    name: "Dr. Mitchell Samson, MD",
    specialty: "General Practioner",
  },
  createdAt: "10 Oct 2023, 08:00 AM",
  estimatedDelivery: "12 Oct 2023, 08:00 AM",
  timeline: [
    { label: "Note Reviewed", date: "09 Oct 2023, 07:15 PM" },
    { label: "Note Created", date: "10 Oct 2023, 08:00 AM" },
  ],
  patient: {
    fullName: "James Maddison",
    dob: "10 Oct 2025",
    startDate: "23 Oct 2025",
    returnDate: "28 Oct 2025",
    assignedTo: "Dr. Mitchell Samson, MD",
  },
};

export { orderData };
