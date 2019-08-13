import { useState, useEffect } from 'react';
import localStorageHandler from '../handlers/localStorageHandler';
import uuid from 'uuid/v4';

function useSignStatus() {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorageHandler.current);

  useEffect(() => {
    const handleSignInChange = () => {
      setIsSignedIn(!!localStorageHandler.current);
    };
    handleSignInChange.key = uuid();

    localStorageHandler.subscribe(handleSignInChange);
    return () => localStorageHandler.unsubscribe(handleSignInChange);
  });

  return isSignedIn;
}

export default useSignStatus;