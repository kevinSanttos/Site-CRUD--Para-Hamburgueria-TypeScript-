import { FieldError, UseFormRegisterReturn } from 'react-hook-form/dist/types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';


interface iInputProps{
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  error?: FieldError
}

const Input = ({label, type, register, error}: iInputProps) => {
 
  return (
    <fieldset>
    <StyledTextField label={label} {...register} type='text' />
    {error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null}
    
  </fieldset>
  )
 
};

export default Input;
