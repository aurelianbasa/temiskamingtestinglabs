import common from './common'

export default {
  ...common.button,
  color: `white`,
  fontSize: `85%`,
  '::after': {
    ...common.button['::after'],
    bg: `alpha`,
    borderColor: `alpha`
  }
}
