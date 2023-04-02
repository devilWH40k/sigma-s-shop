import Head from "next/head";
import Layout from "@/components/layouts/Layout";
import CartPage from "@/components/templates/CartPage";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Organick: Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <CartPage />
      </Layout>
    </>
  );
}
