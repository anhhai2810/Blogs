import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BNhChNList } from "./bNhChN/BNhChNList";
import { BNhChNCreate } from "./bNhChN/BNhChNCreate";
import { BNhChNEdit } from "./bNhChN/BNhChNEdit";
import { BNhChNShow } from "./bNhChN/BNhChNShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Service-B"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BNhChN"
          list={BNhChNList}
          edit={BNhChNEdit}
          create={BNhChNCreate}
          show={BNhChNShow}
        />
      </Admin>
    </div>
  );
};

export default App;
