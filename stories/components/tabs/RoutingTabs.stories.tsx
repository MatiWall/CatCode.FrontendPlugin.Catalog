import React from 'react'
import { RoutingTabs } from '../../../src'
import { MemoryRouter, Route, Routes, Outlet, useLocation } from 'react-router-dom'
import { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
  title: "Components/tabs/RoutingTabs",
  component: RoutingTabs,
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
} as Meta<typeof RoutingTabs>;

const Template: StoryFn<typeof RoutingTabs> = () => (
  <div>
    <RoutingTabs>
      <RoutingTabs.Item label="Home" value="/home" />
      <RoutingTabs.Item label="About" value="/about" />
      <RoutingTabs.Item label="Contact" value="/contact" />
      <RoutingTabs.Item label="Disabled" value="/disabled" active={false} />
    </RoutingTabs>
    <Outlet />
  </div>
);

export const Default = Template.bind({});

