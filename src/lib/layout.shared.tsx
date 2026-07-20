import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Image from 'next/image';
import { NavbarMenuCard } from '@/components/navbar-menu-card'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: 'J1N9H3',
    },
    links: [
        {
          type: 'custom',
          // only displayed on navbar, not mobile menu
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>ALPHA3D</NavbarMenuTrigger>
              <NavbarMenuContent>

                <NavbarMenuCard
                    slug={['alpha3d', 'sky_light', 'sky_atmosphere_1993']}
                    imageSrc="/images/sky_atmosphere.png"
                  />
                
                <NavbarMenuCard
                    slug={['alpha3d', 'material', 'pbr']}
                    imageSrc="/images/pbr.png"
                  />


              </NavbarMenuContent>

            </NavbarMenu>
          ),
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
