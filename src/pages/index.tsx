import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>10near project</title>
        <meta name="description" content="The 10near project" />
      </Head>
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-pink-900 to-blue-900 py-4 text-gray-100">
        <div className="hero h-screen w-full flex items-center justify-center">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold lg:text-7xl">10NEAR</h1>
              <p className="mb-5 text-gray-200">
                Coming soon
              </p>
            </div>
          </div>

        </div> 

      </main>
    </>
  );
}


