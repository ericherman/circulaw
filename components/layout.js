import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Layout({ children }) {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <Head>
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className=" max-w-screen-xl mx-4 xl:mx-auto">
        {!session && <>{children}</>}
        {session && <>{children}</>}
      </main>
      <Footer />
    </>
  );
}
