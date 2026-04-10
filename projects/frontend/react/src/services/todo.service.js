import { API } from 'classes';

class TodoAPI extends API {
  constructor() {
    super({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      token: '',
    });
  }

  getTodos = () => {
    return this.fetch({ api: 'todos' });
  };
}

const todoService = new TodoAPI();

export default todoService;
