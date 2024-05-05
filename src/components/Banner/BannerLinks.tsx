import { Icon } from '@/common/Icon';
import { contactArr } from './constants';

const BannerLinks = () => {
  return (
    <div className="flex gap-4">
      {contactArr.map((e) => (
        <a
          target="_blank"
          href={e.link}
          key={e.link}
          className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900 hover:border-light-400 fill-primary-200 hover:fill-light-400 duration-300"
        >
          <Icon icon={e.icon} className="w-6 h-fit" />
        </a>
      ))}
    </div>
  );
};

export default BannerLinks;
