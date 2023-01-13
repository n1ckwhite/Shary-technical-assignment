import { FC, useState } from "react";
import stylePagination from "./Pagination.module.css";
import cn from "classnames";
interface IProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (N: number) => void;
}

export const Pagination: FC<IProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const [active, setActive] = useState<null | number>(1);
  const postNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    postNumbers.push(i);
  }
  return (
    <ul className={stylePagination.pagination}>
      {postNumbers.map((item: number) => {
        return (
          <li
            key={item}
            className={cn(
              stylePagination.number,
              active === item && stylePagination.numberActive
            )}
            onClick={() => {
              paginate(item);
              setActive(item);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
