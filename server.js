const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const filePath = "./data/notifications.json";

app.get("/api/notifications", (req, res) => {
  let rawdata = fs.readFileSync("./data/notifications.json");
  let sendData = JSON.parse(rawdata);
  res.send({ express: sendData });
});

app.get("/api/notifications/:id", (req, res) => {
  const id = req.params.id; // получаем id
  const content = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(content);
  let user = null;
  // находим в массиве пользователя по id
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      user = users[i];
      break;
    }
  }
  // отправляем пользователя
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

// app.post("/api/notifications", jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const userName = req.body.name;
//   const userAge = req.body.age;
//   let user = { name: userName, age: userAge };

//   let data = fs.readFileSync(filePath, "utf8");
//   let users = JSON.parse(data);

//   // находим максимальный id
//   const id = Math.max.apply(
//     Math,
//     users.map(function (o) {
//       return o.id;
//     })
//   );
//   // увеличиваем его на единицу
//   user.id = id + 1;
//   // добавляем пользователя в массив
//   users.push(user);
//   data = JSON.stringify(users);
//   // перезаписываем файл с новыми данными
//   fs.writeFileSync("users.json", data);
//   res.send(user);
// });
// удаление пользователя по id
app.delete("/api/notifications/:id", (req, res) => {
  const id = req.params.id;
  let rawdata = fs.readFileSync(filePath, "utf8");
  let items = JSON.parse(rawdata);
  let index = -1;
  // находим индекс пользователя в массиве
  for (var i = 0; i < items.length; i++) {
    if (items[i].id == id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    // удаляем пользователя из массива по индексу
    const item = items.splice(index, 1)[0];
    rawdata = JSON.stringify(items);
    fs.writeFileSync("./data/notifications.json", rawdata);
    // отправляем удаленного пользователя
    res.send(item);
  } else {
    res.status(404).send();
  }
});

app.delete("/api/notifications", (req, res) => {
  let rawdata = fs.readFileSync("./data/notifications.json");
  let deletingData = JSON.parse(rawdata);
  let emptyData = JSON.stringify([]);
  fs.writeFileSync("./data/notifications.json", emptyData);
  res.send(deletingData);
});

// изменение пользователя
// app.put("/api/notifications", jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const userId = req.body.id;
//   const userName = req.body.name;
//   const userAge = req.body.age;

//   let data = fs.readFileSync(filePath, "utf8");
//   const users = JSON.parse(data);
//   let user;
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].id == userId) {
//       user = users[i];
//       break;
//     }
//   }
//   // изменяем данные у пользователя
//   if (user) {
//     user.age = userAge;
//     user.name = userName;
//     data = JSON.stringify(users);
//     fs.writeFileSync("users.json", data);
//     res.send(user);
//   } else {
//     res.status(404).send(user);
//   }
// });

// const express = require("express");
// const fs = require("fs");

// const app = express();
// const jsonParser = express.json();

// app.use(express.static(__dirname + "/public"));

// const filePath = "./data/notifications.json";
// app.get("/api/notifications", function (req, res) {
//   const content = fs.readFileSync(filePath, "utf8");
//   const users = JSON.parse(content);
//   res.send(users);
// });
// // получение одного пользователя по id
// app.get("/api/notifications/:id", function (req, res) {
//   const id = req.params.id; // получаем id
//   const content = fs.readFileSync(filePath, "utf8");
//   const users = JSON.parse(content);
//   let user = null;
//   // находим в массиве пользователя по id
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//       user = users[i];
//       break;
//     }
//   }
//   // отправляем пользователя
//   if (user) {
//     res.send(user);
//   } else {
//     res.status(404).send();
//   }
// });
// // получение отправленных данных
// app.post("/api/notifications", jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const userName = req.body.name;
//   const userAge = req.body.age;
//   let user = { name: userName, age: userAge };

//   let data = fs.readFileSync(filePath, "utf8");
//   let users = JSON.parse(data);

//   // находим максимальный id
//   const id = Math.max.apply(
//     Math,
//     users.map(function (o) {
//       return o.id;
//     })
//   );
//   // увеличиваем его на единицу
//   user.id = id + 1;
//   // добавляем пользователя в массив
//   users.push(user);
//   data = JSON.stringify(users);
//   // перезаписываем файл с новыми данными
//   fs.writeFileSync("users.json", data);
//   res.send(user);
// });
// // удаление пользователя по id
// app.delete("/api/notifications/:id", function (req, res) {
//   const id = req.params.id;
//   let data = fs.readFileSync(filePath, "utf8");
//   let users = JSON.parse(data);
//   let index = -1;
//   // находим индекс пользователя в массиве
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//       index = i;
//       break;
//     }
//   }
//   if (index > -1) {
//     // удаляем пользователя из массива по индексу
//     const user = users.splice(index, 1)[0];
//     data = JSON.stringify(users);
//     fs.writeFileSync("users.json", data);
//     // отправляем удаленного пользователя
//     res.send(user);
//   } else {
//     res.status(404).send();
//   }
// });
// // изменение пользователя
// app.put("/api/notifications", jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const userId = req.body.id;
//   const userName = req.body.name;
//   const userAge = req.body.age;

//   let data = fs.readFileSync(filePath, "utf8");
//   const users = JSON.parse(data);
//   let user;
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].id == userId) {
//       user = users[i];
//       break;
//     }
//   }
//   // изменяем данные у пользователя
//   if (user) {
//     user.age = userAge;
//     user.name = userName;
//     data = JSON.stringify(users);
//     fs.writeFileSync("users.json", data);
//     res.send(user);
//   } else {
//     res.status(404).send(user);
//   }
// });

app.listen(5000, () => {
  console.log("Сервер ожидает подключения...");
});
