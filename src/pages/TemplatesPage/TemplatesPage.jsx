import React from 'react';
import { SimpleTemplate } from './Templates/SimpleTemplate/SimpleTemplate';
import './TemplatesPage.scss';

export const TemplatesPage = React.memo(() => {
  return (
    <section className='templates-container'>
        <h1>Select Templates</h1>
        <SimpleTemplate />
    </section>
  )
});
