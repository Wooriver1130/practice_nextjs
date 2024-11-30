import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign: "center"}}>
        <h1>이곳은 root layout 입니다.</h1>
        <h1><Link href="/">메인 페이지</Link> </h1>
        <ol>
            <li><Link href="/read/1">HTML</Link></li>
            <li><Link href="/read/2">CSS</Link></li>
            <li><Link href="/read/3">JavaScript</Link></li>
            <li><Link href="/makeuplist">Makeup  List 가져오기 (외부 api)</Link></li>
        </ol>
        {children}
      </body>
    </html>
  );
}
