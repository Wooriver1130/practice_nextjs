"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Page() {
    const [list, setList] = useState([]); // 상품목록 저장
    const [loading, setLoading] = useState(true); // 데이터 불러오는 동안 로딩 띄우기
    const [err, setErr]  = useState(null); // 에러 상태
    // const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const commonURL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL; // .env에 공통으로 쓰이는 url을 저장해놓고 쓰기
    const request = `${commonURL}/v1/products.json?brand=maybelline`;

    const getData = async () => {
        try {
            setLoading(true); // 데이터 불러오기 전 로딩
            const response = await axios.get(request);
            // console.log(response.data); // response가 오는지 확인
            setList(response.data.slice(0, 12))
        } catch (error) {
            
            
        }
    }


    useEffect(() => { // 최초 한 번만 실행
        getData();
    }, []);

    return (
        <div style={{width:"80%", margin: "auto", padding: "20px"}}>
            <h2>판매량 TOP 12</h2>
            &#9711;
        </div>
    );
}

export default Page;