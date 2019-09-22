import React from 'react';
import { Route, Switch} from "react-router-dom";

import ConfirmModal from './ConfirmModal';

export default ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}/confirm-modal`} component={ConfirmModal} />
    </Switch>
  );
}