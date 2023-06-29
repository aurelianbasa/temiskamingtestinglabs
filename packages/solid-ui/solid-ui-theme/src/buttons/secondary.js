import common from './common'

export default {
  ...common.button,
  size: '80%',
  color: `white`,
  '::after': {
    ...common.button['::after'],
    bg: `beta`,
    borderColor: `beta`
  }
}
