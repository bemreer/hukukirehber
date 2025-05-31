// components/AnswerBox.js
export default function AnswerBox({ answer }) {
  if (!answer) return null;

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white">
      <p className="whitespace-pre-wrap">{answer}</p>
    </div>
  );
}
