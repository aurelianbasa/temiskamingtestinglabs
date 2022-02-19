import React from 'react'
import { Box, Input, Button, Spinner } from 'theme-ui'
import useMailChimp from '@helpers/useMailChimp'

const styles = {
  msg: {
    pb: 1,
    pl: 1
  },
  row: {
    display: [`inline-flex`, `inline-flex`],
    width: `full`,
    justifyContent: [`center`, `space-between`],
    borderRadius: [`lg`, `xl`],
    bg: `white`,
    borderWidth: `md`,
    borderStyle: `solid`,
    borderColor: `omegaLight`,
    p: 2
  },
  input: {
    bg: `transparent`,
    width: `auto`,
    py: 0,
    pl: 2,
    mt: [2, 0]
  },
  button: {
    minWidth: 120,
    fontSize: 1,
    px: 3,
    py: 1,
    my: [3, 0]
  }
}

const NewsletterCompact = props => {
  const { handleSubmit, canSubmit, submitting, message, success } =
    useMailChimp()

  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <Box
          sx={styles.msg}
          dangerouslySetInnerHTML={{ __html: message }}
          color={success ? 'secondary' : 'red'}
        />
      )}
      {canSubmit && (
        <>
          <Box variant='forms.row' sx={styles.row}>
            <Input
              name='email'
              type='email'
              placeholder='Enter email to subscribe'
              aria-label='Enter email to subscribe'
              required
              sx={styles.input}
            />
            <Button
              type='submit'
              variant={success || submitting ? 'disabled' : 'dark'}
              disabled={success || submitting}
              sx={styles.button}
            >
              Subscribe {submitting && <Spinner size='20' />}
            </Button>
          </Box>
        </>
      )}
    </form>
  )
}

export default NewsletterCompact
