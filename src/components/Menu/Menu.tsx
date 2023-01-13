import styleMenu from "./Menu.module.css";
import cn from "classnames";
import { useState } from "react";
import arrowIcon from "../../icons/arrow-right-3098.svg";

export const Menu = () => {
  const [etc, setEtc] = useState(false);
  return (
    <menu className={styleMenu.menu}>
      <ul className={cn(styleMenu.ul, etc === true ? styleMenu.ulActive : "")}>
        <li className={styleMenu.li}>Техника для дома</li>
        <li className={styleMenu.li}>Аудио/видео</li>
        <li className={styleMenu.li}>Спорт и отдых</li>
        <li className={styleMenu.li}>Мебель/декор</li>
        <li className={styleMenu.li}>Электроника</li>
        <li className={styleMenu.li}>Туризм</li>
        <li className={styleMenu.li}>Для детей и родителей</li>
      </ul>
      <button onClick={() => setEtc(!etc)} className={styleMenu.menuBtn}>
        <img
          src={arrowIcon}
          className={cn(styleMenu.icon, etc === true ? styleMenu.iconLeft : "")}
          alt="arrow"
        />
      </button>
    </menu>
  );
};
