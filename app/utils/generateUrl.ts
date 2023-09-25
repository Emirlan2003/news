import { ApiParameters, ApiSettings } from "../GlobalRedux/constants";
import { INewsProps } from "../types";

const BASE_URL = process.env.BASE_URL;
const BASE_URL_DETAILS = process.env.BASE_URL_DETAILS;
const API_KEY = process.env.API_KEY || "";

export function generateNewsUrl(props: INewsProps): string {
  const baseUrl = BASE_URL;
  const queryParams = new URLSearchParams();
  
  queryParams.append(ApiParameters.Fields, ApiSettings.ThumbNail);
  queryParams.append(ApiParameters.ApiKey, API_KEY);
  queryParams.append(ApiParameters.OrderBy, props.dates);
  queryParams.append(ApiParameters.PageSize, props.onPage);
  queryParams.append(ApiParameters.Query, props.query);
  queryParams.append(ApiParameters.Page, props.page);

  return `${baseUrl}?${queryParams.toString()}`;
};

export function generateNewsDetailsUrl(id: string): string {
  const baseUrl = BASE_URL_DETAILS;
  const queryParams = new URLSearchParams();
  
  queryParams.append(ApiParameters.Fields, ApiSettings.ThumbNail);
  queryParams.append(ApiParameters.ApiKey, API_KEY);

  return `${baseUrl}/${id}?${queryParams.toString()}`;
};
