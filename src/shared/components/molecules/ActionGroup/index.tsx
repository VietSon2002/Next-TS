import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import SocialIcon from '../../atoms/SocialIcon';

export default function ActionGroup() {
  return (
    <div className="social-actions">
      <Icon id="icon-search" className="icon-search me-4 hidden md:flex" />

      <div className="social">
        <SocialIcon id="icon-facebook" href="#" />
        <SocialIcon id="icon-X" href="#" />
        <SocialIcon id="icon-linkin" href="#" />
      </div>

      <div className="button-contain">
        <Button as="a" href="#">
          Make Appointment
        </Button>
      </div>
    </div>
  );
}
