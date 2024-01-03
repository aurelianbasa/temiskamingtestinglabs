import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import gatsbySVG from '../../assets/Gatsby-Logo.svg'

const styles = {
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    textDecoration: `none`,
    ':visited': {
      color: `heading`
    },
    ':hover': {
      color: `#663399`
    },
    svg: {
      height: 18,
      ml: 0
    }
  }
}

const PoweredByGatsby = () => (
  <Link
    target='_blank'
    title='Gatsby'
    href='https://www.resourceactive.com'
    rel='noopener'
    sx={styles.link}
  >
    Designed By Resource Active
    {gatsbySVG && <SVG src={gatsbySVG} />}
  </Link>
)

export default PoweredByGatsby
