const heading = {
  display: `block`,
  color: `heading`,
  textDecoration: `none`,
  mb: 3
}

export default {
  h1: {
    ...heading,
    fontSize: 9,
    maxWidth: 650,
    mx: `auto`,
    mb: 4
  },
  h2: {
    ...heading,
    fontSize: 8,
    maxWidth: 650,
    mx: `auto`,
    mb: 4
  },
  h3: {
    ...heading,
    fontSize: 7
  },
  h4: {
    ...heading,
    fontSize: 6
  },
  h5: {
    ...heading,
    fontSize: 5,
    mb: 2
  },
  h6: {
    ...heading,
    fontSize: 4,
    mb: 0
  },
  medium: {
    fontSize: 4,
    mb: 3
  },
  small: {
    fontSize: 1,
    m: 0
  },
  xsmall: {
    fontSize: 0,
    m: 0
  },
  p: {
    fontSize: 4,
    fontFamily: `body`,
    mb: 3
  }
}
