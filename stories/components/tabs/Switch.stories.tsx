import React from 'react'
import { RoutingSwitch } from '../../../src'
import { BrowserRouter, Route, Routes, Outlet, useLocation } from 'react-router-dom'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'components/tabs/RoutingSwitch',
    component: RoutingSwitch,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
} as Meta




export const Item: StoryObj<typeof RoutingSwitch.Item> = {
    render: () => <RoutingSwitch.Item key={'/test'} label={'Test'} path={'/'} active={true}></RoutingSwitch.Item>
}


export const Switch: StoryObj<typeof RoutingSwitch> = {
    args: { },
    render: (args) => {
        const location = useLocation();
        return (<>
            <RoutingSwitch>
                <RoutingSwitch.Item key={'/'} label={'Test'} value={'/'}></RoutingSwitch.Item >
                <RoutingSwitch.Item key={'/test2'} label={'Test2'} value={'/test2'}></RoutingSwitch.Item >
                <RoutingSwitch.Item key={'/test3'} label={'False'} value={'/test3'} active={false}></RoutingSwitch.Item >
                <RoutingSwitch.Item key={'/test4'} label={'Test 4'} value={'/test4'} active={true}></RoutingSwitch.Item >
            </RoutingSwitch>
            <Outlet/>
        </>
        )
    }
}
