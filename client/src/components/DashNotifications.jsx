import { async } from '@firebase/util';
import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function DashNotifications() {
  const { currentUser } = useSelector((state) => state.user);
  const [notifications, setNotifications]=useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(()=>{
    const fetchNotification= async()=> {
      try {
        const res = await fetch(`/api/notification/getNotifications`);
        const data = await res.json();
        if (res.ok) {
          setNotifications(data);
          if (data.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
      fetchNotification();
  },[])

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
        Notification Center
        <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Notifications</Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
            {notifications.map((n) => (
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                  <Link to={`/post/${n.postId}`} target="_blank" rel="noopener noreferrer">
                    @{n.secUserId.username} Commented on your Post 
                    <span className='text-blue-500'>{' '+moment(n.createdAt).fromNow()}</span>
                  </Link>  
                  </Table.Cell>                                 
                </Table.Row>              
            ))}
            </Table.Body>
          </Table>
    </div>
  );
}
