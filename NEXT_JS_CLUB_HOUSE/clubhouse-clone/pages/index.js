import Head from "next/head";
import Link from "next/link";

import { WelcomeStep } from "../components/steps/WelcomeStep";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>This is a first page</title>
      </Head>
      <WelcomeStep />
    </div>
  );
}
