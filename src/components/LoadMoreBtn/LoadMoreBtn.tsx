import { LoadMoreBtnProps } from "../../types";
import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
}
