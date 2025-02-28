import React, { ReactNode } from 'react';
interface ItemProps {
    label: string;
    value: string;
    active?: boolean;
}
interface RoutingSwitchProps {
    children: ReactNode;
}
interface RoutingSwitchComponent extends React.FC<RoutingSwitchProps> {
    Item: React.FC<ItemProps>;
}
declare const RoutingSwitch: RoutingSwitchComponent;
export default RoutingSwitch;
