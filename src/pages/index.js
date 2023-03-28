import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Test</h1>
      </main>
    </>
  );
}
