export default function BookingForm({ animal }) {
  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
  const labelClass = "block text-sm font-medium text-gray-700 mb-1"

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900">Book This Animal</h3>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Fill in your details to reserve {animal?.name}.
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" placeholder="Your full name" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input type="tel" placeholder="01XXXXXXXXX" className={inputClass} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input type="email" placeholder="you@example.com" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Delivery Address</label>
          <textarea
            rows={3}
            placeholder="House, road, area, district"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Delivery Date</label>
            <input type="date" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Payment Method</label>
            <select className={inputClass} defaultValue="">
              <option value="" disabled>Select method</option>
              <option>Cash on Delivery</option>
              <option>bKash</option>
              <option>Nagad</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Note (optional)</label>
          <textarea
            rows={2}
            placeholder="Any special request..."
            className={inputClass}
          />
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}