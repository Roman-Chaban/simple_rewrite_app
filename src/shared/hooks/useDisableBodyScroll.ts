import { useEffect } from 'react';

export const useDisableBodyScroll = (shouldDisableOverflow: boolean): void => {
   useEffect(() => {
      const originalOverflow = document.body.style.overflow;

      if (shouldDisableOverflow) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = originalOverflow;
      }

      return () => {
         document.body.style.overflow = originalOverflow;
      };
   }, [shouldDisableOverflow]);
};
