import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
  HiBell,
  HiInboxIn
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { notificationTrue, notificationFalse } from '../redux/notification';
import useWebSocket from 'react-use-websocket';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { notification } = useSelector((state) => state.notification);
  const [tab, setTab] = useState('');

  // if current user is admin then connect to websocket for Live notification
  console.log(currentUser);
  //if(currentUser.isAdmin){
    const socketUrl = `ws://localhost:3000/?extraData=${encodeURIComponent(JSON.stringify(currentUser))}`;
    const { sendMessage, sendJsonMessage, lastMessage, lastJsonMessage, readyState, getWebSocket,} = 
        useWebSocket(socketUrl, {
        onOpen: () =>{
          console.log('opened');
        } , 
        onError: (event) => {
          console.error('WebSocket error:', event);
          // const errorMessage = event.message || 'Unknown WebSocket error';
          // console.log('Error Message:', errorMessage);
      },       
        shouldReconnect: (closeEvent) => true,
      });
      useEffect(() => {    
        if(lastMessage){
          console.log(lastMessage.data);
          dispatch(notificationTrue());
        }
      }, [lastMessage]);
 // }

  useEffect(() => {    
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=notifications'>
                    <Sidebar.Item active={tab === 'notifications'} icon={HiBell} as='div' style={notification ? {"animation":"blink-animation 1s infinite"} : {}}>
                      Notifications
                    </Sidebar.Item>

              </Link>              
            </>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
