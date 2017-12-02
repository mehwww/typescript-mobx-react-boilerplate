import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
// import { ThemeProvider } from 'styled-components';
// import { Provider } from 'mobx-react';
// import defaultTheme from '@/utils/default-theme';
// import { GlobalStore, createRootStore } from '@/store';
import IndexPage from '@/routes/IndexPage';

// export interface RootStore {
//   globalStore: GlobalStore;
// }

// const { rootStore, history } = createRootStore<RootStore>({
//   globalStore: GlobalStore,
// });

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Redirect to="/" />
      </Switch>
    );
    // return (
    //   <Provider {...rootStore} >
    //     <ThemeProvider theme={defaultTheme}>
    //       <Router history={history}>
    //         <Switch>
    //           <Route path="/" exact component={IndexPage} />
    //           <Redirect to="/" />
    //         </Switch>
    //       </Router>
    //     </ThemeProvider>
    //   </Provider>
    // );
  }
}

export default Root;
