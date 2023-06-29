import common from './common'

export default {
  ...common.button,
  fontSize: 5,
  color: `white`,
  '::after': {
    ...common.button['::after'],
    bg: `beta`,
    borderColor: `beta`
  }
}
