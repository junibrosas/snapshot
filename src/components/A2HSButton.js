import React from 'react';

function A2HSButton(props) {
  const [btnStyle, setBtnStyle] = React.useState({ display: 'none' });
  const [deferredPrompt, setDefferedPrompt] = React.useState(undefined);

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDefferedPrompt(e);
      // Update UI to notify the user they can add to home screen
      setBtnStyle({ display: 'block' });
    });
  }, []);

  const handleClick = () => {
    // hide our user interface that shows our A2HS button
    setBtnStyle({ display: 'none' });
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setDefferedPrompt(null);
    });
  };

  return (
    <div style={btnStyle} onClick={handleClick}>
      Add to home screen
    </div>
  );
}

export default A2HSButton;
