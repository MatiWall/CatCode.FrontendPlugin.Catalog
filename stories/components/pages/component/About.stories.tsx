import React from 'react'
import {AboutComponent} from '../../../../src/components/pages/component';
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
      "dependencies": [
        "database",
        "auth-service"
      ]
    }
  }
  

export default {
  title: "Components/pages/component/About",
  component: AboutComponent,
  decorators: [
    (Story) => (
      <EntityProvider value={component}>
        <Story/>
      </EntityProvider>
    ),
  ],
} as Meta<typeof AboutComponent>;

const Template: StoryFn<typeof AboutComponent> = () => (
  <AboutComponent/>
);

export const Default = Template.bind({});

