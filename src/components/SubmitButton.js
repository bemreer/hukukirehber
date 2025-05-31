// components/SubmitButton.js
export default function SubmitButton({ loading, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      disabled={loading}
    >
      {loading ? "Yükleniyor..." : "Soruyu Gönder"}
    </button>
  );
}
