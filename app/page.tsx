export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-6">
        PageKizzo 🚀
      </h1>

      <p className="text-xl text-gray-400 mb-8 text-center max-w-xl">
        Importa productos, optimízalos con IA y expórtalos a Shopify en segundos.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition">
        Comenzar ahora
      </button>
    </main>
  );
}
