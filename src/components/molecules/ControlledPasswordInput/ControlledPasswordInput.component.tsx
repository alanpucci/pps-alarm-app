import React, { FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import Input from '../../atoms/Input/Input.component'
import { View, TextInputProps } from 'react-native';
import { StyledErrorText, StyledView } from './ControlledPasswordInput.styled';
import { TextInput } from 'react-native-paper';

interface ControlledInputProps extends TextInputProps{
  control:Control<any,any>;
  name:string;
  required?:boolean;
  error?:any;
}

const ControlledPasswordInput:FC<ControlledInputProps> = ({control,name,required, error,...props}) => {
  const [secure, setSecure] = useState(true)
  return (
    <StyledView>
        <Controller 
            control={control}
            rules={{required:required}}
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  right={<TextInput.Icon name={secure?"eye":"eye-off"} onPress={()=>setSecure(!secure)} />}
                  left={<TextInput.Icon name="lock" />}
                  secureTextEntry={secure}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  {...props}
                />
                )}
            name={name}
        />
        {error && <StyledErrorText>{error.message || 'Es requerido'}</StyledErrorText>}
    </StyledView>
  )
}

export default ControlledPasswordInput