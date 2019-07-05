import { Switch, Route } from "react-router-dom";
import routes from './Routes.js';
import React from "react";
import Layout from "./components/layout.js";
import 'antd/dist/antd.css';
import './assets/styles/index.css';

export default function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(v=><Route key={v.id} exact={v.exact} path={v.path} component={v.component} />)}
      </Switch>
    </Layout>
  );
}