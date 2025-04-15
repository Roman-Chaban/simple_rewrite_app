type Title = string;
type AttachedContent = {
   content: {
      icon: Icon;
      title: Title;
   };
};

interface Icon {
   src: string;
   alt: string;
   width: number;
   height: number;
}

interface ActivityStreamAttachedProps {
   content: {
      title: Title;
      icon: Icon;
   };
}

export type { ActivityStreamAttachedProps, Icon, Title, AttachedContent };
