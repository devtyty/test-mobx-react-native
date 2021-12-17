import {makeAutoObservable, ObservableMap} from 'mobx';
import User from '../models/user';
import IUser from '../types/user';
import AppStore from './app';

export default class UserStore {
  byId = new ObservableMap<number, User>();

  constructor(private store: AppStore) {
    makeAutoObservable(this);
  }

  load(users: IUser[]) {
    users.forEach((it: IUser) =>
      this.byId.set(it.id, new User(this.store, it)),
    );
  }

  get all() {
    return Array.from(this.byId.values());
  }
}
