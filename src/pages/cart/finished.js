import Head from "next/head";
import Layout from "@/components/layouts/Layout";
import FinishOrderPage from "@/components/templates/FinishOrderPage";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Thanks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <FinishOrderPage />
      </Layout>
    </>
  );
}
