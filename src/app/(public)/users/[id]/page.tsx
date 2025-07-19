// app/users/[id]/page.tsx

import Profile from '@/components/user/Profile';
import { FetchUsersSingle } from '@/lib/axios/axiosRequest';
import { SingleUSerResponse } from '@/types/types';
import { notFound } from 'next/navigation';
import React from 'react';
export default async function UserPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;


  let userData: SingleUSerResponse | null = null;

  try {
    userData = await FetchUsersSingle(id);
  } catch (error) {
    console.error("خطا در دریافت کاربر:", error);
    notFound();   // اگر داده‌ها پیدا نشدند، صفحه 404 نمایش داده شود
  }

  if (!userData || !userData.data) notFound();


  return <Profile user={ userData.data}/>

}
