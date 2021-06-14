import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The Nes Page</h1>
      <ul>
        <li>
          <Link href="news/next-js-is-a-great-framework"> Next JS is</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
