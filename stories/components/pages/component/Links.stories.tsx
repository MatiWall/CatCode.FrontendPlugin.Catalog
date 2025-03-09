import React from 'react'
import {Links} from '../../../../src/components/pages/component';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { EntityProvider } from '../../../../src';



const component = {
    "apiVersion": "catcode.io/v1alpha1",
    "kind": "Component",
    "metadata": {
      "name": "example-component",
      "description": "This is a test component used to develop the about component"
    },
    "spec": {
      "type": "API",
      "lifecycle": "production",
      "owner": "team-x",
      "tags": [
        "backend",
        "critical"
      ],
      "links": [
        {'title': 'Test links', 'url': 'www.example.com'}
      ],
      "dependencies": [
        "database",
        "auth-service"
      ]
    }
  }
  

export default {
  title: "Components/pages/component/Links",
  component: Links,
  decorators: [
    (Story) => (
      <EntityProvider value={component}>
        <Story/>
      </EntityProvider>
    ),
  ],
} as Meta<typeof Links>;

const Template: StoryFn<typeof Links> = () => (
  <Links/>
);

export const Default = Template.bind({});

