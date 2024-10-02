import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BIViTList } from "./biViT/BIViTList";
import { BIViTCreate } from "./biViT/BIViTCreate";
import { BIViTEdit } from "./biViT/BIViTEdit";
import { BIViTShow } from "./biViT/BIViTShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Service-A"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BIViT"
          list={BIViTList}
          edit={BIViTEdit}
          create={BIViTCreate}
          show={BIViTShow}
        />
      </Admin>
    </div>
  );
};

export default App;
