const cbArray = Symbol();

class LocalStorageHandler {
  [cbArray] = [];

  get current() {
    return localStorage.getItem('user') || '';
  }

  set current(userName) {
    userName ? localStorage.setItem('user', userName) : localStorage.removeItem('user');
  }

  signIn = userName => {
    this.current = userName;
    this[cbArray].forEach(cb => cb());
  };

  signOut = () => {
    this.current = undefined;
    this[cbArray].forEach(cb => cb());
  };

  subscribe = fn => {
    this[cbArray].push(fn);
  };

  unsubscribe = fn => {
    this[cbArray] = this[cbArray].filter(cb => cb.key !== fn.key);
  }
}

export default new LocalStorageHandler();