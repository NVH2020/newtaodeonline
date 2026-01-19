import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ClassInfo, ScheduleGrid, DocumentItem, HeroData, ContactData, RatingData } from '../types';

const INITIAL_HERO: HeroData = {
  badge: ">>> Khơi nguồn đam mê học tập <<<",
  titleLine1: "HỌC GIỎI MỖI NGÀY",
  titleLine2: ">>>>>>><<<<<<<",
  description: "Liên hệ Admin để tham gia nhóm GV biên soạn ngân hàng: 0988.948.882"
};

const INITIAL_CLASSES: ClassInfo[] = [
  { id: 'lop8', grade: 8, title: 'Toán Lớp 8 - Nền Tảng', description: 'Học đại số, hình học cơ bản.', schedule: 'Chưa tuyển sinh!', link: 'https://www.facebook.com/hoctoanthayha.bg' },
  { id: 'lop9', grade: 9, title: 'Toán Lớp 9 - Luyện Thi 10', description: 'Chuyên sâu ôn thi vào lớp 10.', schedule: 'Thứ 2 (16:45 – 18:45) - Thứ x (16:45 – 18:45)', link: 'https://zalo.me/g/chbubv440' },
  { id: 'lop10', grade: 10, title: 'Toán Lớp 10 - THPT Mới', description: 'Nền tảng ôn thi TN THPT - ĐH', schedule: 'Thứ 4 (16:15 – 18:15) – Thứ 7 (14:15 - 16:15)', link: 'https://zalo.me/g/rgpoan570' },
  { id: 'lop11', grade: 11, title: 'Toán Lớp 11 - THPT Mới', description: 'Nền tảng ôn thi TH THPT - ĐH', schedule: 'Thứ 3 (14:15 – 16:15) - Thứ 6 (14:15 – 16:15)', link: 'https://zalo.me/g/ejgrul952' },
  { id: 'lop12', grade: 12, title: 'Toán Lớp 12 - Luyện Thi THPTQG', description: 'Tổng ôn toàn diện – Cơ bản – Nâng cao', schedule: 'Thứ 3 (16:30 – 18:30) - Thứ 5 (16:30 – 18:30)', link: 'https://zalo.me/g/dmjbwl420' },
];

const INITIAL_SCHEDULE_GRID: ScheduleGrid = {
  days: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
  classNames: ['Lớp 8', 'Lớp 9', 'Lớp 10', 'Lớp 11', 'Lớp 12', 'Luyện Đề', 'HSG'],
  cells: { "0-1": "16:30 - 18:30", "1-3": "14:15 - 16:15", "1-4": "16:30 - 18:30", "2-2": "16:30 - 18:30", "3-4": "16:30 - 18:30", "4-3": "14:15 - 16:15", "5-2": "14:15 - 16:15" }
};

const INITIAL_DOCS: DocumentItem[] = [{ id: 1, title: 'Đề thi thử THPTQG môn Toán 2024 - Lần 1', type: 'PDF', date: '10/05/2024', downloadUrl: '#' }];

const INITIAL_CONTACT: ContactData = {
  phone: "0988.948.882",
  email: "thaygiaotoan6688@gmail.com",
  address: "TDP Xuân Phú, phường Tân Tiến, tỉnh Bắc Ninh"
};

const INITIAL_RATING: RatingData = {
  average: 4.8,
  total: 124,
  breakdown: { 5: 105, 4: 12, 3: 5, 2: 2, 1: 0 }
};

interface AppContextType {
  isAdmin: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  heroData: HeroData;
  setHeroData: (d: HeroData) => void;
  classesData: ClassInfo[];
  addClass: (c: ClassInfo) => void;
  updateClass: (id: string, c: ClassInfo) => void;
  deleteClass: (id: string) => void;
  scheduleData: ScheduleGrid;
  setScheduleData: (d: ScheduleGrid) => void;
  documentsData: DocumentItem[];
  addDocument: (d: DocumentItem) => void;
  deleteDocument: (id: number) => void;
  contactData: ContactData;
  setContactData: (d: ContactData) => void;
  ratingData: RatingData;
  addRating: (stars: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function useStickyState<T>(defaultValue: T, key: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [heroData, setHeroData] = useStickyState<HeroData>(INITIAL_HERO, 'heroData');
  const [classesData, setClassesData] = useStickyState<ClassInfo[]>(INITIAL_CLASSES, 'classesData');
  const [scheduleData, setScheduleData] = useStickyState<ScheduleGrid>(INITIAL_SCHEDULE_GRID, 'scheduleData');
  const [documentsData, setDocumentsData] = useStickyState<DocumentItem[]>(INITIAL_DOCS, 'documentsData');
  const [contactData, setContactData] = useStickyState<ContactData>(INITIAL_CONTACT, 'contactData');
  const [ratingData, setRatingData] = useStickyState<RatingData>(INITIAL_RATING, 'ratingData');

  const login = (email: string, pass: string) => {
    if (email === 'havlcm1@gmail.com' && pass === 'a0345312711A@') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const addClass = (cls: ClassInfo) => setClassesData([...classesData, cls]);
  const updateClass = (id: string, updated: ClassInfo) => {
    setClassesData(classesData.map(c => c.id === id ? updated : c));
  };
  const deleteClass = (id: string) => setClassesData(classesData.filter(c => c.id !== id));
  const addDocument = (doc: DocumentItem) => setDocumentsData([doc, ...documentsData]);
  const deleteDocument = (id: number) => setDocumentsData(documentsData.filter(d => d.id !== id));

  const addRating = (stars: number) => {
    const newBreakdown = { ...ratingData.breakdown };
    newBreakdown[stars] = (newBreakdown[stars] || 0) + 1;
    const newTotal = ratingData.total + 1;
    let sum = 0;
    Object.keys(newBreakdown).forEach(key => {
      sum += Number(key) * newBreakdown[Number(key)];
    });
    setRatingData({
      total: newTotal,
      breakdown: newBreakdown,
      average: Number((sum / newTotal).toFixed(1))
    });
  };

  return (
    <AppContext.Provider value={{
      isAdmin, login, logout, heroData, setHeroData,
      classesData, addClass, updateClass, deleteClass,
      scheduleData, setScheduleData, documentsData, addDocument, deleteDocument,
      contactData, setContactData, ratingData, addRating
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};