'use client';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const Skill = () => {
  return (
    <div className="flex gap-2">
      <CIcon icon={icon.cibReact} size="xxl" className="w-8 fill-blue-400" />
      <CIcon icon={icon.cibVueJs} size="xxl" className="w-8 fill-green-500" />
      <CIcon icon={icon.cibJs} size="xxl" className="w-8 fill-yellow-500" />
    </div>
  );
};

export default Skill;
