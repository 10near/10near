import Head from "next/head";

const PageHead = ({ title, description }) => (
  <Head>
    <title>{title || "10near project"}</title>
    <meta name="description" content={description || "The 10near project"} />
  </Head>
);

export default PageHead;
