import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import SignInButton from "./SignInButton";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" className={styles.logo} width={50}
            height={50}/>
          </Link>
          <Link href={"/"} className={styles.title}>
          Dwitter
          </Link>
          <Link href={"/create"}>
            <AddOutlinedIcon className={styles.icon} />
          </Link>
        </div>

        <div className={styles.right}>
          <SignInButton />
        </div>
      </div>
      <div style={{ height: 64 }} />
    </>
  );
}
