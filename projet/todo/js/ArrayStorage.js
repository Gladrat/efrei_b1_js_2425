"use strict";

class ArrayStorage {
  constructor(key_name) {
    this.key_name = key_name;
    this.list = this.get();
  }

  get() {
    if (!localStorage.getItem(this.key_name)) {
      localStorage.setItem(this.key_name, "[]");
    }

    return JSON.parse(localStorage.getItem(this.key_name));
  }

  set(value) {
    this.list.push(value);
    localStorage.setItem(this.key_name, JSON.stringify(this.list));
  }

  remove(value) {
    const index = this.list.indexOf(value);
    if (index !== -1) {
      this.list.splice(index, 1);
      localStorage.setItem(this.key_name, JSON.stringify(this.list));
    }
  }

  clear() {
    localStorage.clear(this.key_name);
  }
}

// const storage = new ArrayStorage("datas");

// storage.set("Lisa");
// storage.set("Geoffroy");
// storage.remove("Geoffroy"); 
// console.log(storage.get());
