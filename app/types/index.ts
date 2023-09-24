export interface INews {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  sectionName: string;
  pillarName: string;
  fields: {
    thumbnail: string;
  }
}

export interface INewsProps {
  dates: string;
  onPage: string;
  query: string;
  page: string;
}

export interface IFilter {
  dates: string;
  onPage: string;
  page: string;
}
