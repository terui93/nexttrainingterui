import Link from "next/link";
import Layout from "../components/layout";

export default function IndexPage() {
  const products = [
    {
      name: "bag",
    },
    {
      name: "shoes",
    },
    {
      name: "socks",
    },
  ];
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      Hello World.
    </div>
  );
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
