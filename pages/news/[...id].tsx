'use client';

import { generateNewsDetailsUrl } from "@/app/utils/generateUrl";
import { GetServerSidePropsContext } from "next";

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

export default function Details({ data }: any) {
  console.log("data", data);

  return (
    <main>
      helloo
    </main>
  );
};
