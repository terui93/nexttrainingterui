import Link from "next/link";

export default function IndexPage() {
  const products = [
    {
      name: "bag"
    },
    {
      name: "shoes"
    },
    {
      name: "socks"
    }
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
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
