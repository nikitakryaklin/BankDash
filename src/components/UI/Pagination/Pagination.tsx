"use client";
import { IPagination } from "@/types/Pagination.type";
import styles from "./Pagination.module.scss";
import { useEffect } from "react";

interface IProp {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  setPage: (page: number) => void;
}

export const Pagination = ({
  page,
  pageCount,
  pageSize,
  total,
  setPage,
}: IProp) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"< Previous"}
        </button>
        {page !== 1 && <p>{page - 1}</p>}
        <p className={styles.active}>{page}</p>
        {page !== pageCount && <p>{page + 1}</p>}
        <button disabled={page === pageCount} onClick={() => setPage(page + 1)}>
          {"Next >"}
        </button>
      </div>
    </div>
  );
};
