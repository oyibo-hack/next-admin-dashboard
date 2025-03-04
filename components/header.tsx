/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const pathname = usePathname();

  // REMOVE MENU MOBILE
  useEffect(() => {
    // Function to handle clicks on nav links
    const linkAction = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if the clicked element has the `nav__link` class
      if (target.classList.contains(styles.nav__link)) {
        setMenuVisible(false);
      }
    };

    // Add event listener to the menu container
    const navMenu = document.getElementById("nav-menu");
    navMenu?.addEventListener("click", linkAction);

    // Cleanup the event listener on component unmount
    return () => {
      navMenu?.removeEventListener("click", linkAction);
    };
  }, []);

  // ADD BLUR HEADER
  useEffect(() => {
    const blurHeader = () => {
      // Check if window is defined
      if (typeof window !== "undefined") {
        const header = document.getElementById("header");

        if (header) {
          // Add a class if the bottom offset is greater than 50 of the viewport
          if (window.scrollY >= 50) {
            header.classList.add(styles.blurHeader);
          } else {
            header.classList.remove(styles.blurHeader);
          }
        }
      }
    };

    // Attach the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", blurHeader);
    }

    // Cleanup on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", blurHeader);
      }
    };
  }, []);

  // Toggle navigation menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} ${styles.container}`}>
        <Link href="/" className={styles.nav__logo}>
          <img src="/logo.png" alt="image" /> Friend Blitz
        </Link>
        <div
          className={`${styles.nav__menu} ${
            menuVisible ? styles.showMenu : ""
          }`}
          id="nav-menu"
        >
          <ul className={styles.nav__lists}>
            {[
              { href: "/", label: "Home" },
              { href: "/my-profile", label: "My Profile" },
              { href: "/#how-it-works", label: "How it works" },
              { href: "/free-tokens", label: "Free Tokens" },
              { href: "/profile/challenges", label: "Challenges" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.nav__link} ${
                    pathname === item.href ? styles.activeLink : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <div id="nav-close" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.nav__close}
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
            </svg>
          </div>
          <img src="/block-19.svg" alt="image" className={styles.nav__img} />
        </div>
        {/* Toggle Button */}
        <div id="nav-toggle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.nav__toggle}
          >
            <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
