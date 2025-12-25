
import { Movie, TeamMember, Topic } from './types';

export const DOUBAN_GREEN = '#007722';
export const DOUBAN_LIGHT_GREEN = '#eef9eb';

export const MOCK_MOVIES: Movie[] = [
  { id: 'm1', title: '阿凡达：火与烬', rating: 7.6, director: '詹姆斯·卡梅隆', stars: ['萨姆·沃辛顿'], year: 2025, image: 'https://picsum.photos/seed/avatar3/200/280', description: '潘多拉星球的新传奇。' },
  { id: 'm2', title: '永恒族', rating: 7.2, director: '赵婷', stars: ['安吉丽娜·朱莉'], year: 2021, image: 'https://picsum.photos/seed/eternals/200/280', description: '漫威宇宙的古老守护者。' },
  { id: 'm3', title: '魔法坏女巫2', rating: 6.1, director: '朱浩伟', stars: ['辛西娅·艾莉佛'], year: 2025, image: 'https://picsum.photos/seed/wicked2/200/280', description: '奥兹国的秘密。' },
  { id: 'm4', title: '疯狂动物城2', rating: 8.4, director: '里奇·摩尔', stars: ['金妮弗·古德温'], year: 2025, image: 'https://picsum.photos/seed/zootopia2/200/280', description: '朱迪和尼克的新冒险。' },
  { id: 'm5', title: '得闲谨制', rating: 6.9, director: '兰晓龙', stars: ['肖战'], year: 2025, image: 'https://picsum.photos/seed/shaozhan/200/280', description: '近代史诗巨制。' },
  { id: 'm6', title: '控方证人', rating: 9.6, director: '比利·怀德', stars: ['泰隆·鲍华'], year: 1957, image: 'https://picsum.photos/seed/witness/200/280', description: '经典的法庭悬疑。' },
];

export const MOCK_TOPICS: Topic[] = [
  { id: 't1', title: '豆瓣2025我的年度报告', tag: '新', stats: '1.0万+篇内容 · 61.4万次浏览', image: 'https://picsum.photos/seed/t1/150/150', content: '分享你的年度记忆。' },
  { id: 't2', title: '豆瓣2025年度电影榜单', stats: '182篇内容 · 13.7万次浏览', image: 'https://picsum.photos/seed/t2/150/150', content: '影史留名的瞬间。' },
];

export const MOCK_GROUPS = [
  { title: '迷恋植物的人', members: '342373', img: 'https://picsum.photos/seed/plant/100/100' },
  { title: '口袋摄影', members: '142541', img: 'https://picsum.photos/seed/photo/100/100' },
  { title: '每天沉迷练字', members: '111590', img: 'https://picsum.photos/seed/calli/100/100' },
  { title: '养花种菜', members: '175334', img: 'https://picsum.photos/seed/garden/100/100' },
  { title: '爱你老己明天见', members: '5169', img: 'https://picsum.photos/seed/love/100/100' },
  { title: '歌手2025', members: '59551', img: 'https://picsum.photos/seed/singer/100/100' },
  { title: '考前emo小组', members: '131372', img: 'https://picsum.photos/seed/emo/100/100' },
  { title: '主体性复建计划', members: '32714', img: 'https://picsum.photos/seed/subject/100/100' },
  { title: '国产剧', members: '837284', img: 'https://picsum.photos/seed/drama/100/100' },
];

export const MOCK_BOOKS = [
  { title: '世界上最丑的女人', author: '[波兰] 奥尔...', img: 'https://picsum.photos/seed/b1/120/170' },
  { title: '天堂主题公园', author: '[美] 乔治...', img: 'https://picsum.photos/seed/b2/120/170' },
  { title: '忍不住想打扰你...', author: 'bibi园长', img: 'https://picsum.photos/seed/b3/120/170' },
  { title: '十二月十日', author: '[美] 乔治...', img: 'https://picsum.photos/seed/b4/120/170' },
];

export const MOCK_ALBUMS = [
  { title: '世界与孤独女王', artist: '祁紫檀', rating: '9.0', img: 'https://picsum.photos/seed/a1/100/100' },
  { title: '过客', artist: '范晓萱&100%', rating: '8.8', img: 'https://picsum.photos/seed/a2/100/100' },
  { title: '我们的样子', artist: '青春公共王国', rating: '8.5', img: 'https://picsum.photos/seed/a3/100/100' },
  { title: 'EUSEXUA Afterglow', artist: 'FKA twigs', rating: '8.6', img: 'https://picsum.photos/seed/a4/100/100' },
];
