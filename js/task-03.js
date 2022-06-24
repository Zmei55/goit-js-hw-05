class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return (this.items = [...this.items, item]);
  }

  removeItem(item) {
    return this.items.forEach((element, idx) => {
      if (element === item) {
        this.items.splice(idx, 1);
      }
    });
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);
console.table(storage);

const items = storage.getItems();
console.table(items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items);
// [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
