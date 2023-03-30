import Head from "next/head";
import Layout from "@/components/layouts/Layout";
import HomePage from "@/components/templates/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Organick: Home page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
