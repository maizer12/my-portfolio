'use client';
import React, { FC } from 'react';
import Badge from '@/common/Badge';
import useUpdateQueryParams from '@/utils/updateQueryParams';

interface IProps {
  type: string;
}

const ProjectFIlter: FC<IProps> = ({ type }) => {
  const badges = [
    {
      name: 'All',
      value: '',
    },
    {
      name: 'Web Application',
      value: 'web-application',
    },
  ];

  const updateQueryParams = useUpdateQueryParams();
  const toggleTechDropdown = (val: string) => {
    updateQueryParams('type', val);
  };

  return (
    <div className="max-w-[1324px] mx-auto flex gap-3">
      {badges.map((e, i) => (
        <button onClick={() => toggleTechDropdown(e.value)} key={i}>
          <Badge isActive={e.value === type} key={e.value}>
            {e.name}
          </Badge>
        </button>
      ))}
    </div>
  );
};

export default ProjectFIlter;
