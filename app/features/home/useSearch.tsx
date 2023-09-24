import { getNews } from "@/app/GlobalRedux/Features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/hooks";
import { useCallback, useEffect, useState } from "react";

type ReturnType = {
  value: string;
  onSearch: () => void;
  searchByQuery: (value: string) => void;
};

export function useSearch(): ReturnType {
  const [value, setValue] = useState("");
  const { filter } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const onFind = useCallback(() => {
    dispatch(getNews({ ...filter, query: "" }));
  }, [filter]);

  useEffect(() => {
    onFind();
  }, []);

  useEffect(() => {
    onFind();
  }, [filter.dates, filter.onPage]);

  const onSearch = useCallback(() => {
    dispatch(getNews({ ...filter, query: value }));
  }, [filter, value]);

  const searchByQuery = (value: string) => {
    setValue(value);
  };

  return {
    value,
    onSearch,
    searchByQuery,
  };
};
