import common from './common'

export default {
  ...common.button,
  color: `white`,
  size: `85%`,
  '::after': {
    ...common.button['::after'],
    bg: `alpha`,
    borderColor: `alpha`
  }
}
