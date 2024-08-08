"use client";

import React from 'react'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image';

const FooterComponent = () => {
  const pathName = usePathname();


  return (
    <footer className={noHeaderFooterUrls.includes(pathName) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image 
              src={inclusion.icon}
              alt={inclusion.title}
              width={36}
              height={36}
              className={classes.icon}
              />
            </li>
          )}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent