import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Compliance Copilot</title>
      </Head>
      <main style={{ padding: 40 }}>
        <h1>Compliance Copilot</h1>
        <p>AI-powered compliance monitoring, reporting & advice.</p>
        <Link href="/dashboard">Go to Dashboard</Link>
      </main>
    </>
  );
}
