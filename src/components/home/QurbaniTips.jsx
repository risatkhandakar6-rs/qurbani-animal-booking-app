"use client";

import { useEffect, useState } from "react";
import { FaHeartPulse, FaTooth, FaWheatAwn } from "react-icons/fa6";


// import { useEffect, useState } from "react";
// import { FaHeartPulse, FaTooth, FaWheatAwn } from "react-icons/fa6";

// const icons = {
//   health: FaHeartPulse,
//   age: FaTooth,
//   care: FaWheatAwn,
// };

// export default function QurbaniTips() {
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then((data) => setTips(data.tips))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg text-success"></span>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[#F5F7FA]">
//       <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 lg:py-20">
//         <div className="max-w-xl mb-10 text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-black">
//             Qurbani tips before you buy
//           </h2>
//           <p className="mt-3 text-gray-600">
//             Three quick checks that help you choose a healthy animal and keep it
//             well until Eid.
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {tips.map((tip) => {
//             const Icon = icons[tip.icon];
//             return (
//               <div
//                 key={tip.id}
//                 className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#4CAF4F] transition-colors"
//               >
//                 <div className="w-12 h-12 rounded-full bg-[#4CAF4F]/10 flex items-center justify-center mb-4">
//                   {Icon && <Icon className="text-[#4CAF4F] text-xl" />}
//                 </div>
//                 <h3 className="text-lg font-semibold text-black">{tip.title}</h3>
//                 <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                   {tip.text}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function QurbaniTips() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  const icons = {
    health: FaHeartPulse,
    care: FaWheatAwn,
    age:FaTooth
  }

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setTips(data.tips))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])
  if (loading) {
      return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
    
  }
  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-2 md:px-10 py-8 md:py-10 lg:py-12">
         <div className="max-w-xl mb-10  md:text-left  grid text-center items-center justify-center mx-auto">
           <h2 className="text-2xl md:text-4xl font-bold text-black text-center ">
             Qurbani tips before you buy</h2>
          <p className="mt-3 text-xs text-gray-600 whitespace-nowrap text-center">Three quick checks that help you choose a healthy animal <br  /> and keep it well until Eid.</p>
        </div>
        <div className="grid gap-6 sm:gap-2 lg:gap-6 grid-cols-1 sm:grid-cols-3">
          {
            tips.map((tip) => {
              const Icon = icons[tip.icon];
              return (
                <div key={tip.id}
                 className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#4CAF4F] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF4F]/10 flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="text-[#4CAF4F] text-xl flex "></Icon>}
                  
                  </div>  
                  <h3 className="text-lg font-semibold text-black text-center ">{tip.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed text-center">
                  {tip.text}
                 </p>
                </div>
              )
            })
          }
        </div>
        
      </div>
  </section>
  )
}
