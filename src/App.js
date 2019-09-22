import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Index from './pages/index';
import Snippets from './Snippets';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ padding: '50px 50px' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/snippets" component={Snippets} />
            <Route path="/" component={Index} />
          </Switch>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
