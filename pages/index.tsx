import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prince Gbalam </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-3 text-4xl">Hi there!</h1>
        <h3 className="text-2xl">I&apos;m Prince Gbalam</h3>
        <p className="italic text-gray-400">
          Portfolio still under construction{" "}
          <span className="not-italic">🚧🏗👷‍♂️</span>
        </p>
      </div>
    </div>
  );
}
