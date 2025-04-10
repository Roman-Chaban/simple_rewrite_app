import { type InputHTMLAttributes } from 'react';

import { FieldValues, type Path, type UseFormRegister } from 'react-hook-form';

interface RegisterInputProps<TFormValues extends FieldValues>
   extends InputHTMLAttributes<HTMLInputElement> {
   name: Path<TFormValues>;
   register: UseFormRegister<TFormValues>;
   className?: string;
}

export const RegisterInput = <TFormValues extends FieldValues>({
   name,
   register,
   className = '',
   ...props
}: RegisterInputProps<TFormValues>) => {
   return <input {...register(name)} className={className} {...props} />;
};

RegisterInput.displayName = 'RegisterInput';
