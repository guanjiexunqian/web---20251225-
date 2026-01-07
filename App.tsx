
import React, { useState } from 'react';
import { Search, User, Play, X, MessageSquare, Heart, Share2, Smartphone, QrCode, ChevronLeft, ChevronRight, Star, Scissors, Printer } from 'lucide-react';
import { MOCK_MOVIES, MOCK_TOPICS, MOCK_GROUPS, MOCK_BOOKS, MOCK_ALBUMS, DOUBAN_GREEN, MOCK_SELECTED_CONTENT, MOCK_SIDEBAR_TOPICS_LIST, MOCK_RUMOR_CRUSHER, MOCK_TIME, MOCK_CITY } from './constants';
import { Movie, Topic } from './types';

// --- Global Styles & CSS Variables ---
const DoubanStyles = () => (
  <style>{`
    :root {
      --douban-green: #42bd56;
      --douban-dark-green: #007722;
      --douban-blue: #37a;
      --douban-bg: #111111; /* Deep charcoal, not pure black */
      --douban-bg-light: #1c1c1c;
      --text-title: #eee;
      --text-body: #d5d5d5;
      --text-aux: #888;
      --douban-ticket-blue: #258dcd;
      
      /* Section Brand Colors */
      --color-movie: #258dcd;
      --color-book: #9b7c5e;
      --color-music: #f58c1f;
      --color-group: #007982; 
      --color-time: #ef4623;
      --color-city: #964;
    }
    
    body {
      background-color: var(--douban-bg);
      color: var(--text-body);
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 13px; /* Strict 13px base */
      line-height: 1.62;
      -webkit-font-smoothing: antialiased;
    }

    /* 核心布局容器：1040px 居中 */
    .douban-global-width {
      width: 1040px;
      margin: 0 auto;
      position: relative;
    }

    /* 细腻的过渡效果 */
    .douban-ease {
      transition: all 0.2s ease-in-out;
    }

    /* 豆瓣经典的链接交互 */
    a, .douban-link {
      color: var(--douban-blue);
      text-decoration: none;
      cursor: pointer;
      border-radius: 2px;
    }

    a:hover, .douban-link:hover {
      color: #fff;
      background-color: var(--douban-blue);
    }
    
    /* 顶部导航纯文字链接 */
    .nav-link {
      color: #d5d5d5;
      text-decoration: none;
      cursor: pointer;
    }
    .nav-link:hover {
      color: #fff;
    }

    /* 标题样式 */
    .section-title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 0;
    }

    .text-aux {
      color: var(--text-aux);
    }
    
    /* 电影海报固定尺寸 */
    .movie-poster {
        width: 100px;
        height: 142px;
        object-fit: cover;
    }
    
    /* 购票按钮 */
    .ticket-btn {
        background-color: var(--douban-ticket-blue);
        color: white;
        border-radius: 2px;
        font-size: 11px;
        padding: 2px 10px;
        display: inline-block;
        line-height: 1.5;
    }
    .ticket-btn:hover {
        background-color: #1c7cae;
        color: white;
    }

    /* 分割线样式 */
    .section-separator {
        border-bottom: 1px dashed #333;
        padding-bottom: 40px;
        margin-bottom: 40px;
    }
  `}</style>
);

// --- SVG Components ---
const DoubanLogoSVG = () => (
  <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded">
    <rect width="50" height="50" rx="8" fill="#42bd56"/>
    <path d="M12 21H38V37H12V21Z" fill="white"/>
    <path d="M15 24H35V34H15V24Z" fill="#42bd56"/>
    <path d="M12 11H38V15H12V11Z" fill="white"/>
    <path d="M23 15V21H27V15H23Z" fill="white"/>
  </svg>
);

// --- Reusable Layout Components ---
const SectionHeader = ({ 
  title, 
  subtitle, 
  extra, 
  colorCode = '#eee',
  items 
}: { 
  title: string, 
  subtitle?: string, 
  extra?: string, 
  colorCode?: string,
  items?: string[]
}) => (
  <div className="flex items-start gap-6 mb-5">
    <div className="w-[100px] flex-shrink-0 pt-1">
        <h2 className="section-title" style={{ color: colorCode }}>
          {title}
        </h2>
    </div>
    <div className="flex-1 pt-2 border-b border-[#333] pb-2 flex items-baseline justify-between">
        <div className="flex gap-4 items-center">
            {items && items.map((item, idx) => (
                <span key={idx} className="text-[13px] cursor-pointer hover:bg-[#37a] hover:text-white px-1 rounded-sm transition-colors" style={{color: idx === 0 ? 'inherit' : '#37a'}}>
                    {item}
                </span>
            ))}
        </div>
        {extra && (
            <span 
              className="text-xs px-1 ml-auto cursor-pointer hover:text-white hover:bg-[var(--hover-bg)] rounded-sm"
              style={{ color: colorCode, '--hover-bg': colorCode } as React.CSSProperties}
            >
                {extra}
            </span>
        )}
    </div>
  </div>
);

const SidebarList = ({ title, items, extra, color = '#eee' }: { title: string, items: string[], extra?: string, color?: string }) => (
  <div className="w-[300px] flex-shrink-0">
    <div className="flex items-baseline justify-between mb-2 pb-1 border-b border-[#333]">
      <h4 className="text-[14px]" style={{ color: color }}>{title}</h4>
      {extra && (
        <span 
            className="text-xs px-1 cursor-pointer hover:text-white hover:bg-[var(--hover-bg)] rounded-sm"
            style={{ color: color, '--hover-bg': color } as React.CSSProperties}
        >
            {extra}
        </span>
      )}
    </div>
    <ul className="space-y-1.5 mt-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-[13px] flex gap-2">
          <span className="text-aux font-mono text-xs pt-0.5">{idx + 1}.</span>
          <span className="douban-link truncate w-full px-1">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Header Components ---
const TopUtilityBar = () => (
  <div className="w-full bg-[#1e1e1e] h-[30px] border-b border-[#252525]">
    <div className="douban-global-width h-full flex items-center justify-between text-[#d5d5d5] text-[12px]">
      <div className="flex items-center gap-3">
        {['豆瓣', '读书', '电影', '音乐', '同城', '小组', '阅读', 'FM', '时间', '豆品'].map((i, idx) => (
          <span key={i} className={`cursor-pointer nav-link px-1 ${idx === 2 ? 'text-white' : ''}`}>{i}</span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="cursor-pointer nav-link">下载豆瓣客户端</span>
        <span className="cursor-pointer nav-link">登录/注册</span>
      </div>
    </div>
  </div>
);

const SiteHeader = () => (
  <div className="bg-[#1c1c1c] py-6 w-full">
    <div className="douban-global-width flex items-center gap-6">
      <a href="#" className="flex-shrink-0" aria-label="豆瓣首页">
         <div className="text-[#42bd56] font-bold text-3xl tracking-tighter flex items-center gap-2">
            douban<span className="bg-[#42bd56] text-white text-xs px-1 py-0.5 rounded-sm font-normal tracking-normal">movie</span>
         </div>
      </a>
      
      <div className="flex relative items-center shadow-inner">
        <input 
          type="text" 
          placeholder="搜索电影、电视剧、综艺、影人" 
          className="w-[460px] h-[32px] px-3 text-[13px] bg-white text-[#111] rounded-l-sm border-none focus:outline-none placeholder-gray-400" 
        />
        <button className="w-[36px] h-[32px] bg-[#888] rounded-r-sm flex items-center justify-center cursor-pointer hover:bg-[#777]">
            <Search size={16} className="text-white" />
        </button>
      </div>
    </div>
  </div>
);

const PromoBanner = () => {
  return (
    <div className="relative w-full h-[180px] mb-10 border-t border-[#333] overflow-hidden" 
         style={{ background: 'linear-gradient(to bottom, #1a2c1a 0%, #111111 100%)' }}>
      
      {/* Background Image Overlay for Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" 
           style={{ 
             backgroundImage: 'url(https://img3.doubanio.com/f/shire/4bf31d9a20227183e206253c306540c4974c0a52/pics/nav/login_bg_new.png)',
             backgroundPosition: 'center top',
             backgroundRepeat: 'no-repeat'
           }}>
      </div>

      <div className="douban-global-width h-full relative flex items-center justify-between z-10">
        
        {/* Left: App Promo */}
        <div className="flex items-start gap-4 h-[120px] pt-4">
           {/* Phone Image Placeholder */}
           <div className="w-[130px] h-[160px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(https://img3.doubanio.com/f/shire/852b66289b720138986c75333e66f272c72b5358/pics/nav/douban_app_ad.png)' }}>
           </div>
           
           <div className="mt-2">
              <h2 className="text-[25px] text-white font-bold m-0 leading-tight">豆瓣 7.0</h2>
              <div className="mt-4">
                  <button className="bg-[#00b51d] hover:bg-[#00a61b] text-white text-[12px] px-3 py-2 rounded-[2px] font-bold cursor-pointer transition-colors leading-none">
                    下载豆瓣 App
                  </button>
                  <div className="mt-2 bg-[#00b51d] text-white text-[11px] px-2 py-0.5 rounded-[2px] inline-block bg-opacity-20 border border-[#00b51d]">
                    2024 年度榜单
                  </div>
              </div>
           </div>
        </div>

        {/* Right: Login Component */}
        <div className="w-[300px]">
           <div className="flex text-[13px] border-b border-white/20 pb-1 mb-3">
              <span className="flex-1 text-center text-white font-bold cursor-pointer pb-2 border-b-2 border-white">短信登录/注册</span>
              <span className="flex-1 text-center text-white/60 cursor-pointer hover:text-white pb-2">密码登录</span>
           </div>
           
           <div className="space-y-3">
              <div className="flex items-center h-[34px] bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-[2px]">
                 <span className="text-white font-bold px-3 border-r border-white/20 text-[13px]">+86</span>
                 <input type="text" placeholder="手机号" className="bg-transparent border-none text-white text-[13px] px-2 focus:outline-none w-full placeholder-white/40 h-full"/>
              </div>
              
              <div className="flex items-center h-[34px] bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-[2px] pr-2">
                 <input type="text" placeholder="验证码" className="bg-transparent border-none text-white text-[13px] px-3 focus:outline-none w-full placeholder-white/40 h-full"/>
                 <span className="text-[#42bd56] text-[13px] cursor-pointer hover:text-white whitespace-nowrap pl-2 border-l border-white/10 py-1">获取验证码</span>
              </div>
              
              <button className="w-full h-[34px] bg-[#42bd56] text-white text-[14px] font-bold rounded-[2px] hover:bg-[#3aa34a] mt-2 flex items-center justify-center">
                 登录豆瓣
              </button>
              
              <div className="flex justify-end text-[12px] text-white/60">
                 <span className="cursor-pointer hover:text-white">海外手机登录</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

// --- Content Sections ---

// Refactored "Selected Content" Section
const SelectedContentSection = () => {
  return (
    <div className="douban-global-width section-separator flex justify-between">
        {/* Left Column: Feed (675px) */}
        <div className="w-[675px]">
             <div className="flex items-baseline justify-between mb-3 border-b border-[#333] pb-2">
                 <h3 className="section-title text-[15px] text-[#007722]">精选内容 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#37a] hover:text-white px-1 ml-2 text-[#37a]">( 更多 )</span></h3>
             </div>
             
             <div className="pt-2">
                 {MOCK_SELECTED_CONTENT.map((item, idx) => (
                    <div key={item.id} className="mb-[30px] border-b border-[#222] border-dashed pb-[25px] last:border-0">
                         {/* Header Info */}
                         <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[12px] text-[#aaa]">{item.source}</span>
                         </div>
                         <div className="flex items-center gap-2 mb-1.5">
                             <img src={item.author.avatar} className="w-[18px] h-[18px] rounded-sm" />
                             <span className="text-[#37a] text-[13px] hover:bg-[#37a] hover:text-white px-0.5 cursor-pointer">{item.author.name}</span>
                         </div>

                         {/* Title */}
                         <h3 className="text-[16px] text-[#37a] cursor-pointer hover:bg-[#37a] hover:text-white inline-block px-1 -ml-1 mb-2 font-normal leading-tight">
                            {item.title}
                         </h3>
                         
                         {/* Body */}
                         <div className="flex gap-5">
                             <div className="flex-1">
                                <p className="text-[13px] text-[#aaa] leading-[1.62] text-justify">
                                    {item.preview}
                                </p>
                             </div>
                             {item.image && (
                                 <div className="flex-shrink-0 w-[100px] h-[100px]">
                                     <img src={item.image} className="w-full h-full object-cover" />
                                 </div>
                             )}
                         </div>
                         
                         {/* Stats */}
                         <div className="mt-2 text-[12px] text-[#aaa]">
                            {item.stats}
                         </div>
                    </div>
                 ))}
             </div>
        </div>

        {/* Right Sidebar (300px) */}
        <div className="w-[300px]">
             {/* Ad Placeholder */}
             <div className="w-full h-[90px] bg-[#222] mb-8 flex items-center justify-center text-aux text-xs border border-[#333] cursor-pointer hover:opacity-80 transition-opacity">
                [广告] 一刻听播客
             </div>

             {/* Popular Topics */}
             <div className="mb-8">
                <div className="flex items-baseline justify-between mb-2 pb-1 border-b border-[#333]">
                  <h4 className="text-[14px] text-[#aaa]">热门话题</h4>
                  <span className="text-xs douban-link px-1">去话题广场</span>
                </div>
                <ul className="space-y-3 mt-2">
                  {MOCK_SIDEBAR_TOPICS_LIST.map((topic, idx) => (
                    <li key={idx} className="text-[13px]">
                      <div className="mb-0.5 flex items-center flex-wrap gap-1">
                        <span className="douban-link">{topic.text}</span>
                        {topic.tag && <span className="text-[11px] bg-[#ff4d4d] text-white px-1 rounded-sm scale-90 origin-left">新</span>}
                      </div>
                      <div className="text-aux text-[12px]">{topic.count}</div>
                    </li>
                  ))}
                </ul>
             </div>
             
             {/* Douban Zones / Rumor Crusher */}
             <div>
                <div className="flex items-baseline justify-between mb-2 pb-1 border-b border-[#333]">
                  <h4 className="text-[14px] text-[#42bd56]">豆瓣专区</h4>
                </div>
                <ul className="space-y-2 mt-2">
                  {MOCK_RUMOR_CRUSHER.map((item, idx) => (
                    <li key={idx} className="text-[13px]">
                        <span className="douban-link leading-normal text-[#d5d5d5]">{item.title}</span>
                    </li>
                  ))}
                </ul>
             </div>
        </div>
    </div>
  );
};

const MovieSection = ({ onMovieClick }: { onMovieClick: (m: Movie) => void }) => {
  const rankingList = [
    { title: '利刃出鞘3', rating: 7.5, img: 'https://picsum.photos/seed/knives/60/80' },
    { title: '链锯人 剧场版', rating: 8.8 },
    { title: '无可奈何', rating: 6.9 },
    { title: '人偶之家', rating: 7.2 },
    { title: '奇遇', rating: 8.1 },
    { title: '弗兰肯斯坦', rating: 9.0 },
    { title: '刺杀小说家2', rating: 6.5 },
    { title: '拯救地球', rating: 5.4 },
    { title: '铁血战士', rating: 7.0 },
    { title: '普通事故', rating: 6.8 },
  ];
  const categories = ['影讯&购票', '选电影', '电视剧', '排行榜', '影评', '2024年度榜单', '2024年度报告'];
  const movieColor = "#258dcd";

  return (
    <div className="douban-global-width section-separator">
      <SectionHeader 
        title="电影" 
        colorCode={movieColor}
        items={categories}
        extra="更多»"
      />
      
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-[16px]" style={{color: movieColor}}>正在热映 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#258dcd] hover:text-white px-1 ml-2 text-[#258dcd]">( 更多 )</span></h3>
              <span className="text-xs px-1 cursor-pointer hover:bg-[#258dcd] hover:text-white rounded-sm" style={{color: movieColor}}>全部正在热映»</span>
          </div>
          {/* Main 5-Column Grid */}
          <div className="grid grid-cols-5 gap-y-8 gap-x-5">
            {MOCK_MOVIES.slice(0, 10).map(m => (
              <div key={m.id} className="flex flex-col items-center group cursor-pointer" onClick={() => onMovieClick(m)}>
                <div className="w-[100px] h-[142px] mb-2 shadow-md overflow-hidden bg-[#222] flex-shrink-0">
                  <img src={m.image} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={m.title}/>
                </div>
                
                <h4 className="text-[13px] text-[#37a] text-center w-[100px] truncate group-hover:bg-[#37a] group-hover:text-white px-0.5 leading-tight mb-1" title={m.title}>
                    {m.title}
                </h4>
                
                <div className="flex items-center justify-center gap-1 mb-1">
                   <div className="flex text-[11px] text-[#e09015] gap-[1px]">
                     <Star size={10} fill="#e09015" strokeWidth={0}/>
                     <Star size={10} fill="#e09015" strokeWidth={0}/>
                     <Star size={10} fill="#e09015" strokeWidth={0}/>
                     <Star size={10} fill="#e09015" strokeWidth={0}/>
                     <Star size={10} fill="#e09015" strokeWidth={0}/>
                   </div>
                   <span className="text-[12px] text-[#e09015]">{m.rating}</span>
                </div>
                
                <button className="ticket-btn">
                  选座购票
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[300px] flex-shrink-0 pt-2">
            <div className="flex items-baseline justify-between mb-3 pb-1 border-b border-[#333]">
              <h4 className="text-[14px]" style={{color: movieColor}}>近期热门</h4>
              <span className="text-xs px-1 cursor-pointer hover:bg-[#258dcd] hover:text-white rounded-sm" style={{color: movieColor}}>更多»</span>
            </div>
            
            <div className="space-y-4">
               {rankingList.map((item, idx) => (
                   <div key={idx} className="flex gap-2">
                      <span className={`text-[13px] w-4 ${idx === 0 ? 'text-[#e09015]' : 'text-aux'}`}>{idx + 1}.</span>
                      {idx === 0 ? (
                        <div className="flex gap-3">
                           <img src={item.img} className="w-[60px] h-[80px] object-cover border border-[#333]" />
                           <div className="flex flex-col justify-between py-1">
                              <span className="douban-link text-[13px]">{item.title}</span>
                              <span className="text-[12px] text-aux">评分 {item.rating}</span>
                              <span className="text-[12px] text-aux">2025 / 美国 / 动作 / 悬疑</span>
                           </div>
                        </div>
                      ) : (
                        <div className="flex-1 flex justify-between border-b border-[#222] pb-1">
                             <span className="douban-link text-[13px] truncate max-w-[180px]">{item.title}</span>
                             {item.rating && <span className="text-[12px] text-[#e09015]">{item.rating}</span>}
                        </div>
                      )}
                   </div>
               ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const BookSection = () => {
  const books = [...MOCK_BOOKS, ...MOCK_BOOKS, ...MOCK_BOOKS].slice(0, 10); 
  const categories = ['热门图书', '读书专题', '直播活动', '名家问答', '共读交流', '鉴书团'];
  const bookColor = "#9b7c5e";
  
  return (
    <div className="douban-global-width section-separator">
      <SectionHeader 
        title="读书" 
        colorCode={bookColor} 
        items={categories}
        extra="更多»"
      />
      
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-[16px]" style={{color: bookColor}}>新书速递 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#9b7c5e] hover:text-white px-1 ml-2 text-[#9b7c5e]">( 更多 )</span></h3>
              <span className="text-xs px-1 cursor-pointer hover:bg-[#9b7c5e] hover:text-white rounded-sm" style={{color: bookColor}}>更多»</span>
          </div>
          
          <div className="grid grid-cols-5 gap-y-8 gap-x-5">
            {books.map((b, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-[100px] h-[142px] mb-2 bg-[#222] shadow-md flex-shrink-0 overflow-hidden">
                  <img src={b.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={b.title}/>
                </div>
                
                <h4 className="text-[13px] text-[#37a] text-center w-[100px] truncate group-hover:bg-[#37a] group-hover:text-white px-0.5 leading-tight mb-1">
                    {b.title}
                </h4>
                <div className="text-[12px] text-aux text-center w-[100px] truncate">
                    {b.author}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-[300px] flex-shrink-0 pt-2">
          <div>
            <h4 className="text-[14px] mb-2 pb-1 border-b border-[#333]" style={{color: bookColor}}>热门标签</h4>
            <div className="text-[12px] leading-7 flex flex-wrap gap-2 text-[#37a] mt-2">
              <span className="hover:bg-[#37a] hover:text-white px-1 cursor-pointer">文学</span>
              <span className="hover:bg-[#37a] hover:text-white px-1 cursor-pointer">小说</span>
              <span className="hover:bg-[#37a] hover:text-white px-1 cursor-pointer">历史文化</span>
              <span className="hover:bg-[#37a] hover:text-white px-1 cursor-pointer">社会纪实</span>
              <span className="hover:bg-[#37a] hover:text-white px-1 cursor-pointer">科学新知</span>
            </div>
            
            <div className="mt-8">
               <h4 className="text-[14px] mb-2 pb-1 border-b border-[#333]" style={{color: bookColor}}>畅销图书榜</h4>
               <ul className="space-y-2 mt-2">
                  {[1,2,3,4,5].map(n => (
                      <li key={n} className="flex text-[13px] gap-2">
                          <span className="text-aux">{n}.</span>
                          <span className="douban-link">示例畅销书目名称{n}</span>
                      </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicSection = () => {
  const albums = [...MOCK_ALBUMS, ...MOCK_ALBUMS].slice(0, 8); 
  const categories = ['音乐人', '潮潮豆瓣音乐周', '金羊毛计划', '专题', '排行榜', '分类浏览', '乐评', '豆瓣FM'];
  const musicColor = "#f58c1f";
  
  return (
    <div className="douban-global-width section-separator">
      <SectionHeader 
        title="音乐" 
        colorCode={musicColor} 
        items={categories}
        extra="更多»"
      />
      
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-[16px]" style={{color: musicColor}}>新碟榜 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#f58c1f] hover:text-white px-1 ml-2 text-[#f58c1f]">( 更多 )</span></h3>
              <span className="text-xs px-1 cursor-pointer hover:bg-[#f58c1f] hover:text-white rounded-sm" style={{color: musicColor}}>更多»</span>
          </div>
          
          <div className="grid grid-cols-4 gap-y-8 gap-x-6">
            {albums.map((a, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-2 relative">
                   <img src={a.img} className="w-full aspect-square object-cover shadow-md opacity-90 group-hover:opacity-100" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                       <Play fill="white" className="text-white w-8 h-8"/>
                   </div>
                </div>
                
                <h4 className="text-[13px] text-[#37a] truncate group-hover:bg-[#37a] group-hover:text-white inline-block px-1 leading-tight mb-0.5">
                    {a.title}
                </h4>
                <div className="text-[12px] text-aux truncate">
                    {a.artist}
                </div>
                <div className="flex items-center gap-1">
                   <div className="flex text-[10px] text-[#e09015]">★★★★☆</div>
                   <span className="text-[11px] text-[#e09015]">{a.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-[300px] flex-shrink-0 pt-2">
          <div>
            <h4 className="text-[14px] mb-2 pb-1 border-b border-[#333]" style={{color: musicColor}}>热门音乐人</h4>
            <ul className="space-y-3 mt-2">
               {[1,2,3,4,5].map(n => (
                   <li key={n} className="flex gap-3 items-center">
                       <img src={`https://picsum.photos/seed/musicartist${n}/48/48`} className="w-10 h-10 object-cover" />
                       <div className="flex flex-col">
                           <span className="text-[13px] text-[#37a] hover:bg-[#37a] hover:text-white cursor-pointer px-1">独立音乐人{n}</span>
                           <span className="text-[12px] text-aux">流派: Indie Pop</span>
                       </div>
                   </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupSection = () => {
  const categories = ['精选文化', '生活', '情感', '娱乐', '艺术', '科技', '创业', '闲趣'];
  const groupColor = "#007982";
  
  return (
    <div className="douban-global-width section-separator">
      <SectionHeader 
        title="小组" 
        colorCode={groupColor}
        items={categories}
        extra="更多»"
      />
      
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-[16px]" style={{color: groupColor}}>热门小组 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#007982] hover:text-white px-1 ml-2 text-[#007982]">( 更多 )</span></h3>
              <span className="text-xs px-1 cursor-pointer hover:bg-[#007982] hover:text-white rounded-sm" style={{color: groupColor}}>更多»</span>
          </div>
          
          {/* 2-Column Grid as requested */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {MOCK_GROUPS.map((g, i) => (
              <div key={i} className="flex gap-4 items-start group cursor-pointer">
                <img src={g.img} className="w-[48px] h-[48px] rounded-sm border border-[#333] opacity-90 group-hover:opacity-100 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-[14px] font-medium text-[#37a] group-hover:bg-[#37a] group-hover:text-white inline-block px-1 mb-1">
                      {g.title}
                  </h4>
                  <p className="text-[12px] text-aux mt-0.5">
                      {g.members} 个成员
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-[300px] flex-shrink-0 pt-2">
           <SidebarList title="小组分类" items={categories} color={groupColor} extra="更多" />
        </div>
      </div>
    </div>
  );
};

const TimeSection = () => {
    const timeColor = "#ef4623";
    return (
        <div className="douban-global-width section-separator">
            <SectionHeader title="豆瓣时间" colorCode={timeColor} extra="更多»" />
            <div className="grid grid-cols-5 gap-y-8 gap-x-5">
                {MOCK_TIME.map((t, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-pointer">
                        <div className="w-[100px] h-[142px] mb-2 bg-[#222] shadow-md flex-shrink-0 overflow-hidden relative">
                            <img src={t.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 bg-[#ef4623] text-white text-[10px] px-1 py-0.5 rounded-bl-sm">
                                {t.type}
                            </div>
                        </div>
                        <h4 className="text-[13px] text-[#37a] text-center w-[100px] truncate group-hover:bg-[#37a] group-hover:text-white px-0.5 leading-tight mb-1">
                            {t.title}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CitySection = () => {
    const cityColor = "#964"; // Typical brownish color for Douban City
    return (
        <div className="douban-global-width section-separator !border-none">
            <SectionHeader title="同城" colorCode={cityColor} extra="更多»" />
             <div className="flex gap-10">
                <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-4">
                         <h3 className="text-[16px]" style={{color: cityColor}}>热门活动 <span className="text-[12px] font-normal cursor-pointer hover:bg-[#964] hover:text-white px-1 ml-2 text-[#964]">( 更多 )</span></h3>
                    </div>
                    <div className="grid grid-cols-5 gap-y-8 gap-x-5">
                        {MOCK_CITY.map((c, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-[100px] h-[142px] mb-2 bg-[#222] shadow-md flex-shrink-0 overflow-hidden">
                                    <img src={c.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-[13px] text-[#37a] text-center w-[100px] truncate group-hover:bg-[#37a] group-hover:text-white px-0.5 leading-tight mb-1">
                                    {c.title}
                                </h4>
                                <div className="text-[11px] text-aux text-center w-[100px] leading-tight">
                                    {c.info}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="w-[300px] flex-shrink-0 pt-2">
                    <SidebarList title="活动分类" items={['音乐', '戏剧', '讲座', '聚会', '电影', '展览', '运动', '公益', '旅行']} color={cityColor} extra="更多" />
                </div>
            </div>
        </div>
    );
};

const MovieDetailModal = ({ movie, onClose }: { movie: Movie | null, onClose: () => void }) => {
  if (!movie) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#1c1c1c] rounded shadow-2xl max-w-2xl w-full flex relative border border-[#333]">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-white"><X size={18} /></button>
        <div className="p-8 flex gap-6">
            <img src={movie.image} className="w-[135px] h-[200px] object-cover shadow-lg border border-[#333]" />
            <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold text-[#eee]">{movie.title} <span className="text-gray-500 font-normal">({movie.year})</span></h2>
                <div className="flex items-center gap-2">
                    <div className="flex text-[#e09015] text-sm">★★★★★</div>
                    <span className="text-[#e09015] font-bold">{movie.rating}</span>
                </div>
                <div className="text-[13px] text-[#d5d5d5] space-y-1">
                    <p><span className="text-aux">导演:</span> {movie.director}</p>
                    <p><span className="text-aux">主演:</span> {movie.stars.join(' / ')}</p>
                </div>
                <p className="text-[13px] text-[#d5d5d5] leading-relaxed mt-4">{movie.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="min-h-screen bg-[#111] flex flex-col font-sans">
      <DoubanStyles />
      <TopUtilityBar />
      <SiteHeader />
      <PromoBanner />
      
      <main className="pb-10">
        <SelectedContentSection />
        <MovieSection onMovieClick={setSelectedMovie} />
        <BookSection />
        <MusicSection />
        <GroupSection />
        <TimeSection />
        <CitySection />
      </main>

      <footer className="bg-[#1c1c1c] py-12 mt-0 border-t border-[#333] text-center text-[#666] text-[12px]">
         <div className="douban-global-width">
             <div className="mb-2 space-x-4">
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">关于豆瓣</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">在豆瓣工作</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">联系我们</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">法律声明</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">帮助中心</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">移动应用</span>
                 <span className="cursor-pointer hover:text-white hover:bg-[#37a] hover:px-1 rounded-sm transition-colors">豆瓣广告</span>
             </div>
             <div>
                 © 2005－2026 douban.com, all rights reserved 北京豆网科技有限公司
             </div>
         </div>
      </footer>

      <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}
