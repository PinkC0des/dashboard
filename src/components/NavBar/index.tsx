"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { Fragment } from "react";
import { useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleLeft,
  faCircleRight,
  faRightFromBracket,
  faUser,
  faGear,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";

import styles from "@/components/NavBar/style/navbar.module.css";
import Link from "next/link";

export async function getStaticProps() {
  return { props: { title: "HomePage" } };
}

function classNames(...classes: Array<String>) {
  return classes.filter(Boolean).join(" ");
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
        <div className="font-bold text-sm flex items-center gap-2 text-white">
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
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={`flex items-center gap-2 transition duration-300 delay-100 hover:delay-100 hover:opacity-80 focus:opacity-80 ${styles.avatasBox}`}
              >
                <img src="/images/avatar.png" alt="Avatar" />
                <div className={`text-sm text-white`}>Paulo Lins</div>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100 delay-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75 delay-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-200 rounded-md bg-white focus:outline-none">
                <div className="py-3 px-4 text-gray-700 font-bold">
                  Bem Vindo
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-sm gap-3 flex items-center"
                        )}
                      >
                        <FaIcon icon={faUser} />
                        Meu Perfil
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-sm gap-3 flex items-center"
                        )}
                      >
                        <FaIcon icon={faGear} />
                        Configurações
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-sm gap-3 flex items-center"
                        )}
                      >
                        <FaIcon icon={faTruckMedical} />
                        Suporte
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-sm gap-3 flex items-center"
                        )}
                      >
                        <FaIcon icon={faRightFromBracket} />
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </section>
  );
}
