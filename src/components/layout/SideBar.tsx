'use client';

import {
  sidebar,
  sidebarLink,
  sidebarLinkActive,
  sidebarLogo,
  sidebarTop,
} from '@styles/components/layout/Sidebar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const getClassName = (path: string) => {
    return path === pathname ? sidebarLinkActive : sidebarLink;
  };

  return (
    <nav className={sidebar}>
      <div className={sidebarLogo}>LOGO</div>
      <div className={sidebarTop}>
        <Link href="/custom" className={getClassName('/custom')}>
          제작
        </Link>
        <Link href="/keytory" className={getClassName('/keytory')}>
          키토리
        </Link>
      </div>
      <div>
        <Link href="/login" className={getClassName('/login')}>
          로그인
        </Link>
        <Link href="/signup" className={getClassName('/signup')}>
          회원가입
        </Link>
      </div>
    </nav>
  );
}
