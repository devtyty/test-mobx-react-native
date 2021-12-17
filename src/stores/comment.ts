import {makeAutoObservable, ObservableMap} from 'mobx';

import IComment from '../types/comment';
import Comment from '../models/comment';
import AppStore from './app';

export default class CommentStore {
  byId = new ObservableMap<number, Comment>();

  constructor(private store: AppStore) {
    makeAutoObservable(this);
  }

  load(comments: IComment[]) {
    comments.forEach(it => this.byId.set(it.id, new Comment(this.store, it)));
  }

  get all() {
    return Array.from(this.byId.values());
  }
}
