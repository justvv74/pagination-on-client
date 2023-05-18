import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface IItem {
  id?: number;
  title?: string;
  createdAt?: string;
  description?: string;
  image?: string;
  preview?: string;
}

export class PostListStore {
  list: IItem[] = [];
  state = false;
  error = '';
  totalPages = 1;

  constructor() {
    makeAutoObservable(this);
  }

  getList() {
    this.state = true;
    axios
      .get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
      .then(
        action('getListSuccess', (res) => {
          this.list = res.data;

          if (this.list.length > 10) {
            this.totalPages = Math.ceil(this.list.length / 10);
          }
        })
      )
      .catch(
        action('getListError', (err) => {
          this.error = String(err);
        })
      )
      .finally(action('getListFinally', () => (this.state = false)));
  }

  getPage() {}
}
