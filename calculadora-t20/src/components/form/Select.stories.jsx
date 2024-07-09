import React from 'react';
import Select from './Select';


export default {
  component: Select

};

const Template = (args) => <Select {...args} />

export const Default = Template.bind({});
Default.args = 
  {title: 'Opções', 
    name :'select', 
    options : [
      {
        "id": "1",
        "name": "Combate"
      },
      {
        "id": "2",
        "name": "Desafio de Perícia"
      },
      {
        "id": "3",
        "name": "Embate Social"
      },
      {
        "id": "4",
        "name": "Perigo Complexo"
      },
      {
        "id": "5",
        "name": "Teste Estendido"
      },
      {
        "id": "6",
        "name": "Chefe Final"
      }
    ]

}