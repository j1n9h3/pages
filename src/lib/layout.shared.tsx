import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Image from 'next/image';


export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: 'J1N9H3',
    },
    links: [
        {
          // icon: <BookIcon />,
          text: 'ABOUT ME',
          url: '/about-me',
          on: 'nav',
          // secondary items will be displayed differently on navbar
          secondary: true,
        },
        // other items
    ],
    searchToggle: {
      enabled: false
    },
    themeSwitch: {
      enabled: false
    },
    // githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
