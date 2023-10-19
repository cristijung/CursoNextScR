import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header";

export default function Home() {
  return (
    <section>
      <Header/>
      <h1>Next</h1>
    </section>
  );
}
