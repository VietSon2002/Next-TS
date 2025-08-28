import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';

type ContactInfoItemProps = {
  icon: string;
  children: React.ReactNode;
};

export default function ContactInfoItem({ icon, children }: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-purple-500 text-lg bg-primary rounded-full w-8 h-8 flex items-center justify-center box-border">
        <Icon id={icon} className="w-6 h-6 fill-black" />
      </span>
      <Text>{children}</Text>
    </div>
  );
}
