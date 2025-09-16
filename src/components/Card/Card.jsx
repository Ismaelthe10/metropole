export default function Card({ icon, title, description, items }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col text-center items-center transition-transform duration-300 hover:-translate-y-2">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-950 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <ul className="text-left space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
