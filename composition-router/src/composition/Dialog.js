import React from 'react';
import Border from './Border';

function WelcomeDialog() {
  return (
    <Border color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our website!
      </p>
    </Border>
  );
}

export default WelcomeDialog;