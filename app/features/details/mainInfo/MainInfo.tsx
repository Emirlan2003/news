'use client';

import { Button, Image } from "antd";
import styles from "./mainInfo.module.css";
import { INews } from "@/app/types";
import Link from "next/link";
import { formatDate } from "@/app/utils";
import { stubUrl } from "@/app/GlobalRedux/constants";
import { LeftOutlined } from "@ant-design/icons";

type PropsType = {
  data: INews,
}

export function MainInfo({ data }: PropsType) {
  return (
    <>
      <Link href={"/"}>
        <Button><LeftOutlined rev={undefined} />Сome back</Button>
      </Link>
      <div className={styles.main}>
        <div className={styles.content}>
          <h3><strong>{data.pillarName}</strong></h3>
          <div className={styles.headBlock}>
            <div>{formatDate(data.webPublicationDate)}</div>
            <a href={data.webUrl} target="blank">read on Guardian</a>
          </div>
          <div className={styles.headBlock}>
            <Image
              alt="example"
              className={styles.images}
              src={data.fields ? data.fields.thumbnail : stubUrl}
            />
            <div>
              <h1>{data.sectionName}</h1>
              <p>{data.webTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
