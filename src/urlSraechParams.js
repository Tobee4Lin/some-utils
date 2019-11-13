//手写一个简易的URLSearchParams类
export class URLSearchParams {
  _searchParams = []
  constructor(initProp) {
    if (typeof initProp === "string") {
      this._searchParams = initProp.split("&").map(item => item.split("="));
    } else {
      this._searchParams = Object.entries(initProp);
    }
  }

  /**
   * 根据键名返回对应的值
   * @param {params} key —— 传入的键名
   */
  get(key) {
    let params = this._searchParams.find(k => k[0] === key)
    return params && params[1];
  }

  /**
   * 设置键值对
   * @param {params} key —— 传入的键名
   * @param {params} value —— 传入的值
   */
  set(key, value) {
    let params = this._searchParams.find(k => k[0] === key)
    if (params) {
      params[1] = value;
    } else {
      this._searchParams.push([key, value]);
    }
  }

  has(key) {
    return this._searchParams.some(k => k[0] === key);
  }

  append(key, value) {
    this._searchParams.push([key, value]);
  }

  delete(key) {
    let index = this._searchParams.findIndex(item => item[0] === key);
    if (index !== -1) {
      this._searchParams.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * 序列化参数数组
   */
  toString() {
    return this._searchParams.map(item => item.join("=")).join("&");
  }

  /**
   * 使参数数组可迭代
   */
  *[Symbol.iterator]() {
    yield* this._searchParams;
  }
}