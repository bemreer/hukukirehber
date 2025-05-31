// components/QuestionInput.js
export default function QuestionInput({ value, onChange, placeholder }) {
  return (
    <textarea
      rows={4}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
