import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function MyPage2() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}
