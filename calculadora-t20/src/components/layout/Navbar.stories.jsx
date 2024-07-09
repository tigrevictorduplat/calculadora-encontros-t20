import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default {
  component: Navbar,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
