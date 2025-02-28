import React, { ReactNode } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link, useLocation, Navigate } from 'react-router-dom';

// Define types for the props of RoutingSwitch.Item
interface ItemProps {
  label: string;
  value: string;
  active?: boolean;
}

// Define types for the props of RoutingSwitch
interface RoutingSwitchProps {
  children: ReactNode;
}

// Define RoutingSwitch as a functional component with Item as a static property
interface RoutingSwitchComponent extends React.FC<RoutingSwitchProps> {
  Item: React.FC<ItemProps>;
}


const RoutingSwitch: RoutingSwitchComponent = ({ children }) => {
  const location = useLocation();
  return (
    <Tabs value={location.pathname}>
      {children}
    </Tabs>
  );
};

const Item: React.FC<ItemProps> = ({ label, value, active = true }) => {

  if (!active) return null;


  return (
      <Tab
        label={label}
        value={value}
        component={Link}
        to={value}
      />
  );
};

// Attach Item to RoutingSwitch
RoutingSwitch.Item = Item;

export default RoutingSwitch;
