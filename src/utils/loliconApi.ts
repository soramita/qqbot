import axios from 'axios';

export type LoliconApi = {
  r18?: 0 | 1 | 2;
  num?: number;
  uid?: number[];
  keyword?: string;
  tag?: string[];
  size?: string[];
  proxy?: string;
  dateAfter?: number;
  dateBefore?: number;
  dsc?: boolean;
  excludeAI?: boolean;
};
type LoliconApiResult = {
  error: string;
  data: Array<{
    pid: number;
    p: number;
    uid: number;
    title: string;
    author: string;
    r18: false;
    width: number;
    height: number;
    tags: string[];
    ext: string;
    aiType: number;
    uploadDate: number;
    urls: {
      original: string;
    };
  }>;
};
const url = 'https://api.lolicon.app/setu/v2';
const getLoliconApi = async (params?: LoliconApi) => {
  const tags = params.tag?.map((item) => {
    return `tag=${item}`;
  });
  const res = await axios.get<LoliconApiResult>(
    url +
      `?r18=${params.r18}&num=1${params.uid ? '&uid=' + params.uid : ''}&${
        tags ? tags.join('&') : ''
      }`,
  );
  return res.data;
};
export default getLoliconApi;
