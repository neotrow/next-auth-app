import App, { AppContext, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider, signOut } from "next-auth/react";

import "~/styles/globals.css";
import { makeApiCall } from "~/makeApiCall";
import Link from "next/link";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={async () => {
          await signOut();
        }}
      >
        sign out
      </button>

      <button onClick={() => makeApiCall("button")}>make api call</button>

      <Link href="/">
        <button>index</button>
      </Link>
      <Link href="/getInitialProps">
        <button>getInitialProps</button>
      </Link>
      <Link href="/getServerSideProps">
        <button>getServerSideProps</button>
      </Link>

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
