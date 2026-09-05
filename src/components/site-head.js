import * as React from 'react';
import ShareImage from '@media/home/ttl-fire-assay-1400.webp';
export default function SiteHead({ title, description, path = '/', noIndex = false }) {
  const canonical = 'https://temiskaminglabs.com' + path;
  return (
    <>
      <html lang='en' />
      <title>{title} | Temiskaming Testing Laboratories</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Temiskaming Testing Laboratories' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={'https://temiskaminglabs.com' + ShareImage} />
      <meta property='og:image:alt' content='Assay furnace work from the TTL laboratory archive.' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={'https://temiskaminglabs.com' + ShareImage} />
      {noIndex && <meta name='robots' content='noindex, follow' />}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Temiskaming Testing Laboratories',
          url: 'https://temiskaminglabs.com',
          telephone: '+1-705-679-5500',
          email: 'aurelian@temiskaminglabs.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Presley Street',
            addressLocality: 'Cobalt',
            addressRegion: 'ON',
            postalCode: 'P0J 1C0',
            addressCountry: 'CA',
          },
        })}
      </script>
    </>
  );
}
