"use client";
import { gsap } from "gsap";
import { useState, useRef } from "react";
import styles from "@/components/NavBar/style/navbar.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export async function getStaticProps() {
  return { props: { title: "HomePage" } };
}

export default function NavBar({ childToParent }: { childToParent: Function }) {
  const [sideBar, setSideBar] = useState(false);
  const boxSideBar: any = useRef();

  const handleClick = () => {
    setSideBar(!sideBar);
    childToParent(sideBar);
  };

  return (
    <section className={styles.boxNavNar}>
      <div className={styles.navbar}>
        <div className="font-bold text-sm flex items-center gap-2">
          <button className={styles.arrowBtn} onClick={handleClick}>
            <FaIcon icon={!sideBar ? faCircleLeft : faCircleRight} />
          </button>
          DASHBOARD
        </div>
        <div className="flex items-center gap-8">
          <div className={`flex items-center ${styles.searchBox}`}>
            <FaIcon icon={faMagnifyingGlass} />
            <input type="text" />
          </div>
          <div className={`flex items-center gap-2 ${styles.avatasBox}`}>
            <img src="/images/avatar.png" alt="Avatar" />
            <div className={`text-sm`}>Paulo Lins</div>
          </div>
        </div>
      </div>
    </section>
  );
}
