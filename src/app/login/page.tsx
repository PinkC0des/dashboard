import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Login page",
};

export default function Login() {
  return (
    <section>
      <div>
        <Link href="/dashboard">Home</Link>
      </div>
    </section>
  );
}
