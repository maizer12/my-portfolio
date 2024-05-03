import { HTag, PTag } from '@/common';
import style from './Projects.module.scss';
import img from '../../../public/dim.jpg';
import Image from 'next/image';
import MainButton from '@/common/MainButton';

const Projects = () => {
  return (
    <section className={style.projects}>
      <div className="container">
        <HTag tag="h2">Latest projects:</HTag>
        <ul className={style.items}>
          <li className={style.item}>
            <div className={style.image}>
              <img src={img.src} alt="" className="" />
              <ul className={style.tags}>
                <li className="html">html</li>
                <li className={style.scss}>scss</li>
              </ul>
            </div>
            <div className={style.content}>
              <HTag tag="h5">Dim interior</HTag>
              <button>
                More info
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 6V18M12 6L7 11M12 6L17 11"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
