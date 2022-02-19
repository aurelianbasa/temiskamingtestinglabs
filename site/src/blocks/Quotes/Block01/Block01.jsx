import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import { ImQuotesRight } from 'react-icons/im'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1
  }
}

const TestimonialsBlock01 = ({ content: { text, collection } }) => (
  <Container>
    <Box sx={{ textAlign: `left` }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Divider />
    <Flex sx={{ mx: -3, flexWrap: `wrap` }}>
      {collection?.map(({ container, text }, index) => (
        <Box
          key={`item-${index}`}
          sx={{ flexBasis: [`1`, null, `1/2`, `1/3`], flexGrow: 1, p: 3 }}
        >
          <Reveal effect='fadeInLeft' delay={0.25 * (index + 2)}>
            <ContentContainer
              content={container}
              variant='cards.paper'
              sx={{ textAlign: `left` }}
            >
             <ImQuotesRight
                  css={css({
                    size: `icon.lg`,
                    color: `alpha`,
                    position: `absolute`,
                    bottom: `15%`,
                    left: `95%`,
                    transform: `translate(-50%, 0)`
                  })}
                />
              <ContentText content={text} />
            </ContentContainer>
          </Reveal>
        </Box>
      ))}
    </Flex>
  </Container>
)

export default WithDefaultContent(TestimonialsBlock01)
