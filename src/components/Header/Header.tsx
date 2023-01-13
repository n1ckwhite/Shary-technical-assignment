import styleHeader from "./Header.module.css";
import searchIcon from "../../icons/search-2903.svg";
import peopleIcon from "../../icons/person-244.svg";
import arrowIcon from "../../icons/arrow-right-3098.svg";
import { Menu } from "../Menu/Menu";
import { useState } from "react";
import cn from "classnames";

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.container}>
        <div className={styleHeader.headerFlex}>
          <h1 className={styleHeader.logo}>SHARY</h1>
          <div className={styleHeader.search}>
            <label htmlFor="search">
              <img
                src={searchIcon}
                alt="search"
                className={styleHeader.searchIcon}
              />
            </label>
            <input type="text" className={styleHeader.input} id="search" />
          </div>
          <div className={styleHeader.flex}>
            <button className={styleHeader.btnOutline}>
              Стать арендодателем
            </button>
            <button className={styleHeader.btnPeople}>
              <img
                src={peopleIcon}
                alt="people"
                className={styleHeader.peopleIcon}
              />
              <img
                src={arrowIcon}
                alt="arrow"
                className={styleHeader.arrowBottomIcon}
              />
            </button>
            <button
              onClick={() => setActive(true)}
              className={styleHeader.burger}
            >
              <div className={styleHeader.line}></div>
              <div className={styleHeader.line}></div>
            </button>
          </div>
        </div>
        <Menu />
        <div
          onClick={() => setActive(false)}
          className={cn(
            styleHeader.overlay,
            active === true ? styleHeader.overlayActive : ""
          )}
        >
          <ul className={styleHeader.menu}>
            <li className={styleHeader.menuLi}>О нас</li>
            <li className={styleHeader.menuLi}>Каталог</li>
            <li className={styleHeader.menuLi}>Как арендовать</li>
            <li className={styleHeader.menuLi}>Стать арендодателем</li>
            <li className={styleHeader.menuLi}>Контакты</li>
            <li className={styleHeader.menuLi}>Помощь</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
