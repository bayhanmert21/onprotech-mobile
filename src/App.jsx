import React, { useState, useEffect } from 'react';
import {
  Home, Shield, ShieldCheck, ShieldAlert, Video, Cpu, Wrench, Play, Bell,
  Sun, Moon, Plane, Footprints, Lightbulb, Snowflake, Blinds, Droplets,
  Lock, Unlock, Plug, Warehouse, Power, ChevronRight, ChevronDown, Volume2,
  VolumeX, Maximize2, MoreVertical, Plus, Check, AlertTriangle, Sparkles,
  Search, Menu, Mic, Eye, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, X,
  PhoneCall, CheckCircle2, Clock, Wifi, HardDrive, Settings, RefreshCw,
  Camera, Activity, Flame, BatteryCharging, Radio, Sliders, LogOut, Palette, LayoutGrid
} from 'lucide-react';

const IMAGES = {
  villaHero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85',
  villaNight: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
  onKapi: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=900&q=80',
  bahce: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  otopark: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
  salon: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  arkaKapi: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  havuz: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  filmZamani: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
  iyiGeceler: 'https://images.unsplash.com/photo-1540518614846-7ede433c4efb?auto=format&fit=crop&w=600&q=80',
  tatilModu: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
  avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
};

const OnprotechLogo = ({ isDark, forceMode = 'auto', size = 'normal', showSlogan = true }) => {
  const isWhite = forceMode === 'white' || (forceMode === 'auto' && isDark);
  const blueColor = isWhite ? '#FFFFFF' : '#1E78D6';
  const orangeColor = isWhite ? '#FFFFFF' : '#D9531E';
  const subTextColor = isWhite ? 'rgba(255,255,255,0.72)' : '#475569';
  const scaleClass = size === 'large' ? 'scale-110 origin-left' : size === 'small' ? 'scale-90 origin-left' : '';

  return (
    <div className={`inline-flex flex-col select-none ${scaleClass}`}>
      <div className="flex items-end">
        <div className="relative flex flex-col items-center mr-0.5">
          <svg width="34" height="22" viewBox="0 0 44 28" className="-mb-2 z-10 overflow-visible">
            <g transform="rotate(-12 22 14)">
              <path d="M2 8 C2 4, 14 2, 32 6 L38 12 L26 19 L6 14 Z" fill={blueColor} />
              <ellipse cx="33" cy="13" rx="4" ry="5.5" fill={isWhite ? '#0A0E17' : '#0F172A'} opacity="0.85" />
              <ellipse cx="32" cy="13" rx="2" ry="3" fill={blueColor} />
              <path d="M12 15 L8 23 L15 23 L18 17" fill="none" stroke={blueColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          <svg width="29" height="29" viewBox="0 0 36 36">
            <path d="M 11 8.5 A 13 13 0 1 0 25 8.5" fill="none" stroke={blueColor} strokeWidth="5.5" strokeLinecap="round" />
            <line x1="18" y1="3" x2="18" y2="17" stroke={blueColor} strokeWidth="5.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-baseline font-black tracking-tight leading-none pb-0.5" style={{ fontFamily: "'Arial Black', 'Inter', sans-serif" }}>
          <span className="text-[22px] tracking-[-0.03em]" style={{ color: blueColor }}>NPRO</span>
          <span className="text-[22px] tracking-[-0.03em]" style={{ color: orangeColor }}>TECH</span>
          <span className="text-[10px] font-bold ml-0.5 -translate-y-2.5" style={{ color: orangeColor }}>®</span>
        </div>
      </div>
      {showSlogan && (
        <span className="text-[7.5px] font-bold tracking-[0.25em] uppercase pl-1 -mt-0.5" style={{ color: subTextColor }}>
          DAHA GÜVENLİ YARINLAR
        </span>
      )}
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [layoutVariant, setLayoutVariant] = useState(1);
  const [logoColorMode, setLogoColorMode] = useState('auto');
  const [activeTab, setActiveTab] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [showAppSettingsModal, setShowAppSettingsModal] = useState(false);

  const [securityMode, setSecurityMode] = useState('evde');
  const [selectedLocation, setSelectedLocation] = useState('Evim - İstanbul, Çekmeköy');
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [toast, setToast] = useState(null);

  const [activeCamIndex, setActiveCamIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [fullscreenCam, setFullscreenCam] = useState(null);
  const [nightVision, setNightVision] = useState(false);
  const [camPan, setCamPan] = useState({ x: 0, y: 0 });
  const [liveTime, setLiveTime] = useState('19:41:30');

  const [devices, setDevices] = useState({
    salonIsiklari: true,
    klima: true,
    klimaTemp: 24,
    panjur: false,
    panjurOpenPercent: 50,
    bahceSulama: false,
    alarmSistemi: true,
    akilliPriz: true,
    garajKapisi: false,
    girisKapisi: true,
  });

  const [tickets, setTickets] = useState([
    { id: '#ONP-4092', title: 'Otopark Kamerası Gece Görüş Ayarı', date: 'Bugün, 13:20', status: 'Teknik Ekip Yolda', type: 'warning' },
    { id: '#ONP-3810', title: 'Yıllık Periyodik Alarm & Sensör Bakımı', date: '10 Ekim 2026', status: 'Tamamlandı', type: 'success' },
  ]);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [newTicketCategory, setNewTicketCategory] = useState('Kamera Görüntü / Bağlantı Sorunu');
  const [newTicketPriority, setNewTicketPriority] = useState('Normal');
  const [newTicketNote, setNewTicketNote] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  const [events, setEvents] = useState([
    { id: 1, title: 'Ön Kapı Kamerası', desc: 'Hareket algılandı', time: 'Bugün 09:28', img: IMAGES.onKapi, icon: 'video' },
    { id: 2, title: 'Alarm Sistemi', desc: 'Evde modu devreye alındı', time: 'Bugün 08:15', img: null, icon: 'shield' },
    { id: 3, title: 'Giriş Kapısı', desc: 'Akıllı kilit otomatik kilitlendi', time: 'Dün 23:40', img: null, icon: 'lock' },
    { id: 4, title: 'Otopark Kamerası', desc: 'Araç girişi algılandı (34 ONP 01)', time: 'Dün 19:12', img: IMAGES.otopark, icon: 'video' },
  ]);

  const cameras = [
    { id: 'onkapi', name: 'Ön Kapı', sub: 'Ev - Dış Mekan', img: IMAGES.onKapi, status: 'Canlı' },
    { id: 'bahce', name: 'Bahçe', sub: 'Ev - Batı Cephe', img: IMAGES.bahce, status: 'Canlı' },
    { id: 'otopark', name: 'Otopark', sub: 'Ev - Giriş Alanı', img: IMAGES.otopark, status: 'Canlı' },
    { id: 'salon', name: 'Salon', sub: 'Ev - İç Mekan', img: IMAGES.salon, status: 'Canlı' },
    { id: 'arkakapi', name: 'Arka Kapı', sub: 'Ev - Bahçe Yolu', img: IMAGES.arkaKapi, status: 'Canlı' },
    { id: 'havuz', name: 'Havuz', sub: 'Villa - Teras', img: IMAGES.havuz, status: 'Canlı' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setLiveTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const handleModeChange = (modeId, label) => {
    setSecurityMode(modeId);
    const isArmed = modeId !== 'disarida' ? true : true;
    setDevices((prev) => ({ ...prev, alarmSistemi: isArmed }));
    triggerToast(`ONPROTECH: "${label}" modu aktif edildi`);
    setEvents((prev) => [
      { id: Date.now(), title: `Güvenlik Modu: ${label}`, desc: 'Kullanıcı tarafından değiştirildi', time: 'Az önce', img: null, icon: 'shield' },
      ...prev,
    ]);
  };

  const toggleDevice = (key, label) => {
    setDevices((prev) => {
      const nextVal = !prev[key];
      triggerToast(`${label} ${nextVal ? 'Açıldı / Aktif' : 'Kapatıldı'}`);
      return { ...prev, [key]: nextVal };
    });
  };

  const turnOffAllLights = () => {
    setDevices((prev) => ({ ...prev, salonIsiklari: false, akilliPriz: false }));
    triggerToast('Tüm ışıklar ve prizler kapatıldı');
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const randomId = `#ONP-${Math.floor(4100 + Math.random() * 900)}`;
    const newItem = {
      id: randomId,
      title: newTicketNote.trim() ? newTicketNote : newTicketCategory,
      date: 'Az önce',
      status: newTicketPriority === 'Acil' ? 'Acil Müdahale Ekibi Atandı' : 'İnceleniyor',
      type: newTicketPriority === 'Acil' ? 'danger' : 'warning',
    };
    setTickets([newItem, ...tickets]);
    setShowNewTicketModal(false);
    setNewTicketNote('');
    triggerToast(`Destek kaydınız oluşturuldu (${randomId})`);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen w-full font-sans antialiased selection:bg-emerald-500 selection:text-white ${
      isDark ? 'bg-[#0A0E17] text-white' : 'bg-[#F4F3EF] text-[#141821]'
    }`}>
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col relative pb-24">
        {toast && (
          <div className="fixed top-4 left-4 right-4 max-w-md mx-auto z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-600/95 backdrop-blur-md text-white text-xs font-semibold shadow-xl">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>{toast}</span>
          </div>
        )}

        {showLogin ? (
          <div className="flex-1 flex flex-col justify-between p-7 relative overflow-hidden min-h-screen">
            <img src={IMAGES.villaNight} alt="ONPROTECH Villa" className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105" />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#0A0E17]/80 via-[#0A0E17]/90 to-[#0A0E17]' : 'bg-gradient-to-b from-white/70 via-white/90 to-[#F4F3EF]'}`} />

            <div className="relative z-10 pt-8 flex flex-col items-center text-center">
              <div className="mb-3">
                <OnprotechLogo isDark={isDark} forceMode={logoColorMode} size="large" showSlogan={true} />
              </div>
              <p className={`text-xs mt-3 max-w-[260px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                7/24 Akıllı Ev, Kamera ve Profesyonel Alarm Yönetim Platformu
              </p>
            </div>

            <div className={`relative z-10 p-6 rounded-3xl border backdrop-blur-xl ${
              isDark ? 'bg-[#121826]/85 border-white/10' : 'bg-white/90 border-slate-200 shadow-xl'
            }`}>
              <h2 className="text-lg font-bold mb-1">Hoş Geldiniz</h2>
              <p className={`text-xs mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Müşteri numaranız veya e-posta adresinizle giriş yapın.
              </p>
              <div className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-semibold opacity-75 block mb-1">Abone No / E-Posta</label>
                  <input
                    type="text"
                    defaultValue="mert@onprotech.com.tr"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border outline-none ${
                      isDark ? 'bg-[#0A0E17] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold opacity-75 block mb-1">Güvenlik Şifresi</label>
                  <input
                    type="password"
                    defaultValue="••••••••"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium border outline-none ${
                      isDark ? 'bg-[#0A0E17] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
                <button
                  onClick={() => {
                    setShowLogin(false);
                    triggerToast('Hoş geldiniz Mert Bey, bağlantı güvenli.');
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1E78D6] to-[#D9531E] hover:opacity-95 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" /> Sisteme Güvenli Giriş Yap
                </button>
              </div>
            </div>

            <div className="relative z-10 text-center pb-4">
              <p className="text-[11px] opacity-60">7/24 ONPROTECH İzleme Merkezi: 444 0 ONP</p>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            {activeTab === 'home' && (
              <div className="px-4 pt-4 pb-6 space-y-5">
                <div className="flex items-center justify-between">
                  <OnprotechLogo isDark={isDark} forceMode={logoColorMode} size="normal" showSlogan={true} />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowNotifications(!showNotifications)}
                      className={`relative w-9 h-9 rounded-full flex items-center justify-center border transition ${
                        isDark ? 'bg-[#151C2C] border-white/10 text-slate-200' : 'bg-white border-slate-200/80 text-slate-700 shadow-sm'
                      }`}
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                        3
                      </span>
                    </button>
                    <button
                      onClick={() => setShowAppSettingsModal(true)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition ${
                        isDark ? 'bg-[#1B2438] border-white/15 text-white' : 'bg-[#181C26] text-white border-transparent'
                      }`}
                    >
                      M
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h1 className="text-2xl font-light tracking-tight">
                      { isDark ? 'Merhaba' : 'Günaydın,'} <span className="font-bold">Mert</span>
                    </h1>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Eviniz güvende, her şey kontrol altında.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-7 h-7 text-amber-400 fill-amber-400" />
                    <div className="text-right leading-tight">
                      <span className={`text-[10px] block ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>İstanbul</span>
                      <span className="text-base font-bold">20°C</span>
                      <span className={`text-[9px] block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Açık</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'evde', label: 'Evdeyim', icon: Home },
                    { id: 'disarida', label: 'Dışarıdayım', icon: Footprints },
                    { id: 'gece', label: 'Gece Modu', icon: Moon },
                    { id: 'tatil', label: 'Tatil Modu', icon: Plane },
                  ].map((m) => {
                    const Icon = m.icon;
                    const active = securityMode === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => handleModeChange(m.id, m.label)}
                        className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border text-[11px] font-semibold transition-all ${
                          active
                            ? isDark
                              ? 'bg-[#112A26] border-emerald-400/70 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                              : 'bg-[#22252A] border-[#22252A] text-white shadow-md'
                            : isDark
                            ? 'bg-[#121723] border-white/10 text-slate-300'
                            : 'bg-white border-slate-200/80 text-slate-700 shadow-sm'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${active && isDark ? 'text-emerald-400' : ''}`} />
                        <span className="truncate">{m.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div
                  onClick={() => setActiveTab('devices')}
                  className={`cursor-pointer p-3.5 rounded-2xl border flex items-center justify-between transition ${
                    isDark
                      ? 'bg-gradient-to-r from-[#112E28] via-[#122229] to-[#121723] border-emerald-500/30'
                      : 'bg-[#E3F5EC] border-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold">Tüm sistemler aktif</h3>
                      <p className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Kamera, alarm ve akıllı cihazlarınız sorunsuz çalışıyor.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="text-sm font-bold">Kamera Görüntüleri</h2>
                    <button onClick={() => setActiveTab('cameras')} className="text-[11px] font-medium opacity-70 flex items-center gap-0.5">
                      Tüm Kameralar <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg group">
                    <img
                      src={cameras[activeCamIndex].img}
                      alt={cameras[activeCamIndex].name}
                      className={`w-full h-full object-cover transition-all duration-500 ${nightVision ? 'grayscale contrast-125 sepia hue-rotate-60' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Canlı
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                      15.10.2026 {liveTime}
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-sm font-bold">{cameras[activeCamIndex].name}</h3>
                      <p className="text-[10px] text-slate-300">{cameras[activeCamIndex].sub}</p>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-md text-white flex items-center justify-center border border-white/15"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                      <button
                        onClick={() => setFullscreenCam(cameras[activeCamIndex])}
                        className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-md text-white flex items-center justify-center border border-white/15"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-2.5">
                    {cameras.slice(1, 5).map((cam, idx) => (
                      <button
                        key={cam.id}
                        onClick={() => setActiveCamIndex(idx + 1)}
                        className={`relative rounded-xl overflow-hidden h-16 border transition ${
                          activeCamIndex === idx + 1 ? 'border-emerald-400 ring-2 ring-emerald-400/30' : 'border-white/10 opacity-85'
                        }`}
                      >
                        <img src={cam.img} alt={cam.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-1 left-1.5 text-[10px] font-semibold text-white">{cam.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="text-sm font-bold">Hızlı Kontroller</h2>
                    <button onClick={() => setActiveTab('devices')} className="text-[11px] font-medium opacity-70 flex items-center gap-0.5">
                      Tüm Cihazlar <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div
                      onClick={() => toggleDevice('salonIsiklari', 'Salon Işıkları')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Lightbulb className={`w-5 h-5 ${devices.salonIsiklari ? 'text-amber-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Salon Işıkları</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] opacity-65">{devices.salonIsiklari ? 'Açık' : 'Kapalı'}</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.salonIsiklari ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.salonIsiklari ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('klima', 'Klima')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Snowflake className={`w-5 h-5 ${devices.klima ? 'text-sky-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Klima</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] opacity-65">{devices.klimaTemp} °C</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.klima ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.klima ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('panjur', 'Panjur')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Blinds className={`w-5 h-5 ${devices.panjur ? 'text-indigo-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Panjur</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] opacity-65">{devices.panjur ? 'Açık' : 'Kapalı'}</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.panjur ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.panjur ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('bahceSulama', 'Bahçe Sulama')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Droplets className={`w-5 h-5 ${devices.bahceSulama ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Bahçe Sulama</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] opacity-65">{devices.bahceSulama ? 'Açık' : 'Kapalı'}</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.bahceSulama ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.bahceSulama ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('alarmSistemi', 'Alarm Sistemi')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        devices.alarmSistemi
                          ? isDark
                            ? 'bg-[#112A24] border-emerald-500/40'
                            : 'bg-emerald-50 border-emerald-200'
                          : isDark
                          ? 'bg-[#121723] border-white/10'
                          : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Lock className={`w-5 h-5 ${devices.alarmSistemi ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Alarm Sistemi</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className={`text-[10px] font-semibold ${devices.alarmSistemi ? 'text-emerald-400' : 'opacity-65'}`}>
                            {devices.alarmSistemi ? 'Kurulu' : 'Pasif'}
                          </span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.alarmSistemi ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.alarmSistemi ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('akilliPriz', 'Akıllı Priz')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Plug className={`w-5 h-5 ${devices.akilliPriz ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Akıllı Priz</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] text-emerald-400">{devices.akilliPriz ? 'Açık' : 'Kapalı'}</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.akilliPriz ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.akilliPriz ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => toggleDevice('garajKapisi', 'Garaj Kapısı')}
                      className={`cursor-pointer p-2.5 rounded-2xl border flex flex-col justify-between h-28 transition ${
                        isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Warehouse className={`w-5 h-5 ${devices.garajKapisi ? 'text-amber-400' : 'text-slate-400'}`} />
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">Garaj Kapısı</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] opacity-65">{devices.garajKapisi ? 'Açık' : 'Kapalı'}</span>
                          <div className={`w-7 h-4 rounded-full p-0.5 transition ${devices.garajKapisi ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${devices.garajKapisi ? 'translate-x-3' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={turnOffAllLights}
                      className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 h-28 transition active:scale-95 ${
                        isDark ? 'bg-[#121723] border-white/10 hover:bg-white/5' : 'bg-white border-slate-200/80 shadow-sm'
                      }`}
                    >
                      <Power className="w-5 h-5 text-rose-400" />
                      <span className="text-[11px] font-semibold leading-tight">Tüm Işıkları Kapat</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'devices' && (
              <div className="px-4 pt-4 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold">Tüm Cihazlarım</h1>
                    <p className="text-xs opacity-65">ONPROTECH Akıllı Ev & Güvenlik Donanımları</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { key: 'alarmSistemi', name: 'ONPROTECH Merkez Alarm Paneli', room: 'Giriş Holü', battery: '%100', signal: 'Çok Güçlü', icon: ShieldCheck },
                    { key: 'girisKapisi', name: 'Akıllı Biyometrik Kapı Kilidi', room: 'Ön Kapı', battery: '%92', signal: 'Güçlü', icon: Lock },
                    { key: 'salonIsiklari', name: 'Salon Akıllı Dimmer Aydınlatma', room: 'Salon', battery: 'Şebeke', signal: 'Çok Güçlü', icon: Lightbulb },
                    { key: 'klima', name: 'Merkezi İklimlendirme Ünitesi', room: 'Salon & Yatak Odası', battery: 'Şebeke', signal: 'Güçlü', icon: Snowflake },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isOn = devices[item.key];
                    return (
                      <div
                        key={item.key}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                          isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200/80 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isOn ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/10 text-slate-400'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xs font-bold">{item.name}</h3>
                            <p className="text-[10px] opacity-60">{item.room} • Pil: {item.battery}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleDevice(item.key, item.name)}
                          className={`w-11 h-6 rounded-full p-0.5 transition ${isOn ? 'bg-emerald-500' : 'bg-slate-600'}`}
                        >
                          <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isOn ? 'translate-x-5' : ''}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'cameras' && (
              <div className="px-4 pt-4 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold">Canlı Kameralar (6)</h1>
                    <p className="text-xs opacity-65">4K UHD Bulut & NVR Kayıt Sistemi Aktif</p>
                  </div>
                  <button
                    onClick={() => {
                      setNightVision(!nightVision);
                      triggerToast(nightVision ? 'Standart renkli moda geçildi' : 'Kızılötesi Gece Görüşü aktif');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                      nightVision ? 'bg-emerald-500 text-white border-emerald-400' : isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" /> Gece Görüşü
                  </button>
                </div>
                <div className="space-y-3.5">
                  {cameras.map((cam) => (
                    <div key={cam.id} className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="relative h-44">
                        <img
                          src={cam.img}
                          alt={cam.name}
                          className={`w-full h-full object-cover transition ${nightVision ? 'grayscale contrast-125 sepia hue-rotate-60' : ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> CANLI • 4K
                        </div>
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="text-sm font-bold">{cam.name}</h3>
                          <p className="text-[10px] opacity-80">{cam.sub}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'scenes' && (
              <div className="px-4 pt-4 pb-6 space-y-4">
                <h1 className="text-xl font-bold">Akıllı Senaryolar & Olaylar</h1>
                <div className="space-y-2">
                  {events.map((ev) => (
                    <div key={ev.id} className={`p-3 rounded-2xl border flex items-center justify-between ${isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold">{ev.title}</h4>
                          <p className="text-[11px] opacity-65">{ev.desc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] opacity-60">{ev.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'service' && (
              <div className="px-4 pt-4 pb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold">ONPROTECH Teknik Servis</h1>
                    <p className="text-xs opacity-65">7/24 Arıza, Bakım ve Müşteri Destek Merkezi</p>
                  </div>
                  <button
                    onClick={() => setShowNewTicketModal(true)}
                    className="px-3 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-md"
                  >
                    <Plus className="w-4 h-4" /> Yeni Kayıt Aç
                  </button>
                </div>

                <div className="space-y-2.5">
                  {tickets.map((t) => (
                    <div key={t.id} className={`p-3.5 rounded-2xl border ${isDark ? 'bg-[#121723] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold text-emerald-400">{t.id}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-400">{t.status}</span>
                      </div>
                      <h4 className="text-xs font-bold">{t.title}</h4>
                      <p className="text-[10px] opacity-60 mt-1">Oluşturulma: {t.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {showAppSettingsModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end justify-center" onClick={() => setShowAppSettingsModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className={`w-full max-w-md rounded-t-3xl p-5 border-t space-y-4 ${isDark ? 'bg-[#121826] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Görünüm ve Uygulama Ayarları</span>
                <button onClick={() => setShowAppSettingsModal(false)}><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setTheme('dark')} className={`py-2.5 px-3 rounded-xl text-xs font-semibold border ${isDark ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'border-slate-200'}`}>Koyu Tema (Dark)</button>
                <button onClick={() => setTheme('light')} className={`py-2.5 px-3 rounded-xl text-xs font-semibold border ${!isDark ? 'bg-slate-900 text-white' : 'border-white/10'}`}>Açık Tema (Light)</button>
              </div>
              <button onClick={() => { setShowAppSettingsModal(false); setShowLogin(true); }} className="w-full py-2.5 rounded-xl bg-rose-500/15 text-rose-400 text-xs font-bold">Giriş Ekranını Göster</button>
            </div>
          </div>
        )}

        {showNewTicketModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end justify-center p-4">
            <form onSubmit={handleCreateTicket} className={`w-full max-w-md rounded-3xl p-5 border space-y-3.5 ${isDark ? 'bg-[#121826] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">Yeni Arıza / Destek Kaydı</h3>
                <button type="button" onClick={() => setShowNewTicketModal(false)}><X className="w-4 h-4" /></button>
              </div>
              <textarea
                rows={3}
                value={newTicketNote}
                onChange={(e) => setNewTicketNote(e.target.value)}
                placeholder="Cihaz veya kamera ile ilgili yaşadığınız sorunu kısaca yazın..."
                className={`w-full p-2.5 rounded-xl text-xs border outline-none ${isDark ? 'bg-[#0A0E17] border-white/10 text-white' : 'bg-slate-50 border-slate-200'}`}
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs">Talebi ONPROTECH Merkezine Gönder</button>
            </form>
          </div>
        )}

        {!showLogin && (
          <div className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30 px-3 pt-2 pb-4 border-t backdrop-blur-xl flex items-center justify-around ${
            isDark ? 'bg-[#0B0F19]/95 border-white/10 text-slate-400' : 'bg-white/95 border-slate-200/80 text-slate-500'
          }`}>
            {[
              { id: 'home', label: 'Ana Sayfa', icon: Home },
              { id: 'devices', label: 'Cihazlar', icon: LayoutGrid },
              { id: 'cameras', label: 'Kameralar', icon: Video },
              { id: 'scenes', label: 'Senaryolar', icon: Play },
              { id: 'service', label: 'Servis', icon: Wrench },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 py-1 px-2 rounded-xl transition relative ${
                    active ? (isDark ? 'text-emerald-400 font-bold' : 'text-slate-900 font-bold') : 'hover:opacity-80'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
