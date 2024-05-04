import { HTag } from '@/common';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../common/tabs';
import { Block } from './Block';

const Experience = () => {
  return (
    <section className="bg-dark-700 py-24">
      <div className="max-w-[1220px] mx-auto w-full px-3 relative">
        <Block />
        <HTag tag="h2" className="mb-4">
          Experience:
        </HTag>
        <div className="mt-16">
          <Tabs defaultValue="account" className="flex gap-20 items-start w-full">
            <TabsList className="flex flex-col h-auto">
              <TabsTrigger
                value="account"
                className="block pl-8 py-5  text-primary-200 bg-dark-900 border-l-2 border-primary-200 min-w-[240px] text-start font-bold font-inter text-1xl"
              >
                Digital House
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="block pl-8 py-5 text-light-900 bg-dark-900  min-w-[240px] text-start font-bold font-inter text-1xl"
              >
                Zuplae
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-0 w-full">
              <div className="flex justify-between items-center mb-6">
                <h4 className="block text-light-900 min-w-[240px] text-start font-bold font-inter text-2xl">
                  Professor conteudista em Frontend
                </h4>
                <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl">
                  Nov 2021 - Nov 2022 (1 ano)
                </h5>
              </div>
              <h5 className="block mb-6 text-primary-200 min-w-[240px] text-start font-bold font-inter text-1xl">
                Digital House
              </h5>
              <h5 className="block text-light-400 min-w-[240px] text-start font-bold font-inter text-1xl">
                Trabalhei como instrutor conteudista em frontend na Digital House, o trabalho consistia em criar
                conteúdos para as aulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React,
                Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components.
              </h5>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default Experience;
