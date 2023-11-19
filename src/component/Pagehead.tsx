import Head from 'next/head';

interface PageHeadProps {
  title: string;
  description?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title, description = "The 10near project" }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default PageHead;
