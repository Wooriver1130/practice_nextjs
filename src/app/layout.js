import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Stack } from "@mui/material";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign: "center"}}>
        <h1>이곳은 root layout 입니다.</h1>
        <h1><Link href="/">메인 페이지</Link> </h1>

        <nav>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link href="/read/1">HTML</Link>
              <Link href="/read/2">CSS</Link>
              <Link href="/read/3">JavaScript</Link>
              <Link href="/makeuplist">Makeup  List 가져오기 (외부 api)</Link>
              <Link href="/join">회원가입</Link>
            </Stack>
        </nav>
        <hr/>
        {children}
        <hr/>
      </body>
    </html>
  );
}
