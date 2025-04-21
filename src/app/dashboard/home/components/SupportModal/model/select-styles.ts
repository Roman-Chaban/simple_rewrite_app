import { GroupBase, StylesConfig } from 'react-select';
import { OptionType } from '../ui/SupportModal';

export const selectStyles: StylesConfig<
   OptionType,
   false,
   GroupBase<OptionType>
> = {
   container: (base) => ({
      ...base,
   }),
   control: (base) => ({
      ...base,
      border: '2px solid #d8e0f0',
      borderRadius: '14px',
      boxShadow: ' 0 1px 2px 0 rgba(184, 200, 224, 0.22)',
      minHeight: '50px',
      cursor: 'pointer',
      ':hover': {
         border: '2px solid #3f8cff',
      },
   }),
   valueContainer: (base) => ({
      ...base,
      padding: 0,
   }),
   placeholder: (base) => ({
      ...base,
      margin: 0,
      paddingLeft: 18,
   }),
   menu: (base) => ({
      ...base,
      border: '2px solid #d8e0f0',
      borderRadius: '14px',
      boxShadow: ' 0 1px 2px 0 rgba(184, 200, 224, 0.22)',
      marginTop: 15,
   }),
   menuList: (base) => ({
      ...base,
      marginInline: 8,
   }),
   option: (base) => ({
      ...base,
      width: '100%',
      borderRadius: '14px',
      color: '#0a1629',
      fontWeight: 600,
      lineHeight: '150%',
      cursor: 'pointer',
   }),
   singleValue: (base) => ({
      ...base,
      margin: 0,
      paddingLeft: 18,
      color: '#7d8592',
      fontWeight: 600,
   }),
   indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
   }),
   dropdownIndicator: (base, state) => ({
      ...base,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 18,
      maxHeight: 18,
      padding: 0,
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      transform: state.selectProps.menuIsOpen
         ? 'rotate(180deg)'
         : 'rotate(0deg)',
      marginRight: 18,
      marginLeft: 0,
      color: '#7d8592',
   }),
   indicatorsContainer: (base) => ({
      ...base,
      cursor: 'pointer',
   }),
   input: (base) => ({
      ...base,
      display: 'none',
   }),
};
