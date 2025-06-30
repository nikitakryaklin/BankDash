"use client";

import Fild from "@/components/UI/fild/fild";
import styles from "./Security.module.scss";
import { Switcher } from "@/components/UI/Switcher/Switcher";
import { useState } from "react";

export const Security = () => {
  const { 0: toggle, 1: setToggle } = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <h3>Two-factor Authentication</h3>
      <div>
        <Switcher toggle={() => setToggle(!toggle)} arg={toggle} />
        <p>Enable or disable two factor authentication</p>
      </div>
      <h3>Change Password</h3>
      <form action="">
        <Fild type="text" placeholder="*******" title="Current password" />
        <Fild type="text" placeholder="*******" title="New password" />
      </form>
    </div>
  );
};
