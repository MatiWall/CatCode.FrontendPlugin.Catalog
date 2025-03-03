import React, { ReactNode } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation, Navigate } from 'react-router-dom';

// Define types for the props of RoutingSwitch.Item
interface ItemProps {
  label: string;
  value: string;
  active?: boolean;
}

// Define types for the props of RoutingSwitch
interface RoutingTabsProps {
  children: ReactNode;
}



const RoutingTabs = ({ children }: RoutingTabsProps) => {
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
RoutingTabs.Item = Item;

export default RoutingTabs;
