import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/layout';

import MapImage from '@media/about/map.webp';
import HeroImage from '@media/about/hero.webp';
import ProfileImage from '@media/about/profile.webp';

export default function About() {
  return (
    <Layout>
      <div className='grid gap-32 pt-20 md:gap-60 md:pt-40'>
        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
          <img className='rounded-2xl' src={HeroImage} alt='Hero' />

          <div className='flex flex-col'>
            <p className='mb-8 text-2xl font-bold text-primary'>ABOUT US</p>
            <h2 className='mb-10 text-5xl font-bold'>Overview</h2>
            <p className='mb-8 text-xl font-bold leading-normal text-gray'>
              We are a team of mining and geotechnical experts with deep roots in the area. The facility known as
              Temiskaming Testing Labs is based in the historic town of Cobalt and has built a reputation around its
              processing of local ores, particularly silver ores.
            </p>

            <Link
              className='flex self-start rounded-full bg-primary px-10 py-3 text-lg font-black text-white'
              to='/contact'
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className='grid gap-32 bg-whiteSmoke py-20 md:py-40'>
          <div className='container mx-auto grid gap-16 px-4 md:px-8 lg:grid-cols-4-6'>
            <div>
              <p className='mb-4 text-2xl font-bold text-primary'>A Public Initiative</p>
              <h2 className='text-3xl font-bold leading-normal'>Founded to Support Local Mine Operators</h2>
            </div>

            <div>
              <p className='leading-[1.8] text-gray'>
                The Ontario Department of Mines established the Temiskaming Testing Laboratory in 1921 to serve local
                mine operators. Since few of the mining operations were large enough to justify their own assay office
                and specialized equipment, it was decided the provincical government should build and manage the
                service.
                <br />
                <br /> The facility was extensively renovated and updated over the years by the Ministry of Northern
                Development & Mines as a technically advanced bulk sampling and testing station for minerals and
                precious metals. By the 1990s the operation was decommissioned due to a decrease in Silver mining in the
                area.
              </p>
            </div>
          </div>

          <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
            <div className='flex justify-center lg:justify-start'>
              <img src={ProfileImage} alt='Profile' />
            </div>

            <div className='grid'>
              <p className='mb-8 text-2xl font-bold text-primary'>LAB MANAGER</p>
              <h2 className='mb-10 text-5xl font-bold'>
                Anthony Dapaah <span className='text-primary'>Ph.D.</span>
              </h2>
              <p className='leading-[1.8] text-gray'>
                Anthony Dapaah has over 30 years experience in the laboratory industry, including 20 years in operations
                and management. Dr. Dapaah obtained his Masters and PhD degrees in Japan and worked with Sumitomo Metals
                Technology in Japan managing the ultra trace metals analysis department from 1998 to 2004; where he
                improved analytical methods for the determination of ultratrace impurities in semiconductor related
                materials and in high purity metal alloys.
                <br />
                <br /> On immigrating to Canada, Dr. Dapaah worked with Maxxam Analytics (now Bureau Veritas) as
                supervisor in the inorganic processing department for 4 years. After 6 years with Agat Laboratories, Dr.
                Dapaah worked with SGS in New Jersey as general chemistry lab manager.
              </p>
            </div>
          </div>

          <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
            <div>
              <p className='mb-4 text-2xl font-bold text-gray'>IN THE HEART OF THE CAMP</p>
              <h2 className='mb-8 text-4xl font-bold leading-normal'>Independently Operated</h2>
              <p className='leading-[1.8] text-gray'>
                The perennial difficulty of timely assay results motivated the acquisition in the short term. The longer
                term implications expand operational capability for a series of projects in the camp, and have the
                benefit of contributing to the local economy.
              </p>
            </div>

            <img className='rounded-2xl' src={MapImage} alt='Map' />
          </div>

          <div className='mx-auto w-full max-w-[1410px] rounded-[2rem] bg-dark px-8 py-16'>
            <div className='container mx-auto grid items-center gap-16 lg:grid-cols-4-6'>
              <div className='flex flex-col'>
                <p className='mb-4 text-2xl font-bold text-primaryLight'>Our Approach to Mining</p>
                <h2 className='mb-8 text-3xl font-bold leading-normal text-white'>
                  Securing the Facility was a Strategic decision to consolidate the camp
                </h2>

                <a
                  className='self-start rounded-full bg-secondary px-10 py-3 text-lg font-black text-white'
                  href='mailto:anthony@temiskaminglabs.com'
                >
                  Schedule a Consultation
                </a>
              </div>

              <p className='text-xl font-bold leading-normal text-white'>
                PolyMet Labs first purchased the facility in 2000 and began operating as an Assay Laboratory, and Bulk
                Sampling, Crushing, Grinding, Processing, Upgrading, and Smelting Plant. When the facility changed
                ownership in 2020 it was relaunched as Temiskaming Testing Laboratories Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>About | TTL</title>
      <meta
        name='description'
        content='We are a team of mining and geotechnical experts with deep roots in the area. The facility known as Temiskaming Testing Labs is based in the historic town of Cobalt and has built a reputation around its processing of local ores, particularly silver ores.'
      />
    </>
  );
}
