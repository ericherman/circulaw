import { useRouter } from 'next/router';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import MeasureOverview from '../components/measure-overview';
import MeasureTable from '../components/measure-table';

import {
    greenBoxComponent,
    hoverTextComponent,
    pdfBlockComponentMeasurePage,
    smallParaComponent,
    dropDownComponent,
  } from '../lib/portable-text/portable-text-types';
  import {
    bulletComponent,
    numberComponent,
    bulletItemComponent,
    numberItemComponent,
  } from '../lib/portable-text/portable-text-lists';
  import {
    firstH2Component,
    h2Component,
    h3Component,
    normalTextComponent,
  } from '../lib/portable-text/portable-text-blocks';
  import { linkComponent } from '../lib/portable-text/portable-text-marks';

  const components = {
    types: {
      greenBox: greenBoxComponent,
      hoverText: hoverTextComponent,
      pdfBlock: pdfBlockComponentMeasurePage,
      smallPara: smallParaComponent,
      dropDown: dropDownComponent,
    },
    list: {
      bullet: bulletComponent,
      number: numberComponent,
    },
    listItem: {
      number: bulletItemComponent,
      bullet: numberItemComponent,
    },
    block: {
      firstH2: firstH2Component,
      h2: h2Component,
      h3: h3Component,
      // need to add other styles here
      normal: normalTextComponent,
    },
    marks: {
      link: linkComponent,
    },
  };

export default function Instrument({data}) {
    console.log(data.measure, 'non preview')
    const router = useRouter();
    return (
        <div className='measure-bg'>
        <div className='global-margin sm:pt-10 '>
          <div className='grid grid-cols-1 sm:grid-cols-12 content-center'>
            <div className='sm:col-span-12 row-span-1 h-12 mt-4'>
              {/* BREADCRUMB */}
              <button type='button' onClick={() => router.back()}>
                <span className='breadcrumb flex justify-center items-center underline'>
                  <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
                </span>{' '}
                {/* should all breadcrumbs be green this is black in figma */}
              </button>
            </div>
            <div className='sm:col-span-12 row-span-1'>
              <h1 className='lg:block sm:pt-4 pb-6 sm:pb-10 mobile sm:desktop'>
                {data?.measure?.titel}
              </h1>
            </div>
            {data?.measure?.subtitel && (
              <div className='sm:col-span-7 row-span-1'>
                <h2 className='lg:block p-lg sm:p-xl pb-10'> {data?.measure?.subtitel}</h2>
              </div>
            )}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <MeasureOverview data={data} viewport='mobile' />
            <div className='sm:max-w-3xl pb-20 col-span-2 '>
              <div className='py-4'>
                <PortableText value={data?.measure?.content} components={components} />
              </div>
              <MeasureTable data={data} />
            </div>
            <MeasureOverview data={data} viewport='desktop' />
          </div>
        </div>
      </div>
    )
}