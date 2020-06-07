import React from 'react';

function NotificationButton(props) {
  // Setting up random Notification
  const randomNotification = () => {
    const notifTitle = 'Sample Notification';
    const notifBody = 'Created by Juni Brosas.';
    // var notifImg = 'data/img/' + games[randomItem].slug + '.jpg';
    const options = {
      body: notifBody,
      // icon: notifImg,
    };

    new Notification(notifTitle, options);

    setTimeout(randomNotification, 30000);
  };

  // Requesting permission for Notifications after clicking on the button
  const handleRequestPermission = () => {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        randomNotification();
      }
    });
  };

  return (
    <button onClick={handleRequestPermission}>
      Request dummy notification
    </button>
  );
}

NotificationButton.propTypes = {};

export default NotificationButton;
