import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock02 = ({ content: { container, text, buttons } }) => (
  <Container>
    <ContentContainer content={container} variant='cards.paper'>
      <Flex
        sx={{
          flexDirection: [`column`],
          justifyContent: `space-between`,
          alignItems: `stretch`,
          textAlign: [`left`, `left`]
        }}
      >
      <Box sx={{ mb: [3, 0] }}>
          <ContentText content={text} />
        </Box>
        <Divider space={3} />
        <ContentButtons
                content={buttons}
                wrapperStyles={{ textAlign: `center` }}
              />
      </Flex>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(CallToActionBlock02)
