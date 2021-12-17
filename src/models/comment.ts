import AppStore from '../stores/app';
import IComment from '../types/comment';
import {makeAutoObservable} from 'mobx';

export default class Comment implements IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor(private store: AppStore, comment: IComment) {
    this.id = comment.id;
    this.postId = comment.postId;
    this.name = comment.name;
    this.email = comment.email;
    this.body = comment.body;

    makeAutoObservable(this);
  }

  get post() {
    return this.store.post.byId.get(this.postId);
  }
}
