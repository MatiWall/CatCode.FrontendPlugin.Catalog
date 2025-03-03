import React from 'react';

type ItemProps = {
    children: React.ReactNode;
    when: boolean;
};

const Item: React.FC<ItemProps> = ({children,  when}) => {

    return children
}


type EntitySwitchProps = {
    children: React.ReactNode;
};

const EntitySwitch: React.FC<EntitySwitchProps> = ({children}) => {

    const entity = useEntity();

    const validChildren = React.Children.toArray(children) as React.ReactElement<ItemProps>[];

    // Find the first `Item` where `render` is `true`
    const matchingChild = validChildren.find(child => child.props.when);

    return matchingChild || null;
}

EntitySwitch.Case = Item;


export default EntitySwitch;