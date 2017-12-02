import { observable, computed, action } from 'mobx';
import BaseStore from './base';
import { RootStoreWithRouter } from './index';
import { RootStore } from '@/Root';

class GlobalStore extends BaseStore<RootStore & RootStoreWithRouter> {
  @observable count = 0;

  @action
  addOne() {
    this.count += 1;
  }
}

export default GlobalStore;
