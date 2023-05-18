import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';
import { IItem } from './PostListStore';

export class PostStore {
  post: IItem = {};
  state = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  getPostData(id: number) {
    this.post = {};
    this.state = true;

    axios
      .get(
        `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
      )
      .then(
        action('getListSuccess', (res) => {
          this.post = res.data;
        })
      )
      .catch(
        action('getListError', (err) => {
          this.error = String(err);
        })
      )
      .finally(
        action('getListFinally', () => {
          this.state = false;
        })
      );
  }
}
