import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>10near project</title>
        <meta name="description" content="The 10near project" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-pink-900 to-blue-900 py-4 text-gray-100">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="form-control rounded-md border-2 border-base-300 bg-gray-700 bg-opacity-40 p-4 shadow-md">
            <div className="label mb-4 text-2xl font-bold">
              Send any message to 10near
            </div>


            <textarea
              className="textarea textarea-bordered bg-transparent text-semibold text-gray-100 mb-2"
              placeholder="Your message here..."
            ></textarea>
            <button className="btn btn-outline btn-block hover:bg-zinc-200">send</button>
          </div>
        </div>
      </main>
    </>
  );
}
