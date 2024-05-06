import {
  cibBootstrap,
  cibGulp,
  cibJava,
  cibJquery,
  cibJs,
  cibPhp,
  cibReact,
  cibRedux,
  cibSwagger,
  cibTypescript,
  cibVueJs,
  cibWebpack,
  cibWordpress,
} from '@coreui/icons';
import { cibGithub, cibLinkedin, cibTelegram } from '@coreui/icons';

export const experienceTabs = {
  triggers: [
    {
      name: 'Global Services',
      value: 'global',
    },
    {
      name: 'MAXOPEN',
      value: 'maxopen',
    },
    {
      name: 'DirectHills LLC',
      value: 'hills',
    },
  ],
  contents: [
    {
      value: 'global',
      company: 'Global Services and Software Inc',
      date: '06.2023 - 01.2024',
      position: 'FrontEnd developer',
      desc: `Development of a new design and functionality for an internal
			company project, involving technologies such as Vue.js, Vuex
			Webpack, and GitLab, as well as providing support for legacy projects
			on WordPress.`,
      icons: [cibVueJs, cibJs, cibWebpack, cibPhp, cibWordpress],
    },
    {
      value: 'maxopen',
      company: 'MAXOPEN',
      date: '12.2022 - 06.2023',
      position: 'FrontEnd developer',
      desc: `Developing cross-platform web applications using technologies such
			as HTML, CSS, SCSS, and JavaScript. Experience with version control
			system Git and enhancing existing products, including both regular
			websites and WordPress-based websites.`,
      icons: [cibJs, cibJquery, cibGulp, cibBootstrap, cibWordpress],
    },
    {
      value: 'hills',
      company: 'DirectHills LLC',
      date: '07.2022 - 12.2022',
      position: 'FrontEnd developer',
      desc: `Development of an internal web application for automating routine
			tasks of managers, technology stack: React, TypeScript, Tailwind CSS,
			Redux Toolkit; backend in Java Spring.`,
      icons: [cibReact, cibTypescript, cibRedux, cibSwagger, cibJava],
    },
  ],
};

export const contactsArray = [
  { link: 'https://www.linkedin.com/in/vasil-bazhiv-565a5424b/', icon: cibLinkedin, name: 'Linkedin' },
  { link: 'https://t.me/vasilbazhiv', icon: cibTelegram, name: 'Telegram' },
  { link: 'https://github.com/maizer12', icon: cibGithub, name: 'GitHub' },
];
