"use client";
import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import styles from "@/components/SideBar/style/sidebar.module.css";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({ toogle }: { toogle: boolean }) {
  const boxSideBar: any = useRef();

  useEffect(() => {
    gsap.to(boxSideBar.current, { width: toogle ? "250px" : "56px" });
  });

  return (
    <section className={styles.sidebar} ref={boxSideBar}>
      <div className={`flex w-full py-5 justify-center items-center`}>
        <img
          className={`w-7/12`}
          src={toogle ? "/images/logo.png" : "/images/logo1.png"}
          alt="logo"
        />
      </div>
    </section>
  );
}
