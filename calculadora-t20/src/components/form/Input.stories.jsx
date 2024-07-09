import React from 'react';
import Input from './Input';


export default {
  component: Input
}

const Template = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
    type: 'text', 
    title: 'Input Exemplo', 
    name : 'input', 
    placeholder: 'Insira um texto aqui'
};

export const DateInput = Template.bind({})
DateInput.args = {
    type: 'date', 
    title: 'Data de Nascimento', 
    name : 'date',
};