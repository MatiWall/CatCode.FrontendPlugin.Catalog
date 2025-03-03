import React, { useState } from 'react'
import { EntitySwitch } from '../../../src'
import { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
    title: "Components/switch/KindSwitch",
    component: EntitySwitch,
    argTypes: {
        activeIndex: {
            control: { type: "number", min: 1, max: 4, step: 1 },
        },
    },
} as Meta<typeof EntitySwitch>;

const Template = ({ activeIndex }: { activeIndex: number }) => (
    <EntitySwitch>
        <EntitySwitch.Case when={activeIndex === 1}>
            <div>test 1</div>
        </EntitySwitch.Case>
        <EntitySwitch.Case when={activeIndex === 2} >
            <div>test 2</div>
        </EntitySwitch.Case>
        <EntitySwitch.Case when={activeIndex === 3} >
            <div>test 3</div>
        </EntitySwitch.Case>
        <EntitySwitch.Case when={activeIndex === 4} >
            <div>test 4</div>
        </EntitySwitch.Case>
    </EntitySwitch>
);

export const Default = Template.bind({});
Default.args = {
    activeIndex: 2, // Default to "test 2"
};

