import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className='relative max-w-xl mx-auto px-8 max-w-7xl'>
        {children}
      </main>
      <Footer />
    </>
  );
}
