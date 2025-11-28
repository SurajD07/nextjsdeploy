// "use client";

// import { CheckCircle, Package, Truck, X } from "lucide-react";

// interface TrackingEvent {
//   status: string;
//   description: string;
//   date: string;
//   time: string;
//   completed: boolean;
//   icon: React.ReactNode;
// }

// interface OrderTrackingModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function OrderTrackingModal({ isOpen, onClose }: OrderTrackingModalProps) {
//   const trackingEvents: TrackingEvent[] = [
//     { status: "Order Confirmed", description: "Your order has been placed", date: "Thu, 3rd Oct '24", time: "12:04am", completed: true, icon: <CheckCircle className="h-5 w-5 text-white" /> },
//     { status: "Shipped", description: "Your Item has been Shipped", date: "Sat, 5th Oct '24", time: "4:13pm", completed: true, icon: <Package className="h-5 w-5 text-white" /> },
//     { status: "Out For delivery", description: "Your item is out for delivery", date: "Sat, 5th Oct '24", time: "11:40pm", completed: true, icon: <Truck className="h-5 w-5 text-white" /> },
//     { status: "Delivered", description: "Your item has been delivered", date: "Thu, 10th Oct '24", time: "3:43pm", completed: true, icon: <CheckCircle className="h-5 w-5 text-white" /> }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 overflow-auto">
//       {/* Modal */}
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-4 sm:p-6 relative max-h-screen overflow-auto">

//         {/* Close button */}
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
//           <X size={20} />
//         </button>

//         {/* Vertical step tracker */}
//         <div className="relative pl-12">
//           {/* Connecting vertical line */}
//           <div className="absolute left-15 top-0 w-0.5 h-full bg-gray-300"></div>

//           <ul className="space-y-8 relative">
//             {trackingEvents.map((event, idx) => {
//               const isCompleted = event.completed;
//               return (
//                 <li key={idx} className="flex items-start relative">
//                   {/* Circle / Tick */}
//                   <div className={`relative z-10 flex items-center justify-center h-6 w-6 rounded-full
//                     ${isCompleted ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-500"}
//                   `}>
//                     {isCompleted ? "✓" : idx + 1}
//                   </div>

//                   {/* Content */}
//                   <div className="ml-6 text-sm sm:text-base text-gray-700">
//                     <p className="font-medium">{event.status}</p>
//                     <p>{event.description}</p>
//                     <p className="text-xs sm:text-sm text-gray-500">
//                       <time dateTime={event.date}>{event.date}</time>
//                       {event.time && ` • ${event.time}`}
//                     </p>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Close button */}
//         <div className="mt-5 flex justify-end">
//           <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { CheckCircle, Package, Truck, X } from "lucide-react";

interface TrackingEvent {
  status: string;
  description: string;
  date: string;
  time: string;
  completed: boolean;
  icon: React.ReactNode;
}

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // optional heading prop
}

export default function OrderTrackingModal({ isOpen, onClose, title = "Order Updates" }: OrderTrackingModalProps) {
  const trackingEvents: TrackingEvent[] = [
    { status: "Order Confirmed", description: "Your order has been placed", date: "Thu, 3rd Oct '24", time: "12:04am", completed: true, icon: <CheckCircle className="h-5 w-5 text-white" /> },
    { status: "Shipped", description: "Your Item has been Shipped", date: "Sat, 5th Oct '24", time: "4:13pm", completed: true, icon: <Package className="h-5 w-5 text-white" /> },
    { status: "Out For delivery", description: "Your item is out for delivery", date: "Sat, 5th Oct '24", time: "11:40pm", completed: true, icon: <Truck className="h-5 w-5 text-white" /> },
    { status: "Delivered", description: "Your item has been delivered", date: "Thu, 10th Oct '24", time: "3:43pm", completed: true, icon: <CheckCircle className="h-5 w-5 text-white" /> }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-4 sm:p-6 relative max-h-screen overflow-auto">

        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Modal Heading */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center sm:text-left">
          {title}
        </h2>

        {/* Vertical step tracker */}
        <div className="relative pl-12">
          {/* Connecting vertical line */}
          <div className="absolute left-15 top-0 w-0.5 h-full bg-gray-300"></div>

          <ul className="space-y-8 relative">
            {trackingEvents.map((event, idx) => {
              const isCompleted = event.completed;
              return (
                <li key={idx} className="flex items-start relative">
                  {/* Circle / Tick */}
                  <div className={`relative z-10 flex items-center justify-center h-6 w-6 rounded-full
                    ${isCompleted ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-500"}
                  `}>
                    {isCompleted ? "✓" : idx + 1}
                  </div>

                  {/* Content */}
                  <div className="ml-6 text-sm sm:text-base text-gray-700">
                    <p className="font-medium">{event.status}</p>
                    <p>{event.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      <time dateTime={event.date}>{event.date}</time>
                      {event.time && ` • ${event.time}`}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Close button */}
        <div className="mt-5 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
