import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { iUser } from '../../../contexts/@types';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext/UserContext';

const RegisterForm = () => {
  const {registerUser} = useContext(UserContext)

  const {register, handleSubmit, formState: {errors}} = useForm<iUser>()

  const submit: SubmitHandler<iUser> = (formData) => {
    registerUser(formData)
  }

  return (
  
    <StyledForm onSubmit={handleSubmit(submit)}>
    <Input type='email' label='E-mail' register={register("email")} error={errors.email} />
    <Input type='password' label='Senha' register={register("password")} error={errors.password} />
    <Input type='password' label='Confirmar senha' register={register("confirmPassword")} error={errors.confirmPassword}/>
    <Input type='text' label='Nome' register={register("name")} error={errors.name}/>
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>
  
  )
  
};

export default RegisterForm;
