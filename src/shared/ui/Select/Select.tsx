'use client';

import { type HTMLAttributes, type FC, useId } from 'react';

interface Option {
   value: string;
   label: string;
   disabled?: boolean;
}

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
   children: React.ReactNode;
   className?: string;
   htmlFor?: string;
}

interface SelectProps
   extends Omit<
      HTMLAttributes<HTMLSelectElement>,
      'onChange' | 'defaultValue' | 'value'
   > {
   options: Array<Option>;
   value?: string;
   defaultValue?: string;
   onChange?: (
      value: string,
      event: React.ChangeEvent<HTMLSelectElement>,
   ) => void;
   className?: string;
   disabled?: boolean;
   name?: string;
   optionClassName?: string;
   placeholder?: string;
   labelProps?: LabelProps;
   selectWrapperClassName?: string;
}

export const Select: FC<SelectProps> = ({
   options,
   value,
   defaultValue,
   onChange,
   className,
   disabled = false,
   name,
   placeholder,
   labelProps,
   selectWrapperClassName,
   optionClassName,
   ...props
}) => {
   const generatedId = useId();
   const selectId = labelProps?.htmlFor || name || generatedId;

   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value, event);
   };

   return (
      <div className={selectWrapperClassName}>
         {labelProps?.children && (
            <label
               className={labelProps.className}
               htmlFor={selectId}
               {...labelProps}
            >
               {labelProps.children}
            </label>
         )}
         <select
            id={selectId}
            className={className}
            name={name}
            onChange={handleChange}
            disabled={disabled}
            aria-disabled={disabled}
            value={value !== undefined ? value : undefined}
            defaultValue={value === undefined ? defaultValue || '' : undefined}
            {...props}
         >
            {placeholder && (
               <option value='' disabled>
                  {placeholder}
               </option>
            )}
            {options.map(
               ({ value: optionValue, label, disabled: optionDisabled }) => (
                  <option
                     className={optionClassName}
                     key={optionValue}
                     value={optionValue}
                     disabled={optionDisabled}
                  >
                     {label}
                  </option>
               ),
            )}
         </select>
      </div>
   );
};
