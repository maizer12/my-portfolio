import { contactsArray } from '@/_config';
import { Icon } from '@/common/Icon';

const BannerLinks = () => {
  return (
    <ul className="gap-2 flex">
      {contactsArray.map((e) => (
        <li key={e.link} title={e.name}>
          <a
            target="_blank"
            href={e.link}
            className="border w-11 h-11 flex justify-center items-center border-primary-700 bg-dark-900 hover:border-light-400 fill-primary-200 hover:fill-light-400 duration-300"
          >
            <Icon icon={e.icon} className="w-6 h-fit" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BannerLinks;
