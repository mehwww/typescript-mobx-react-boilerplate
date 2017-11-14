import { observable, computed, action } from 'mobx';
import BaseStore from './base';
import { RootStoreWithRouter } from './index';
import { RootStore } from '@/Root';

class GlobalStore extends BaseStore<RootStore & RootStoreWithRouter> {
}

export default GlobalStore;
