import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { makeApiCall } from "~/makeApiCall";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 style={{ color: "white" }}>get initial props</h1>
        </div>
      </main>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
Home.getInitialProps = async () => {
  makeApiCall("getInitialProps");

  return {};
};

export default Home;
