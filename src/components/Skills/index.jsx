'use client';
import { HTag } from '../../common';
import style from './Skills.module.scss';
import NextIcon from '../../../public/next-icon.png';
// import 'swiper/css';

const Skills = () => {
  return (
    <section className={style.skills}>
      <div className={style.inner + ' container'}>
        {/* <HTag tag='h2' className={style.title}>
					My Skills:
				</HTag>
				<ul className={style.items}>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
						<HTag tag='h5'>React</HTag>
					</li>
					<li className={style.item}>
						<img src='https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg' alt='' />
						<HTag tag='h5'>Redux</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5'>Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5'>Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5'>VueX</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5'>Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5'>Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5'>VueX</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5'>Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5'>Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5'>VueX</HTag>
					</li>
					<li className={style.item}>
						<img src={NextIcon.src} alt='' />
						<HTag tag='h5'>Next</HTag>
					</li>
					<li className={style.item}>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' alt='' />
						<HTag tag='h5'>Vue</HTag>
					</li>
					<li className={style.item}>
						<img src='https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png' alt='' />
						<HTag tag='h5'>VueX</HTag>
					</li>
				</ul> */}
        <div className={style.header}>
          <HTag tag="h2" className={style.title}>
            My Skills:
          </HTag>
          <div className={style.buttons}>
            <button>
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
            <button>
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
        </div>

        {/* <ul className={style.list}>
          <Swiper spaceBetween={50} slidesPerView="auto" centeredSlidesBounds={true} loop={true} autoplay={true}>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img src="https://www.bairesdev.com/wp-content/uploads/2020/07/redux.svg" alt="" />
                <HTag tag="h5">Redux</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              {' '}
              <li className={style.item}>
                <img src={NextIcon.src} alt="" />
                <HTag tag="h5">Next</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              {' '}
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                  alt=""
                />
                <HTag tag="h5">Vue</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img src="https://rock-the-prototype.com/wp-content/uploads/2023/06/VueX.png" alt="" />
                <HTag tag="h5">VueX</HTag>
              </li>
            </SwiperSlide>

            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
            <SwiperSlide className={style['swiper-slide']}>
              <li className={style.item}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt=""
                />
                <HTag tag="h5">React</HTag>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul> */}
      </div>
    </section>
  );
};

export default Skills;
