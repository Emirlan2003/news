'use client';

import { MainInfo } from "@/app/features";
import { INews } from "@/app/types";
import { generateNewsDetailsUrl } from "@/app/utils/generateUrl";
import { GetServerSidePropsContext } from "next";

type PropsType = {
  data: INews,
}

async function fetchData(id: string) {
  const response = await fetch(generateNewsDetailsUrl(id));
  const data = await response.json();

  return data.response.content;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id }: { id?: string[] } = context.query;
  const fullPath = id?.join('/');

  const data = await fetchData(fullPath || "");

  return {
    props: {
      data,
    },
  };
};

export default function Details({ data }: PropsType) {
  return (
    <MainInfo data={data} />
  );
};
