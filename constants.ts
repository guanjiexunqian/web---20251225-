
import { Movie, TeamMember, Topic, SelectedContentItem } from './types';

export const DOUBAN_GREEN = '#007722';
export const DOUBAN_LIGHT_GREEN = '#eef9eb';

// Manual recording of 10 movies as requested for the final project
export const MOCK_MOVIES: Movie[] = [
  { 
    id: 'm1', 
    title: '阿凡达：火与烬', 
    rating: 7.6, 
    director: '詹姆斯·卡梅隆', 
    stars: ['萨姆·沃辛顿', '佐伊·索尔达娜'], 
    year: 2025, 
    image: 'https://picsum.photos/seed/avatar3/200/280', 
    description: '潘多拉星球的新传奇，纳威人将面对前所未有的火焰部族挑战。' 
  },
  { 
    id: 'm2', 
    title: '肖申克的救赎', 
    rating: 9.7, 
    director: '弗兰克·德拉邦特', 
    stars: ['蒂姆·罗宾斯', '摩根·弗里曼'], 
    year: 1994, 
    image: 'https://picsum.photos/seed/shawshank/200/280', 
    description: '希望让人自由。影史永恒经典，关于信念与救赎的伟大篇章。' 
  },
  { 
    id: 'm3', 
    title: '魔法坏女巫2', 
    rating: 6.1, 
    director: '朱浩伟', 
    stars: ['辛西娅·艾莉佛', '爱莉安娜·格兰德'], 
    year: 2025, 
    image: 'https://picsum.photos/seed/wicked2/200/280', 
    description: '奥兹国的秘密即将揭晓，艾尔芙巴与格琳达的命运纠葛。' 
  },
  { 
    id: 'm4', 
    title: '疯狂动物城2', 
    rating: 8.4, 
    director: '里奇·摩尔', 
    stars: ['金妮弗·古德温', '杰森·贝特曼'], 
    year: 2025, 
    image: 'https://picsum.photos/seed/zootopia2/200/280', 
    description: '朱迪和尼克的新冒险，揭开动物城更深层的谜团。' 
  },
  { 
    id: 'm5', 
    title: '得闲谨制', 
    rating: 6.9, 
    director: '兰晓龙', 
    stars: ['肖战', '周依然'], 
    year: 2025, 
    image: 'https://picsum.photos/seed/shaozhan/200/280', 
    description: '近代史诗巨制，讲述小人物在时代洪流中的坚守。' 
  },
  { 
    id: 'm6', 
    title: '控方证人', 
    rating: 9.6, 
    director: '比利·怀德', 
    stars: ['泰隆·鲍华', '玛琳·黛德丽'], 
    year: 1957, 
    image: 'https://picsum.photos/seed/witness/200/280', 
    description: '经典的法庭悬疑片，结尾反转足以载入影史。' 
  },
  { 
    id: 'm7', 
    title: '星际穿越', 
    rating: 9.4, 
    director: '克里斯托弗·诺兰', 
    stars: ['马修·麦康纳', '安妮·海瑟薇'], 
    year: 2014, 
    image: 'https://picsum.photos/seed/interstellar/200/280', 
    description: '爱是唯一可以超越时间与空间的事物。硬科幻的巅峰之作。' 
  },
  { 
    id: 'm8', 
    title: '霸王别姬', 
    rating: 9.6, 
    director: '陈凯歌', 
    stars: ['张国荣', '张丰毅', '巩俐'], 
    year: 1993, 
    image: 'https://picsum.photos/seed/farewell/200/280', 
    description: '风华绝代，不疯魔不成活。中国电影史上的巅峰。' 
  },
  { 
    id: 'm9', 
    title: '沙丘2', 
    rating: 8.3, 
    director: '丹尼斯·维伦纽瓦', 
    stars: ['提莫西·查拉梅', '赞达亚'], 
    year: 2024, 
    image: 'https://picsum.photos/seed/dune2/200/280', 
    description: '天选之子的复仇之路，宏大的科幻史诗视觉盛宴。' 
  },
  { 
    id: 'm10', 
    title: '千与千寻', 
    rating: 9.4, 
    director: '宫崎骏', 
    stars: ['柊瑠美', '入野自由'], 
    year: 2001, 
    image: 'https://picsum.photos/seed/spirited/200/280', 
    description: '不要忘记你的名字。宫崎骏献给孩子和大人的童话。' 
  }
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

export const MOCK_TIME = [
  { title: '讲给孩子的中国艺术', type: '专栏', img: 'https://picsum.photos/seed/time1/100/140' },
  { title: '听见万物：自然的声音', type: '音频', img: 'https://picsum.photos/seed/time2/100/140' },
  { title: '每天10分钟，重塑专注力', type: '课程', img: 'https://picsum.photos/seed/time3/100/140' },
  { title: '宋朝美学十讲', type: '视频', img: 'https://picsum.photos/seed/time4/100/140' },
  { title: '我的写作课', type: '专栏', img: 'https://picsum.photos/seed/time5/100/140' },
];

export const MOCK_CITY = [
  { title: '2025 北京草莓音乐节', info: '3月15日 - 3月17日 北京', img: 'https://picsum.photos/seed/city1/100/140' },
  { title: '经典话剧《茶馆》', info: '4月1日 - 4月5日 首都剧场', img: 'https://picsum.photos/seed/city2/100/140' },
  { title: '“穿越时空”沉浸式艺术展', info: '常设展览 798艺术区', img: 'https://picsum.photos/seed/city3/100/140' },
  { title: '周杰伦嘉年华演唱会', info: '5月20日 鸟巢', img: 'https://picsum.photos/seed/city4/100/140' },
  { title: '独立电影展映周', info: '本周六日 中国电影资料馆', img: 'https://picsum.photos/seed/city5/100/140' },
];

// Rich, long-form content for the main feed
export const MOCK_SELECTED_CONTENT: SelectedContentItem[] = [
  {
    id: 'sc1',
    source: '来自：豆瓣日记',
    author: { name: 'W TENG', avatar: 'https://picsum.photos/seed/u1/40/40' },
    title: '分享下2025年值得的几次消费',
    preview: '1 约35元 棉质睡帽 小时候看动画片，唐老鸭经常要带着睡帽睡觉。我认为这是一个非常“美国”的习惯，我又好奇，又难以理解。今年再也无法忍受广州的空调，经常被风吹到偏头痛。于是在淘宝上买了一顶睡帽，身处空调房内都会戴上，有效制止了半夜被冻醒起来和空调搏斗的睡眠问题。同时，秋冬季节我也喜欢戴着它，形态非常好看了，当头部处于温暖的包裹感时，我的全部身体都充满了承载力。2 约15元 木质三角雀 今年更注重健身康复这一块，朋友送了我一个木质三角雀，用后觉得非常爽，又买了两单送其他朋友。首先它非常小，我出差时也带着...',
    stats: '53回应 395赞 67转发',
    image: undefined
  },
  {
    id: 'sc2',
    source: '来自：豆瓣日记',
    author: { name: '晓林7777', avatar: 'https://picsum.photos/seed/u2/40/40' },
    title: '无人可怪的绝望感真的很爽——2025年终总结',
    preview: '离婚已经一年半了，这个期间我经历了买房、装修、搬家、换单位，适应妈妈来家里帮忙。说来惭愧，掰着指头说出来的几件事，其实都是平平无奇的一些小事。以前常常觉得微小而琐碎的生活不值得记录，后来才明白对于普通人而言，有且仅有的只有微小。假如自己都看不起自己的微小生活，我们还能言说什么呢？我们将被消音，被代表，被遗忘，就像从未存在过一样消失在茫茫然的暮色大地中。我不想轻易错过这个普通人也能言说的时代，更何况没有人比我自己更能说得清我自己。至于言说得好坏，那就是个人能力问题了。为此，我一直在学习...',
    stats: '97回应 527赞 26转发',
    image: 'https://picsum.photos/seed/room/200/150'
  },
  {
    id: 'sc3',
    source: '来自：豆瓣小组',
    author: { name: '.', avatar: 'https://picsum.photos/seed/u3/40/40' },
    title: '根本不需要充分利用每一分钟',
    preview: '在无数次尝试通过看剧来学习外语后，我放弃了。我以前对于我吃饭和休息时间没有用来回忆当天所学的内容这件事是抱有极大的愧疚感的，好像这样就浪费了很多所谓的碎片时间，又不够努力了。最开始我是抱着很美好的幻想来看待看剧学习外语这件事，既有娱乐性还能轻松学习一些地道表达&单词。结果到最后这变成了一种折磨，我本来没有看美剧or英剧的习惯，就算是让我以娱乐为目的看我都很难看下去，何况是要边看边学；第二...',
    stats: '23回应 170赞 17转发',
    image: undefined
  },
  {
    id: 'sc4',
    source: '来自：电影',
    author: { name: '影迷阿飞', avatar: 'https://picsum.photos/seed/u4/40/40' },
    title: '那些在电影院里落泪的瞬间',
    preview: '昨天重温了《星际穿越》，再次被库珀在四维空间里的那段戏击中。影院里一片寂静，只有隐约的啜泣声。电影最迷人的地方，或许就在于它能构建一个安全的空间，让我们释放平日里被压抑的情绪。记得第一次看《寻梦环游记》时，也是哭得稀里哗啦。那些关于遗忘与记忆的探讨，直击人心最柔软的地方。我们都需要这样的时刻，在黑暗中，与银幕上的故事共情，完成一次心灵的洗礼。',
    stats: '128回应 1024赞 89转发',
    image: 'https://picsum.photos/seed/cinema/200/150'
  }
];

export const MOCK_SIDEBAR_TOPICS_LIST = [
  { text: '一起听播客', tag: '新', count: '1690篇内容 · 1.3万次浏览' },
  { text: '豆瓣2025我的年度报告', count: '1.0万+篇内容 · 400.0万次浏览' },
  { text: '晒晒我的2025年度称号', tag: '新', count: '500篇内容 · 1.3万次浏览' },
  { text: '遗憾的事，后来都成了命运的馈赠吗', count: '434篇内容 · 20.8万次浏览' },
  { text: '美剧《杰克·莱恩》神预言委内瑞拉事件', count: '51篇内容 · 12.2万次浏览' },
  { text: '这些日常瞬间让我格外珍惜', count: '100篇内容 · 1.2万次浏览' },
  { text: '白鲸曾想杀死自己的训练师', count: '1667篇内容 · 16.5万次浏览' },
  { text: '上班后，我还是没戒掉那些“幼稚”的小习惯', count: '362篇内容 · 100.2万次浏览' },
];

export const MOCK_RUMOR_CRUSHER = [
  { title: '车厘子含褪黑素能助眠是误区——今日辟谣 (2026年1月6日)' },
  { title: '自来水“余氯超标”，烧开水时加“茶叶”能去除？' },
  { title: '注意！这些谣言勿传勿信！' },
  { title: '禁毒部门回应“奶茶等于准毒品”说法不实——今日辟谣 (2026年1月5日)' },
  { title: '喝苹果醋就能“甩肉”？' },
];
