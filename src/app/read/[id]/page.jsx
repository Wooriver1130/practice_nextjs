import ClickCSS from '@/app/html_css_js/ClickCSS';
import ClickHTML from '@/app/html_css_js/ClickHTML';
import ClickJS from '@/app/html_css_js/ClickJS';
import React from 'react';

// 동적 쿼리는  URL 파라미터에 따라 컴포넌트를 조건부 렌더링합니다.
 async function Page({params}) {
    const tmp = await params;
    const id =  tmp.id;
    return (
        <>
            <h2> 이곳은 파라미터에 따라 HTML/CSS/JS 컴포넌트를 조건부 렌더링 하는 곳이야.</h2>
            <h2>결과: {id == "1" ? <ClickHTML/> : (id == "2" ? <ClickCSS/> : <ClickJS/>) }</h2>
            {}
        </>
    );
}

export default Page