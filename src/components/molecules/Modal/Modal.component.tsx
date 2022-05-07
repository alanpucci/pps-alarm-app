import React, { FC } from 'react'
import Button from '../../atoms/Button/Button.component';
import {Modal as ModalView} from 'react-native';
import { StyledFullWidth, StyledView, StyledModalView } from './Modal.styled';
import Paragraph from '../../atoms/Paragraph/Paragraph.component';
import Heading from '../../atoms/Heading/Heading.component';
import ControlledPasswordInput from '../ControlledPasswordInput/ControlledPasswordInput.component';
import FlashMessage from 'react-native-flash-message';

interface ModalProps{
    isVisible:boolean;
    control?:any;
    onPrimary:()=>void;
    onSecondary?:()=>void;
}

const Modal:FC<ModalProps> = ({isVisible, control, onPrimary, onSecondary}) => {
  return (
    <ModalView style={{elevation:0,zIndex:0}} transparent animationType='fade' visible={isVisible}>
        <StyledModalView>
        <StyledView>
            <StyledFullWidth>
                <Heading>Ingresá tu contraseña</Heading>
                <Paragraph>para desactivar la alarma</Paragraph>
            </StyledFullWidth>
            <ControlledPasswordInput control={control} name="password" />
            <StyledFullWidth>
                <Button onPress={onPrimary}>Aceptar</Button>
                {onSecondary && <Button onPress={onSecondary} variant='secondary'>Cancelar</Button>}
            </StyledFullWidth>
        </StyledView>
        </StyledModalView>
        <FlashMessage position="top" />
    </ModalView>
  )
}

export default Modal