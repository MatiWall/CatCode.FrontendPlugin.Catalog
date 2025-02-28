import { jsx as _jsx } from "react/jsx-runtime";
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
const RoutingSwitch = ({ children }) => {
    const location = useLocation();
    return (_jsx(Tabs, { value: location.pathname, children: children }));
};
const Item = ({ label, value, active = true }) => {
    if (!active)
        return null;
    return (_jsx(Tab, { label: label, value: value, component: Link, to: value }));
};
// Attach Item to RoutingSwitch
RoutingSwitch.Item = Item;
export default RoutingSwitch;
//# sourceMappingURL=Switch.js.map