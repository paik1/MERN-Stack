import React from 'react';
import { Notification, warningToast } from '..';

function Home() {
  return (
    <div>
      <p> Am in home</p>
      <div
        onClick={() =>
          warningToast({
            title: 'Title of the notification',
            message: 'Description of the notifiaction',
          })
        }>
        Show Notification
      </div>
      <Notification />
    </div>
  );
}

export default Home;
