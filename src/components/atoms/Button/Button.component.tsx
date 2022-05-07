import React, { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { StyledButtonPrimary, StyledButtonSecondary, StyledTextPrimary, StyledTextSecondary, StyledButtonTertiary, StyledTextTertiary } from './Button.styled';

interface ButtonProps extends TouchableOpacityProps{
    size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
    variant?: 'primary' | 'secondary' | 'tertiary'
}

const ButtonVariants = {primary: StyledButtonPrimary, secondary: StyledButtonSecondary, tertiary: StyledButtonTertiary};
const TextVariants = {primary: StyledTextPrimary, secondary: StyledTextSecondary, tertiary: StyledTextTertiary};

const Button:FC<ButtonProps> = ({children, onPress, size='full', variant="primary"}) => {
    const Button = ButtonVariants[variant];
    const Text = TextVariants[variant];

  return (
      <Button onPress={onPress} size={size}>
          <Text>
              {children}
          </Text>
      </Button>
  )
}

export default Button