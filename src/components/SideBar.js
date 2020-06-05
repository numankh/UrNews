import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import HouseIcon from '@material-ui/icons/House';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import MessageIcon from '@material-ui/icons/Message';
import FireIcon from '@material-ui/icons/Whatshot';


function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default function ListRouter() {

  return (
    <List aria-label="Market Sectors">
        <ListItemLink to="/finance" primary="Finance" icon={<AccountBalanceIcon />} />
        <ListItemLink to="/tech" primary="Technology" icon={<DevicesOtherIcon />} />
        <ListItemLink to="/health" primary="Health Care" icon={<LocalHospitalIcon />} />
        <ListItemLink to="/housing" primary="Real Estate" icon={<HouseIcon />} />
        <ListItemLink to="/energy" primary="Energy" icon={<FireIcon />} />
        <ListItemLink to="/comm" primary="Communication" icon={<PhoneInTalkIcon />} />
        <ListItemLink to="/msgs" primary="Get Notifications" icon={<MessageIcon />} />
    </List>
  );
}
