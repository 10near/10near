import PageHead from "~/component/Pagehead";

export default function Home() {
  return (
    <>
      <PageHead title="10Near - home" />

      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-pink-900 to-blue-900 py-4 text-gray-100">
        <div className="hero flex h-screen w-full items-center justify-center">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold lg:text-7xl">10NEAR</h1>
              <p className="mb-5 text-gray-200">Coming soon</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
