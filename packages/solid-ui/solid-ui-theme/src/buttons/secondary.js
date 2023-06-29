import common from './common'

export default {
  ...common.button,
  color: `white`,
  fontSize: 4,
  '::after': {
    ...common.button['::after'],
    bg: `beta`,
    borderColor: `beta`
  }
}
