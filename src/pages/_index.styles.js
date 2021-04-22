/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './hexagonal.png'

export default {
  heroContainer: {
    position: `relative`,
    pt: [5, 6],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      width: [`full`, `90%`],
      height: `80%`,
      top: [`-10%`, 0],
      right: `50%`,
      transform: `translate(50%, 0)`,
      zIndex: -1
    },
    '::before': {
      borderRadius: `xl`,
      background: `linear-gradient(
          180deg,
          #f7f9fe 0%,
          #f4f4f8 100%
        )`
    },
    '::after': {
      background: `url(${heroBg}) no-repeat right top`,
      backgroundSize: `50%`,
      opacity: 0.1
    }
  },
  featuresContainer: {
    position: `relative`,
    py: [5, 6],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: 0,
      right: `50%`,
      transform: `translate(50%, 0)`,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
          180deg,
          #f7f9fe 0%,
          #f4f4f8 100%
        )`
    }
  },
  whyContainer: {
    position: `relative`,
    py: [5, 6],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      width: [`full`, `90%`],
      height: `80%`,
      top: 0,
      right: `50%`,
      transform: `translate(50%, 0)`,
      zIndex: -1
    },
    '::before': {
      borderRadius: `xl`,
      background: `linear-gradient(
          180deg,
          #f7f9fe 0%,
          #f4f4f8 100%
        )`
    },
    '::after': {
      transform: `scaleX(-1)`,
      background: `url(${heroBg}) no-repeat left top`,
      backgroundSize: `50%`,
      opacity: 0.1
    }
  }
}
