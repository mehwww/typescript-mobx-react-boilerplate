import mobx from 'mobx';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { History, createHashHistory } from 'history';
import BaseStore from './base';
import GlobalStore from './global';

export interface RootStoreWithRouter {
  routerStore: RouterStore;
  [key: string]: any;
}

function createRootStore<TRootStore>(obj: any): {
  rootStore: TRootStore & RootStoreWithRouter;
  history: History;
} {
  const hashHistroy = createHashHistory();
  const routerStore = new RouterStore();

  const history = syncHistoryWithStore(hashHistroy, routerStore);

  interface StoreConstructor<T> {
    new(rootStore: T): BaseStore<T>;
  }

  const rootStore: any = {};
  rootStore.routerStore = routerStore;
  Object.keys(obj).forEach((key) => {
    const StoreClass: StoreConstructor<TRootStore & RootStoreWithRouter> = obj[key];
    rootStore[key] = new StoreClass(rootStore);
  });
  return { rootStore, history };
}

export default mobx;
export {
  createRootStore,
  BaseStore,
  RouterStore,
  GlobalStore,
};
