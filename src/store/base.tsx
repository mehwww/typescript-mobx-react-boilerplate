export default class BaseStore<TRootStore> {
  rootStore: TRootStore;
  constructor(rootStore: TRootStore) {
    this.rootStore = rootStore;
  }
}
