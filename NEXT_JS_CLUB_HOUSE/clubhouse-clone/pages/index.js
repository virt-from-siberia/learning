import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>This is a first page</title>
      </Head>
      <Link href="/room">
        <a>
          <h1>Открыть</h1>
        </a>
      </Link>
    </div>
  );
}
