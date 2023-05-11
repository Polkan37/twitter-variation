import React, { useState, useEffect } from 'react'
import { getNotifications } from '../api/getNotification';
import Notification from '../components/Notification/Notification';

export const  Notifications = () => {
  const id = 1148;
  const [info, setInfo] = useState({});
  
  useEffect(() => {
    getNotifications(id).then((data) => setInfo(data));
  }, [id]);

  return (
    <section>
    <div className="container">
        <div className="notifications">
          <div className='notifications__description' >
            {info.length > 0 ? `` : `You haven't any notifications yet`}
          </div>
          {info.length > 0 ? info.map( el => <Notification key={el.user_id + el.id} data={el} />) : ''}
          
        </div>
    </div>
    </section>
  )
}