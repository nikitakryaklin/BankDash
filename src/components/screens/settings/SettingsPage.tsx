"use client";

import styles from "./SettingsPage.module.scss";
import { useAuth } from "@/authContext/authContext";
import CardWrapper from "@/components/loayout/CardWrapper/CardWrapper";
import { useRouter } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";
import { HEADER_CONTROLES } from "./SettingsPage.data";
import clsx from "clsx";
import { Preferences } from "./Preferences/Preferences";
import { Security } from "./Security/Security";
import { EditProfile } from "./EditProfile/editProfile";
import { useEditForm } from "./EditProfile/useEditForm";
import { Loader } from "@/components/UI/Loader/loader";

const SettingsPage = () => {
  const { 0: isHeaderActive, 1: setIsHeaderActive } = useState(1);
  const { 0: isPanding, 1: setIsPanding } = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { logOut } = useAuth();
  const router = useRouter();

  const henderClick = () => {
    logOut();
  };

  return (
    <CardWrapper className={styles.settings_wrapper}>
      <div className={styles.header}>
        <ul>
          {HEADER_CONTROLES.map((el) => (
            <li
              className={clsx(
                styles.header_item,
                el.id === isHeaderActive && styles.isHeaderActive,
              )}
              onClick={() => setIsHeaderActive(el.id)}
              key={el.id}
            >
              {el.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.main}>
        {isHeaderActive === 1 && (
          <EditProfile formRef={formRef} pending={setIsPanding} />
        )}
        {isHeaderActive === 2 && <Preferences />}
        {isHeaderActive === 3 && <Security />}
      </div>
      <div className={styles.footer}>
        <button
          className={clsx(styles.save, isPanding && styles.isPanding)}
          onClick={() => formRef.current?.requestSubmit()}
          disabled={isPanding}
        >
          {isPanding === true ? <Loader color={"#fff"} /> : "Save"}
        </button>
        <button onClick={henderClick} className={styles.logOut}>
          Log out
        </button>
      </div>
    </CardWrapper>
  );
};

export default SettingsPage;
