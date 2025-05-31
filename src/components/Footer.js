export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-10">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Hukuki Rehber. Tüm hakları saklıdır.
        </p>
        <p className="text-sm text-gray-600">
          Bu platform, Türk hukuk sistemine dair bilgilendirme amaçlıdır ve avukat tavsiyesi yerine geçmez.
        </p>
      </div>
    </footer>
  );
}
