import { HTag } from '@/common';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/Tabs';
import { Block } from './Block';
import { experienceTabs } from '@/_config';
import { Icon } from '@/common/Icon';
import { cilCalendar } from '@coreui/icons';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations();

  return (
    <section className="bg-dark-700 py-24">
      <div className="max-w-[1220px] mx-auto w-full px-3 relative">
        <Block />
        <HTag tag="h2" className="mb-4">
          {t('experienceTitle')}
        </HTag>
        <div className="mt-16">
          <Tabs
            defaultValue={experienceTabs.triggers[0].value}
            orientation="vertical"
            className="flex gap-20 items-start w-full"
          >
            <TabsList className="flex flex-col h-auto">
              {experienceTabs.triggers.map((e) => (
                <TabsTrigger
                  value={e.value}
                  className="block pl-8 py-5 tab-item  bg-dark-900 border-l-2 min-w-[240px] text-start font-bold font-inter text-1xl text-light-900"
                  key={e.value}
                >
                  {e.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {experienceTabs.contents.map((e) => (
              <TabsContent value={e.value} className="p-0 w-full" key={e.company}>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="block text-light-900 min-w-[240px] text-start font-bold font-inter text-2xl">
                    {e.position}
                  </h4>
                  <h5 className="text-light-400 text-start font-bold font-inter text-1xl flex items-center gap-2">
                    {e.date}
                    <Icon icon={cilCalendar} className="w-6" />
                  </h5>
                </div>
                <h5 className="block mb-6 text-primary-200 min-w-[240px] text-start font-bold font-inter text-1xl">
                  {e.company}
                </h5>
                <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl">
                  {e.desc}
                </h5>
                <div className="flex w-fit mt-4 ml-auto gap-2">
                  {e.icons?.map((e, i) => (
                    <Icon icon={e} className="w-7 fill-light-400" key={i} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default Experience;
