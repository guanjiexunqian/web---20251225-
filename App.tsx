
import React, { useState } from 'react';
import { Search, User, Play, X, MessageSquare, Heart, Share2, Smartphone, QrCode, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MOCK_MOVIES, MOCK_TOPICS, MOCK_GROUPS, MOCK_BOOKS, MOCK_ALBUMS, DOUBAN_GREEN } from './constants';
import { Movie, Topic } from './types';

// --- Reusable Layout Components ---

const SectionHeader = ({ title, subtitle, extra }: { title: string, subtitle?: string, extra?: string }) => (
  <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-2">
    <h3 className="text-[#007722] font-bold text-xl">{title}</h3>
    {subtitle && <span className="text-gray-500 text-sm mt-1">{subtitle} · · · · · · <span className="text-[#37a] cursor-pointer hover:bg-[#37a] hover:text-white px-1 ml-1">( 更多 )</span></span>}
    {extra && <span className="text-gray-500 text-sm ml-auto cursor-pointer hover:text-[#37a]">{extra}</span>}
  </div>
);

const SidebarList = ({ title, items, extra }: { title: string, items: string[], extra?: string }) => (
  <div className="w-full md:w-64 flex-shrink-0">
    <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
      <h4 className="text-[#007722] font-bold text-sm">{title} · · · · · ·</h4>
      {extra && <span className="text-gray-500 text-[11px] cursor-pointer hover:text-white">{extra}</span>}
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-300 hover:text-white cursor-pointer flex gap-3">
          <span className="text-gray-500 w-4">{idx + 1}.</span>
          <span className="truncate">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Content Sections ---

const GroupSection = () => {
  const categories = ['新组', '追剧', '书影音', '人文', '闲趣', '兴趣', '生活', '美食', '家居', '体育运动', '宠物', '艺术', '科技', '情感', '科学自然', '学习', '校园', 'ACG', '职场', '理财'];
  return (
    <div className="bg-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-4 flex gap-16">
        <div className="w-32 hidden lg:block space-y-2">
          <h2 className="text-[#007722] text-2xl font-bold mb-6">小组</h2>
          {categories.map(c => (
            <p key={c} className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1 py-0.5">{c}</p>
          ))}
        </div>
        <div className="flex-1">
          <SectionHeader title="热门小组" subtitle="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {MOCK_GROUPS.map((g, i) => (
              <div key={i} className="flex gap-4 items-center group cursor-pointer">
                <img src={g.img} className="w-12 h-12 rounded border border-gray-800 group-hover:opacity-80" />
                <div>
                  <h4 className="text-sm text-[#37a] group-hover:bg-[#37a] group-hover:text-white px-1 inline-block">{g.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-1">{g.members} 个成员</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieSection = ({ onMovieClick }: { onMovieClick: (m: Movie) => void }) => {
  const list = ['利刃出鞘3', '链锯人 剧场版：蕾塞篇', '无可奈何', '人偶之家', '奇遇', '弗兰肯斯坦', '刺杀小说家2', '拯救地球', '铁血战士：杀戮之地', '普通事故'];
  return (
    <div className="bg-[#1a1a1a] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="w-32 hidden lg:block space-y-2">
          <h2 className="text-[#007722] text-2xl font-bold mb-6">电影</h2>
          {['影讯&购票', '选电影', '电视剧', '排行榜', '影评'].map(c => (
            <p key={c} className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1 py-0.5">{c}</p>
          ))}
        </div>
        <div className="flex-1">
          <SectionHeader title="正在热映" subtitle="" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
            {MOCK_MOVIES.map(m => (
              <div key={m.id} className="text-center group cursor-pointer" onClick={() => onMovieClick(m)}>
                <img src={m.image} className="w-full aspect-[2/3] object-cover rounded shadow-lg group-hover:scale-105 transition-transform" />
                <h4 className="text-xs text-white mt-3 truncate group-hover:text-[#37a]">{m.title}</h4>
                <div className="flex items-center justify-center gap-1 my-1">
                  <div className="flex text-orange-400 text-[9px]">★★★★★</div>
                  <span className="text-[10px] text-gray-400">{m.rating}</span>
                </div>
                <button className="bg-[#37a] text-white text-[10px] px-4 py-1.5 rounded-sm hover:bg-[#2c6aa1] mt-1">选座购票</button>
              </div>
            ))}
          </div>
        </div>
        <SidebarList title="近期热门" items={list} extra="( 更多 )" />
      </div>
    </div>
  );
};

const BookSection = () => {
  return (
    <div className="bg-[#1a1a1a] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="w-32 hidden lg:block space-y-2">
          <h2 className="text-[#007722] text-2xl font-bold mb-6">读书</h2>
          {['每月热门图书', '读书专题', '直播活动', '名家问答', '共读交流', '鉴书团'].map(c => (
            <p key={c} className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1 py-0.5">{c}</p>
          ))}
        </div>
        <div className="flex-1">
          <SectionHeader title="新书速递" subtitle="" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {MOCK_BOOKS.map((b, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <img src={b.img} className="w-full aspect-[3/4] object-cover rounded shadow group-hover:opacity-80 transition-opacity" />
                <h4 className="text-xs text-[#37a] mt-3 group-hover:bg-[#37a] group-hover:text-white inline-block px-1">{b.title}</h4>
                <p className="text-[10px] text-gray-500 mt-1">{b.author}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-64 space-y-8">
          <div>
            <h4 className="text-[#007722] font-bold text-sm mb-4 border-b border-gray-800 pb-2">热门标签 · · · · · · <span className="text-gray-500 font-normal text-xs">( 更多 )</span></h4>
            <div className="text-[11px] text-gray-400 leading-relaxed space-y-2">
              <p>[文学] 小说 随笔 日本文学 散文 诗歌 童话 名著 港台 更多</p>
              <p>[流行] 漫画 推理 绘本 科幻 青春 言情 奇幻 武侠 更多</p>
              <p>[文化] 历史 哲学 传记 设计 电影 建筑 回忆录 音乐 更多</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicSection = () => {
  return (
    <div className="bg-[#1a1a1a] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="w-32 hidden lg:block space-y-2">
          <h2 className="text-[#007722] text-2xl font-bold mb-6">音乐</h2>
          {['专题', '乐评', '豆瓣FM', '阿比鹿音乐奖'].map(c => (
            <p key={c} className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1 py-0.5">{c}</p>
          ))}
          <div className="pt-4 flex flex-col items-center gap-1 border-t border-gray-800 mt-4">
             <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">FM</div>
             <span className="text-gray-400 text-[10px]">豆瓣FM</span>
          </div>
        </div>
        <div className="flex-1">
          <SectionHeader title="豆瓣新碟榜" subtitle="" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
            {MOCK_ALBUMS.map((a, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <img src={a.img} className="w-full aspect-square object-cover rounded shadow group-hover:scale-105 transition-transform" />
                <h4 className="text-xs text-[#37a] mt-3 group-hover:bg-[#37a] group-hover:text-white inline-block px-1">{i+1}. {a.title}</h4>
                <p className="text-[10px] text-gray-500 mt-1">{a.artist}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                   <div className="flex text-orange-400 text-[8px]">★★★★★</div>
                   <span className="text-[9px] text-gray-400 font-bold">{a.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-64">
           <h4 className="text-[#007722] font-bold text-sm mb-4 border-b border-gray-800 pb-2">热门标签 · · · · · · <span className="text-gray-500 font-normal text-xs">( 更多 )</span></h4>
           <div className="text-[11px] text-gray-400 space-y-3">
              <p>[风格] OST 流行 民谣 pop indie Electronic Folk 摇滚 J-POP ...</p>
              <p>[艺术家] 周杰伦 王菲 陈奕迅 孙燕姿 五月天 陈绮贞 苏打绿 ...</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="bg-[#1a1a1a] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="w-32 hidden lg:block space-y-2">
          <h2 className="text-[#007722] text-2xl font-bold mb-6">豆品</h2>
          {['全部商品', '豆瓣经典', '家居生活', '外出旅行', '文具小物'].map(c => (
            <p key={c} className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1 py-0.5">{c}</p>
          ))}
        </div>
        <div className="flex-1">
          <SectionHeader title="热卖商品" subtitle="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="group cursor-pointer">
              <img src="https://picsum.photos/seed/blanket/400/300" className="w-full aspect-[4/3] object-cover rounded shadow-xl" />
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-sm text-white group-hover:text-[#37a]">豆瓣豆品“合法休息”半边绒盖毯</h4>
                <span className="text-red-500 font-bold">￥118</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <img src="https://picsum.photos/seed/notebook/400/300" className="w-full aspect-[4/3] object-cover rounded shadow-xl" />
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-sm text-white group-hover:text-[#37a]">豆瓣2025日程本 碧树新程</h4>
                <span className="text-red-500 font-bold">￥60</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-64 space-y-8">
           <div className="bg-gray-800/20 p-4 rounded border border-gray-800">
              <h4 className="text-[#007722] font-bold text-sm mb-4">热门活动 · · · · · ·</h4>
              <img src="https://picsum.photos/seed/activity/300/150" className="w-full rounded mb-3" />
              <p className="text-[11px] text-gray-400">收集在全世界的豆品</p>
           </div>
           <div>
              <h4 className="text-[#007722] font-bold text-sm mb-4 border-b border-gray-800 pb-2">官方小组 · · · · · · <span className="text-gray-500 text-xs">( 更多 )</span></h4>
              <div className="space-y-4 text-[11px]">
                 <p className="text-[#37a] cursor-pointer hover:underline">首发优惠券膨胀活动已结束...</p>
                 <p className="text-[#37a] cursor-pointer hover:underline">豆瓣2025日程本“碧树新程”上新</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const TopUtilityBar = () => (
  <div className="bg-[#111] h-8 flex items-center justify-between px-4 text-gray-400 text-[11px]">
    <div className="flex items-center gap-6">
      <span className="font-bold text-white tracking-widest text-sm italic cursor-pointer">douban</span>
      <div className="flex gap-4">
        {['读书', '电影', '音乐', '同城', '小组', '阅读', '时间', '豆品'].map(i => (
          <span key={i} className="cursor-pointer hover:text-white">{i}</span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4">
      <span className="cursor-pointer hover:text-white">下载豆瓣客户端</span>
      <span className="cursor-pointer hover:text-white">登录/注册</span>
    </div>
  </div>
);

const MainHeader = () => (
  <header className="bg-[#f0f3f5] py-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
    <div className="flex items-center gap-10">
      <h1 className="text-2xl font-bold text-[#007722] cursor-pointer">豆瓣电影</h1>
      <div className="flex relative items-center shadow-sm">
        <input type="text" placeholder="搜索电影、电视剧、综艺、影人" className="w-80 md:w-96 px-3 py-1.5 text-xs bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#007722] rounded-l-sm" />
        <button className="bg-gray-400 px-3 py-1.5 rounded-r-sm hover:bg-gray-300"><Search size={14} className="text-[#2c2c2c]" /></button>
      </div>
    </div>
  </header>
);

const HeroSection = () => {
  const [loginTab, setLoginTab] = useState<'sms' | 'pwd'>('sms');
  return (
    <div className="bg-[#2c2c2c] py-14 flex flex-col lg:flex-row items-center justify-center gap-16 border-b border-gray-800">
      <img src="https://img3.doubanio.com/f/sns/0f9e2dbddcc8185790409a8f949826c36ed5771d/pics/sns/anony_home/app_installation.png" className="max-w-[320px]" />
      <div className="bg-white/5 p-8 rounded-xl w-full max-w-sm border border-white/10">
        <div className="flex border-b border-white/10 mb-8">
          <button onClick={() => setLoginTab('sms')} className={`flex-1 pb-4 text-sm font-semibold transition-all ${loginTab === 'sms' ? 'text-[#007722] border-b-2 border-[#007722]' : 'text-gray-400'}`}>短信登录/注册</button>
          <button onClick={() => setLoginTab('pwd')} className={`flex-1 pb-4 text-sm font-semibold transition-all ${loginTab === 'pwd' ? 'text-[#007722] border-b-2 border-[#007722]' : 'text-gray-400'}`}>密码登录</button>
        </div>
        <div className="space-y-4">
          <input type="text" placeholder="手机号" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm" />
          <input type="text" placeholder="验证码" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm" />
          <button className="w-full bg-[#007722] py-3.5 rounded-lg text-white font-bold hover:bg-[#008822]">登录豆瓣</button>
        </div>
      </div>
    </div>
  );
};

const TopicDetailModal = ({ topic, onClose }: { topic: Topic | null, onClose: () => void }) => {
  if (!topic) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 bg-white/90 rounded-full p-2 z-20"><X size={20} /></button>
        <div className="h-48 bg-[#eef9eb] flex items-center justify-center relative overflow-hidden">
          <img src={topic.image} className="w-full h-full object-cover opacity-30 absolute inset-0" />
          <h2 className="text-3xl font-black text-gray-900 relative z-10">{topic.title}</h2>
        </div>
        <div className="p-10 space-y-6">
          <p className="text-gray-700 italic border-l-4 border-[#007722] pl-6">"{topic.content}"</p>
          <button onClick={onClose} className="bg-[#007722] text-white px-8 py-3 rounded-2xl text-sm font-black w-full">立即参与话题</button>
        </div>
      </div>
    </div>
  );
};

const MovieDetailModal = ({ movie, onClose }: { movie: Movie | null, onClose: () => void }) => {
  if (!movie) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col md:flex-row relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 bg-white/80 rounded-full p-2 z-10"><X size={22} /></button>
        <img src={movie.image} className="w-full md:w-80 object-cover" />
        <div className="flex-1 p-10 space-y-6 overflow-y-auto max-h-[85vh]">
          <h2 className="text-3xl font-extrabold text-gray-900">{movie.title} <span className="text-gray-300 font-light">({movie.year})</span></h2>
          <div className="text-orange-400 font-black text-3xl">{movie.rating} <span className="text-xs text-gray-400 font-normal">/ 10</span></div>
          <p className="text-sm text-gray-600 leading-8">{movie.description}</p>
          <div className="flex gap-4">
             <button className="flex-1 bg-[#007722] text-white py-3.5 rounded-xl font-bold">想看</button>
             <button className="flex-1 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold border border-gray-200">看过</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans select-none">
      <TopUtilityBar />
      <MainHeader />
      <HeroSection />
      
      <main className="flex-1">
        {/* Top Hot Content Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-12">
            <SectionHeader title="热点内容" subtitle="" />
            <div className="space-y-12">
              {MOCK_MOVIES.slice(0, 3).map((movie) => (
                <div key={movie.id} onClick={() => setSelectedMovie(movie)} className="flex gap-8 group cursor-pointer border-b border-gray-50 pb-10">
                  <img src={movie.image} className="w-48 h-32 object-cover rounded shadow-sm" />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-bold text-[#37a] group-hover:bg-[#37a] group-hover:text-white inline-block px-1">{movie.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2 italic">"{movie.description}"</p>
                    <div className="flex items-center gap-6 text-[11px] text-gray-400 pt-2">
                      <span className="flex items-center gap-1"><MessageSquare size={12} /> 13 回应</span>
                      <span className="flex items-center gap-1"><Heart size={12} /> 285 赞</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[320px] space-y-12">
            <SectionHeader title="热门话题" extra="去话题广场" />
            <div className="space-y-6">
              {MOCK_TOPICS.map((topic) => (
                <div key={topic.id} onClick={() => setSelectedTopic(topic)} className="flex gap-4 group cursor-pointer">
                  <img src={topic.image} className="w-16 h-16 rounded border border-gray-100 shadow-sm object-cover" />
                  <div className="flex-1">
                    <span className="text-sm text-[#37a] hover:bg-[#37a] hover:text-white px-0.5 font-medium">{topic.title}</span>
                    {topic.tag && <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold ml-2">{topic.tag}</span>}
                    <p className="text-[11px] text-gray-400 mt-1">{topic.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Following Sections in specific order */}
        <GroupSection />
        <MovieSection onMovieClick={setSelectedMovie} />
        <BookSection />
        <MusicSection />
        <ProductSection />
      </main>

      <footer className="bg-[#1a1a1a] py-16 px-4 text-white/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-xs">
          <p>© 2005－2025 douban.com, all rights reserved 北京豆网科技有限公司</p>
          <div className="flex gap-8 text-gray-400">
            {['关于豆瓣', '在豆瓣工作', '联系我们', '法律声明', '帮助中心', '移动应用', '豆瓣广告'].map(i => (
              <span key={i} className="hover:text-white cursor-pointer">{i}</span>
            ))}
          </div>
        </div>
      </footer>

      <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      <TopicDetailModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
    </div>
  );
}
