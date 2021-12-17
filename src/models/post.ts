import AppStore from '../stores/app';
import IPost from '../types/post';
import {makeAutoObservable} from 'mobx';
import IComment from '../types/comment';

export default class Post implements IPost {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(private store: AppStore, post: IPost) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.body = post.body;

    makeAutoObservable(this);
  }

  get user() {
    return this.store.user.byId.get(this.userId);
  }

  get comments() {
    return this.store.comment.all.filter(
      (it: IComment) => it.postId === this.id,
    );
  }
}
