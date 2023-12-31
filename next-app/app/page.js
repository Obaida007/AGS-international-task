import Link from "next/link";

export default function Home() {
  return (
    <Link className="main" href={`/products`}>
      Show the products &gt;
    </Link>
  );
}
