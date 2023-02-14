type LoliconApi = {
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

const url = 'https://api.lolicon.app/setu/v2';
const getLoliconApi = (data?: LoliconApi) => {};
const a = {
  error: '',
  data: [
    {
      pid: 95116399,
      p: 0,
      uid: 577076,
      title: 'お風呂？',
      author: '雁',
      r18: false,
      width: 2339,
      height: 1654,
      tags: [
        'オリジナル',
        '原创',
        '女の子',
        '女孩子',
        'お風呂',
        '洗澡',
        '尻神様',
        '尻神样',
        '白水着',
        'white swimsuit',
        '腋',
        '腋下',
        'ロリ',
        '萝莉',
      ],
      ext: 'jpg',
      aiType: 0,
      uploadDate: 1640781743000,
      urls: {
        original:
          'https://i.pixiv.re/img-original/img/2021/12/29/21/42/23/95116399_p0.jpg',
      },
    },
  ],
};
