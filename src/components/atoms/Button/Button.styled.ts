import styled from "styled-components/native";

interface ButtonProps{
    size: 'full' | 'xl' | 'lg' | 'md' | 'sm';
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
    height:35px;
    width:${({size}) => {
    switch (size) {
        case 'full':return 100
        case 'xl': return 80
        case 'lg': return 60
        case 'md': return 50
        case 'sm': return 30
        default:return 100
    }}}%;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    margin:5px auto;
`

const StyledText = styled.Text`
    font-size:20px;
`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: #f41d1d;
    border-width:1px;
    border-color:rgb(255,255,255);
`
export const StyledTextPrimary = styled(StyledText)`
    color:white;
`

export const StyledButtonSecondary = styled(StyledButton)`
    background-color:white;
    border-width:2px;
    border-color:#f41d1d;
`

export const StyledTextSecondary = styled(StyledText)`
    color: #f41d1d;
`

export const StyledButtonTertiary = styled(StyledButton)`
`

export const StyledTextTertiary = styled(StyledText)`
    color: #b40000;
`