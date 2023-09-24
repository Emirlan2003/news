import { getMoreNews, getNews, setFilter } from "@/app/GlobalRedux/Features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/hooks";
import { useCallback, useEffect, useState } from "react";

type ReturnType = {
  value: string;
  onSearch: () => void;
  getMoreData: () => void;
  searchByQuery: (value: string) => void;
};

export function useSearch(): ReturnType {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState("");
  const { filter } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const onFind = useCallback(() => {
    dispatch(getNews({ ...filter, query: submit ? value : "" }));
  }, [filter, submit, value]);

  const getMoreData = useCallback(() => {
    dispatch(getMoreNews({
        ...filter,
        query: submit ? value : "",
        page: String(Number(filter.page) + 1),
      }));
      dispatch(setFilter({
        ...filter,
        page: String(Number(filter.page) + 1),
      }));
  }, [filter, submit, value]);

  useEffect(() => {
    onFind();
  }, []);

  useEffect(() => {
    onFind();
  }, [filter.dates, filter.onPage]);

  const onSearch = useCallback(() => {
    setSubmit(true);
    dispatch(getNews({ ...filter, query: value }));
  }, [filter, value]);

  const searchByQuery = (value: string) => {
    setValue(value);
  };

  return {
    value,
    onSearch,
    getMoreData,
    searchByQuery,
  };
};
