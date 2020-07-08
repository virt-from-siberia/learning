document.addEventListener("DOMContentLoaded", () => {
  console.log(_.isEqual(1, 2));

  //Проход по массиву

  const arr1 = [1, 2];
  _.each(arr1, (item) => {
    console.log(item);
  });

  //Проход по обьекту
  console.log("//Проход по обьекту ------------------------>");
  const obj1 = {
    id: 1,
    name: "name",
    id2: 2,
    name2: "name2",
  };
  _.each(obj1, (item, index) => {
    console.log(item, index);
  });

  console.log("//добавление обьекта в массив ------------------------>");
  const arr2 = [];

  _.each(obj1, (item) => {
    arr2.push(item);
  });
  console.log(arr2);

  console.log("//Метод map ------------------------>");
  const arr3 = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const arr4 = {
    id: 1,
    name: "somename",
  };

  console.log(
    _.map(arr3, (item) => {
      return item.id;
    })
  );

  console.log(
    _.map(arr4, (item) => {
      return item;
    })
  );

  console.log("//Метод find, filter ------------------------>");

  const arr5 = [1, 2, 3, 4];

  const fl = _.filter(arr5, (item) => {
    return item < 3;
  });

  console.log(fl);

  const arr6 = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];

  const f2 = _.filter(arr6, (item) => {
    return item.name === "foo";
  });
  console.log(f2);

  // Поиск обьекта по условию в массиве обьектов
  // возврашяет найденный обьект с ключом и значением
  const arr7 = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];

  const f3 = _.find(arr7, (item) => {
    return item.name === "foo";
  });
  console.log(f3);

  console.log("//Методы without  remove------------------------>");

  // Метод without первым аргументом иидет массив а остальнымии значения которые нужно удолить
  // не работет с массивом обьектов
  const arr8 = [1, 23, 45];
  const f8 = _.without(arr8, 1, 45);

  console.log(f8);

  // Метод remove удоляет данные из массива по какому то условию
  const arr9 = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];
  const f9 = _.remove(arr9, (item) => {
    return item.id === 2;
  });

  console.log(f9);

  // Метод reject возвращяет массив элементов которые не выполняют условия

  const arr10 = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];
  const f10 = _.reject(arr10, (item) => {
    return item.id === 2;
  });

  console.log(f10);

  console.log("//Методы  reduce every------------------------>");

  const arr11 = [true, 1, null, "yes"];

  const f11 = _.every(arr11, Boolean);

  console.log(f11);

  const arr12 = [
    {
      name: "foo",
      isActive: true,
    },
    {
      name: "baar",
      isActive: true,
    },
  ];

  const f12 = _.every(arr12, (item) => {
    return item.isActive === true;
  });

  console.log(f12);

  // Метод reduce

  const arr13 = [
    {
      id: 1,
      name: "foo",
      isActive: false,
    },
    {
      id: 1,
      name: "bar",
      isActive: true,
    },
    {
      id: 2,
      name: "lol",
      isActive: false,
    },
  ];

  const f13 = _.reduce(
    arr13,
    (memo, item) => {
      if (item.name === "foo") {
        memo.push(item.id);
      }
      return memo;
    },
    []
  );

  console.log(f13);

  // Метод some проверяет а если в массиве хотябы один элемент который проходиит условия

  const arr14 = [
    {
      id: 1,
      name: "foo",
      isActive: false,
    },
    {
      id: 1,
      name: "bar",
      isActive: true,
    },
    {
      id: 2,
      name: "lol",
      isActive: false,
    },
  ];
  const f14 = _.some(arr14, (item) => {
    return item.isActive;
  });

  console.log(f14);
  console.log("//Методы   sortBy------------------------>");

  const arr15 = [
    {
      id: 1,
      name: "foo",
      isActive: false,
      likes: 15,
    },
    {
      id: 1,
      name: "bar",
      isActive: true,
      likes: 25,
    },
    {
      id: 2,
      name: "lol",
      isActive: false,
      likes: 5,
    },
  ];

  // Сортировка метод sortBy сортирует по значению

  const f15 = _.sortBy(arr15, (item) => {
    return item.likes;
  });
  console.log(f15);

  // Группировка по условиию

  const f16 = _.groupBy(arr15, (item) => {
    return item.isActive;
  });
  console.log(f16);

  const f17 = _.groupBy(arr15, (item) => {
    return item.likes;
  });

  console.log(f17);
});
