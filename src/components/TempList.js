import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link as RouterLink } from 'react-router-dom';

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

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

export default function ListRouter() {
  const classes = useStyles();

  return (
    <List aria-label="Market Sectors">
        <ListItemLink to="/finance" primary="Finance" icon={<InboxIcon />} />
        <ListItemLink to="/tech" primary="Technology" icon={<DraftsIcon />} />
        <ListItemLink to="/health" primary="Health Care" icon={<DraftsIcon />} />
        <ListItemLink to="/housing" primary="Real Estate" icon={<DraftsIcon />} />
        <ListItemLink to="/energy" primary="Energy" icon={<DraftsIcon />} />
        <ListItemLink to="/comm" primary="Communication" icon={<DraftsIcon />} />
    </List>
  );
}
