import Button from '../../atoms/button';
import Icon from '../../atoms/icon';
import { EIcon } from '@/shared/enums';

export default function ActionGroup() {
  return (
    <div className="social-actions">
      {/* <Icon id="icon-search" className="icon-search me-4 hidden md:flex" /> */}
      <Icon className="size-4 me-5" name={EIcon.Search} />

      <div className="social">
        <a href="#" className='social-btn'><Icon className="size-4" name={EIcon.Facebook} /></a>
        <a href="#" className='social-btn'><Icon className="size-4" name={EIcon.X} /></a>
        <a href="#" className='social-btn'><Icon className="size-4" name={EIcon.Linkedin} /></a>
      </div>

      <div className="button-contain">
        <Button text="MAKE APPOINTMENT" handleClick={() => console.log('Clicked!')} />
      </div>
    </div>
  );
}
