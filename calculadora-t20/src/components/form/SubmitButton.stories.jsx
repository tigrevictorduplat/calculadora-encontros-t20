import React from 'react'
import SubmitButton from './SubmitButton';

export default {
  component: SubmitButton,
};

const Template = (args) => <SubmitButton {...args} />

export const Default = Template.bind({});
Default.args = {
  text : 'Enviar'
}