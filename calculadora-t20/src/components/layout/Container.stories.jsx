import React from 'react';
import Container from './Container';

export default {
  component: Container,
};

const Template = (args) => (
<Container {...args}>
  <div style={{ backgroundColor: '#F00', width: '100px', height: '100px' }}>&nbsp;</div>
  <div style={{ backgroundColor: '#0F0', width: '100px', height: '100px' }}>&nbsp;</div>
  <div style={{ backgroundColor: '#00F', width: '100px', height: '100px' }}>&nbsp;</div>
</Container>

)

export const Default = Template.bind({});
Default.args = {
  customClass : 'min-height'
}

export const Columns = Template.bind({});
Columns.args = {
  customClass : 'column'
}

export const FromStart = Template.bind({});
FromStart.args = {
  customClass : 'start'
}