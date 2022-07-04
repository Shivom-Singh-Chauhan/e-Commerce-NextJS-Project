import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopforfashion.com - Trend Wear</title>
        <meta name="description" content="shop for fashion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <img src="/shop for fashion.jpg" alt=""></img>
      </div>
    </div>
  );
}
