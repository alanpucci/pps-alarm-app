import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../../redux/authReducer';
import {StyledView } from './HomeScreen.styled';
import ImageButton from '../../atoms/ImageButton/ImageButton.component';
import alarmOn from '../../../../assets/alarmon.png';
import AwesomeButton from '../../atoms/AwesomeButton/Button.component';
import Modal from '../../molecules/Modal/Modal.component';
import { useForm } from 'react-hook-form';
import { errorHandler } from '../../../utils/ErrorsHandler';
import { Accelerometer } from 'expo-sensors';
import { Vibration } from 'react-native';
import { Audio } from 'expo-av';
import { soundHandler } from '../../../utils/soundHandler';
import { Camera } from 'expo-camera';

const HomeScreen = () => {
  const {user}:any = useSelector<any>(store => store.auth);
  const {control, getValues, reset} = useForm<{password:string}>();
  const dispatch = useDispatch();
  const [start, setStart] = useState(false);
  const [position, setPosition] = useState('horizontal');
  const [sound, setSound] = useState<any>();
  const [modal, setModal] = useState(false);
  const [cord, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(()=>{
    (async ()=>{
      await Camera.requestPermissionsAsync()
    })()
    Accelerometer.setUpdateInterval(700);
  },[])
  
  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(gyroscopeData => {
        setData(gyroscopeData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    console.log(cord)
    console.log(position)
    if(cord.x>0.5){
      setPosition('izquierda');
    }
    if(cord.x<-0.5){
      setPosition('derecha');
    }
    if(cord.y>0.7){
      setPosition('vertical');
    }
    if(cord.z>1){
      setPosition('horizontal');
    }
  }, [cord.x, cord.y, cord.z]);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);


  useEffect(() => {
    if(start){
      switch(position){
        case 'horizontal':
          Vibration.vibrate(5000);
          (async ()=>{
            const {sound} = await Audio.Sound.createAsync(soundHandler('maestro'));
            setSound(sound);
            await sound.playAsync()
          })()
          break;
        case 'izquierda':
          (async ()=>{
            const {sound} = await Audio.Sound.createAsync(soundHandler('robar'));
            setSound(sound);
            await sound.playAsync()
          })()
          break;
        case 'derecha':
          (async ()=>{
            const {sound} = await Audio.Sound.createAsync(soundHandler('mano'));
            setSound(sound);
            await sound.playAsync()
          })()
          break;
        case 'vertical':
          (async ()=>{
            const {sound} = await Audio.Sound.createAsync(soundHandler('mama'));
            setSound(sound);
            await sound.playAsync()
          })()
      }
    }
  }, [position])

  const handleSignOut = () => {
    dispatch(handleLogout());
  }

  const handleStart = async () => {
      if(!start){
      setStart(true);
      _subscribe();
      }else{
      setModal(true);
    }
  }

  const handleEnd = () => {
    const values = getValues();
    if(values.password===user.password){
      setModal(false);
      setStart(false);
      reset();
      _unsubscribe();
    }else{
      errorHandler('invalid-password');
    }
  }

  const handleClose = () => {
    setModal(false);
    reset();
  }
 
  return (
    <StyledView colors={start?['#FF416C', '#FF4B2B']:['#bfe9ff', '#9796f0']}>
      {start && position==="vertical" && <Camera flashMode="torch" style={{height:1, width:1}}
        ></Camera>}
      <ImageButton raise src={alarmOn} onPress={handleStart}/>
      <Modal isVisible={modal} control={control} onPrimary={handleEnd} onSecondary={handleClose} />
      <AwesomeButton rounded backgroundDarker="#b40000" textSize={15} textColor="#f41d1d" backgroundColor="white" type="primary" width={130} height={60} onPress={handleSignOut}>Cerrar sesión</AwesomeButton>
    </StyledView>
  )
}

export default HomeScreen