import gif from "../../Assets/kstore.gif";
import Styles from "./Header.module.css";
import upscroll from "../../Assets/upscroll.png";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const scrollHandle = () => {
    window.scrollTo(0, 0);
  };

  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    if (isMenu) {
      document.addEventListener("click", handleListener);
    } else {
      document.removeEventListener("click", handleListener);
    }
    return () => document.removeEventListener("click", handleListener);
  }, [isMenu]);

  const handleListener = (e) => {
    setIsMenu(false);
    props.MenuEnable(false);
    document.body.style.overflow = !isMenu ? "hidden" : "auto";
  };

  const handleMenu = () => {
    console.log("ismenu", isMenu);
    setIsMenu((p) => !p);
    props.MenuEnable(!isMenu);
    document.body.style.overflow = !isMenu ? "hidden" : "auto";
  };

  return (
    <div id="home" className={Styles.test + " pt-4"}>
      <div>
        <div
          style={{ opacity: isMenu ? "0" : "1" }}
          className={Styles.headerContainer + " container"}
        >
          <img className={Styles.log} src={gif} alt="gif" />
        </div>

        <div
          className={
            isMenu
              ? Styles.materialBtn + " " + Styles.active
              : Styles.materialBtn
          }
        >
          <div
            onClick={handleMenu}
            id="menu"
            className={
              isMenu
                ? Styles.materialHamburger + " " + Styles.materialClose
                : Styles.materialHamburger
            }
          >
            <div className={Styles.materialPatty}></div>
            <div className={Styles.materialPatty}></div>
            <div className={Styles.materialPatty}></div>
          </div>
        </div>

        <div class="">
          <div
            className={Styles.materialMenu}
            style={{ display: isMenu ? "block" : "none" }}
            id="menu"
          >
            <div className={Styles.materialContent}>
              <nav>
                <ul className={Styles.menuLinks}>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#about">
                      About KSTORe
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#highlights">
                      Key Highlights
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#stores">
                      Store Locator
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#franchaise">
                      For Franchise
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#testimonial">
                      Testimonials
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#partners">
                      Brand Partners
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="kstoreFont fs-2" href="#contact">
                      Contact Us
                    </a>
                  </li>

                  <li className="p-0">
                    <Link to="/auth" className="kstoreFont fs-3">
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          data-aos="fade"
          onClick={scrollHandle}
          className={Styles.upScrollContainer}
        >
          <img className={Styles.upscrollImg} src={upscroll} alt="scroll" />
        </button>
      </div>
    </div>
  );
}
