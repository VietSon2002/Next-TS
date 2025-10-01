import Image from "next/image";
import { Icon } from "@/shared/components/atoms";
import { EIcon } from "@/shared/enums";
import Text from "@/shared/components/atoms/text";

type Props = {
  name: string;
  role: string;
  avatar: string;
};

const ProfileCard = ({ name, role, avatar }: Props) => {
  return (
    <div className="profile-card">
      <div className="relative">
        <Image src={avatar} alt={name} width={1920} height={600} />
        <div className="social">
            <div className="social-btn"><Icon name={EIcon.Facebook} className="social-icon"></Icon></div>
            <div className="social-btn"><Icon name={EIcon.X} className="social-icon"></Icon></div>
            <div className="social-btn"><Icon name={EIcon.Linkedin} className="social-icon"></Icon></div>


        </div>
      </div>
      <Text as='h6'>{name}</Text>
      <Text as='p'>{role}</Text>
    </div>
  );
};

export default ProfileCard;
