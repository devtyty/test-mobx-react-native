import AppStore from '../stores/app';
import IPost from '../types/post';
import IUser from '../types/user';
import {makeAutoObservable} from 'mobx';

export default class User implements IUser {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(private store: AppStore, user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;

    makeAutoObservable(this);
  }

  get posts() {
    return this.store.post.all.filter((it: IPost) => it.userId === this.id);
  }
}
