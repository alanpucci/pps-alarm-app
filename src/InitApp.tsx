import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import { firebaseConfig } from '../firebase';
import HomeStack from './navigation/stacks/HomeStack';
import LoginStack from './navigation/stacks/LoginStack';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const InitApp = ()=> {
  const data:any = useSelector<any>(store=>store.auth);

  return (
      <NavigationContainer>
          {data.success ? 
            <HomeStack /> :  
            <LoginStack />
          }
      </NavigationContainer>
  );
}

export default InitApp
