"use client";
import Image from "next/image";
import styles from "./aside.module.scss";
import { AsideConfig } from "./Aside.data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx/lite";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAuth } from "@/authContext/authContext";
import { useBurgerStore } from "@/store/useBurgerStore";
import { CONSTANTS } from "@/config/constants";

// const isLogin = !!window.localStorage.getItem('token')

const Aside = () => {
  const pathname = usePathname();
  const { isBurger, setIsBurger } = useBurgerStore();

  const { isLogin } = useAuth();
  if (pathname === CONSTANTS.login) return null;

  return (
    <aside className={clsx(styles.aside, isBurger && styles.isBurger)}>
      <div className={styles.logo}>
        <Image src={"/Logo.svg"} width={183} height={36} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        {AsideConfig.map((item) => (
          <Link
            href={item.url}
            key={item.text}
            className={clsx(
              styles.link,
              item.url === pathname && styles.isActive,
            )}
            onClick={setIsBurger}
          >
            {item.icon}
            <p>{item.text}</p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
