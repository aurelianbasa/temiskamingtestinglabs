import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock02 = ({ content: { container, text, buttons } }) => (
  <Container>
    <ContentContainer content={container} variant='cards.paper'>
    <Flex
        sx={{
          alignItems: `stretch`,
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            reverse ? `row-reverse` : `row`
          ]
        }}
      >
        <Box sx={{ mb: [5, null, 0] }}>
          <ContentText content={text} />
        </Box>
        <ContentButtons content={buttons} />
      </Flex>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(CallToActionBlock02)
