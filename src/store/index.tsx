import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { History, createHashHistory } from 'history';
import BaseStore from './base';
import GlobalStore from './global';

interface RootStore {
  routerStore: RouterStore;
  globalStore: GlobalStore;
}

function createRootStore(obj: any): {
  rootStore: RootStore;
  history: History;
} {
  const hashHistroy = createHashHistory();
  const routerStore = new RouterStore();

  // tslint:disable-next-line:no-shadowed-variable
  const history = syncHistoryWithStore(hashHistroy, routerStore);

  interface StoreConstructor<T> {
    new(rootStore: T): BaseStore<T>;
  }

  // tslint:disable-next-line:no-shadowed-variable
  const rootStore: any = {};
  rootStore.routerStore = routerStore;
  Object.keys(obj).forEach((key) => {
    const StoreClass: StoreConstructor<RootStore> = obj[key];
    rootStore[key] = new StoreClass(rootStore);
  });
  return { rootStore, history };
}

const { rootStore, history } = createRootStore({
  globalStore: GlobalStore,
});

export {
  rootStore,
  history,
  RootStore,
  GlobalStore,
  RouterStore,
};

// disable HMR for store
if (module.hot) {
  module.hot.decline();
}
