import Image from "next/image";

import Navigation from "@/components/Navigation/Navigation";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`fixed top-0 left-0 w-full z-10 ${styles.Header}`}>
      <div className="container">
        <div className="py-5 flex items-center justify-between">
          <Image src="/logo.svg" width={100} height={50} alt="GVO logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
