import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink, Switch} from 'react-router-dom';

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
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div className={classes.root}>
        {/* <Route>
          {({ location }) => (
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route> */}
        <Paper elevation={0}>
          <List aria-label="Market Sectors">
            <ListItemLink to="/finance" primary="Finance" icon={<InboxIcon />} />
            <ListItemLink to="/tech" primary="Technology" icon={<DraftsIcon />} />
            <ListItemLink to="/health" primary="Health Care" icon={<DraftsIcon />} />
            <ListItemLink to="/housing" primary="Real Estate" icon={<DraftsIcon />} />
            <ListItemLink to="/energy" primary="Energy" icon={<DraftsIcon />} />
            <ListItemLink to="/comm" primary="Communication" icon={<DraftsIcon />} />
          </List>
          {/* <Divider />
          <List aria-label="secondary mailbox folders">
            <ListItemLink to="/trash" primary="Trash" />
            <ListItemLink to="/spam" primary="Spam" />
          </List> */}
        </Paper>

        <Switch>
          <Route exact path="/">
            <p>base</p>
          </Route>
          <Route path="/finance">
            <p>finance</p>
          </Route>
          <Route path="/tech">
            <p>tech</p>
          </Route>
          <Route path="/health">
            <p>health</p>
          </Route>
          <Route path="/housing">
            <p>housing</p>
          </Route>
          <Route path="/energy">
            <p>energy</p>
          </Route>
          <Route path="/comm">
            <p>comm</p>
          </Route>
        </Switch>
      </div>
    </MemoryRouter>
  );
}
