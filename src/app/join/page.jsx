"use client"
import { Avatar, Button, FormControl, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Page(props) {
    const baseUrl = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
    const apiUrl = `${baseUrl}/members/join`;
    const router = useRouter(); // 페이지 이동 위해서.
    const initUvo = {
        u_id: "", 
        u_pw: "", 
        u_name: "", 
        u_age: "", 
    }
    const [uvo, setUvo] = useState(initUvo);
     
    // !연산자는 빈 문자열("")이면 true, 아니면 false를 반환한다.
    // 모든 입력 필드가 비어있지 않아야 true, 즉 버튼이 활성화 된다.
    const isAllFilled  = !uvo.u_id || !uvo.u_pw || !uvo.u_name || uvo.u_age ;

    function ChangeUvo(e) {
        const {name, value} = e.target;
        setUvo(prev => {
            return {...prev, [name] : value}
        });
    }
    const isBtnChk = true;
    return (
        <div>
            <FormControl>
                <Stack direction={"column"} spacing={1} alignItems="center">
                    <Avatar />
                    <TextField type='text' label="아이디" name='u_id' value="" onChange={ChangeUvo} />
                    <TextField type='password' label="비밀번호" name='u_pw' value=""  onChange={ChangeUvo} />
                    <TextField type='text' label="이름" name='u_name' value=""  onChange={ChangeUvo} />
                    <TextField type='number' label="나이" name='u_age' value="" onChange={ChangeUvo} />
                    <Button fullWidth variant='contained' disabled={isAllFilled}>가입하기</Button>
                </Stack>
            </FormControl>
        </div>
    );
}

export default Page;