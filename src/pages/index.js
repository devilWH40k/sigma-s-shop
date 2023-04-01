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

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/products");
//   const { products } = await response.json();

//   return {
//     props: {
//       products,
//     },
//   };
// }
