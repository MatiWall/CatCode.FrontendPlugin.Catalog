import React from 'react'
import { RoutingSwitch } from '../../../src'
import { MemoryRouter, Route, Routes, Outlet, useLocation } from 'react-router-dom'
import { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
  title: "Components/RoutingSwitch",
  component: RoutingSwitch,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/home"]}>
        <Routes>
          <Route path="/" element={<Story />}>
            <Route path="home" element={<div>🏠 Home Page</div>} />
            <Route path="about" element={<div>ℹ️ About Page</div>} />
            <Route path="contact" element={<div>📞 Contact Page</div>} />
            <Route path="disabled" element={<div>Disabled</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof RoutingSwitch>;

const Template: StoryFn<typeof RoutingSwitch> = () => (
  <div>
    <RoutingSwitch>
      <RoutingSwitch.Item label="Home" value="/home" />
      <RoutingSwitch.Item label="About" value="/about" />
      <RoutingSwitch.Item label="Contact" value="/contact" />
      <RoutingSwitch.Item label="Disabled" value="/disabled" active={false} />
    </RoutingSwitch>
    <Outlet />
  </div>
);

export const Default = Template.bind({});

