import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginStackParamList } from '../../../navigation/stacks/LoginStack';
import { Screens } from "../../../navigation/Screens";
import {handleLogin, handleRegister} from "../../../redux/authReducer";
import Logo from "../../atoms/Logo/Logo.component";
import LoginController from '../../organisms/LoginController/LoginController.component';
import { StyledView } from "./RegisterScreen.styled";
import Spinner from "../../atoms/Spinner/Spinner.component";
import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RegisterController from '../../organisms/RegisterController/RegisterController.component';
import { showMessage } from "react-native-flash-message";

type RegisterScreenProps = NativeStackScreenProps<LoginStackParamList, Screens.LOGIN>;

export type FormData={
    email:string;
    password:string;
    passwordRepeat?:string;
}

const RegisterScreen:FC<RegisterScreenProps> = ({navigation}) => {
    const {control, handleSubmit, getValues} = useForm<FormData>();
    const dispatch = useDispatch();
    const data:any = useSelector<any>(store => store.auth);

    const handleSignUp = () => {
        const values = getValues();
        if(!values.email || !values.password || !values.passwordRepeat){
            showMessage({type:"danger", message:"Error", description:"Todos los campos son requeridos"});
            return;
        }
        if(values.password !== values.passwordRepeat){
            showMessage({type:"danger", message:"Error", description:"Las contraseñas no coinciden"});
            return;
        }
        dispatch(handleRegister(values))
    }


	return (
		<StyledView>
            {data.loading && <Spinner />}
            <Logo title="Registro" subtitle="Ingresa tus credenciales y crea tu cuenta" />
            <RegisterController handleSubmit={handleSubmit(handleSignUp)} control={control} />
        </StyledView>
	);
};

export default RegisterScreen;
