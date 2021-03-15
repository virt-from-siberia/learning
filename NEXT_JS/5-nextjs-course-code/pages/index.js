import dynamic from "next/dynamic";
import {
  WithUserAgentProps,
  useUserAgent,
  withUserAgent,
} from "next-useragent";

function HomePage(props) {
  // console.log(props);
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       products: [{ id: "p1", title: "Product1" }],
//     },
//   };
// }

export function getServerSideProps(context) {
  console.log(context.req.headers["user-agent"]);

  return {
    props: {
      products: [{ id: "p1", title: "Product1" }],
    },
  };
}

export default HomePage;
