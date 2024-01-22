import { async } from '@firebase/util';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function DashNotifications() {
  const { currentUser } = useSelector((state) => state.user);
  useEffect(()=>{
    const fetchNotification= async()=> {
        
    }
  },[])

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
        Notification Center
    </div>
  );
}
