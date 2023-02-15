import axios from 'axios';
import { CreateLoliconImgDto } from '../modules/img/dto/create-img.dto';

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
const getLoliconApi = async (createLoliconImgDto: CreateLoliconImgDto) => {
  const newData = createLoliconImgDto.message
    .replace(/\&#91;|&#93;/g, '')
    .split(' ');
  let uid;
  let tag;
  let num;
  newData.forEach((item) => {
    if (item.includes('作者ID')) {
      uid = item.replace(/\作者ID/g, '');
    }
    if (item.includes('标签')) {
      tag = item.replace(/\标签/g, '').split('，');
    }
    if (item.includes('数量')) {
      num = item.replace(/\数量/g, '');
      if (num == '') {
        num = 1;
      }
    }
  });
  const loliconInfo: LoliconApi = {
    r18: 0,
    num,
    uid,
    tag,
  };
  const tags = loliconInfo.tag?.map((item) => {
    return `tag=${item}`;
  });
  const res = await axios.get<LoliconApiResult>(
    url +
      `?r18=${loliconInfo.r18}&num=${loliconInfo.num}&${
        loliconInfo.uid ? '&uid=' + loliconInfo.uid : ''
      }&${tags ? tags.join('&') : ''}`,
  );
  return res.data;
};
export default getLoliconApi;
