import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { iUserLogin } from '../../../contexts/@types';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext/UserContext';

const LoginForm = () => {

  const {loginUser} = useContext(UserContext)

  const {register, handleSubmit, formState: {errors}} = useForm<iUserLogin>()

  const submit: SubmitHandler<iUserLogin> = (formData) => {
    loginUser(formData)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
    <Input type='email' label='E-mail' register={register("email")} error={errors.email} />
    <Input type='password' label='Senha' register={register("password")} error={errors.password}/>
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>

  )
  
};

export default LoginForm;
