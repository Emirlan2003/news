import { setFilter } from "@/app/GlobalRedux/Features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/hooks";

type ReturnType = {
  sortByDate: (value: string) => void;
  sortByOnPages: (value: string) => void;
};

export function useSort(): ReturnType {
  const { filter } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const sortByDate = (value: string) => {
    dispatch(setFilter({ ...filter, dates: value }));
  };

  const sortByOnPages = (value: string) => {
    dispatch(setFilter({ ...filter, onPage: value }));
  };

  return {
    sortByDate,
    sortByOnPages,
  };
};
