
# Simple task manager REST API

This application builded as introduction for beginners into REST API


## Dependencies

- Express: ^4.18.2

- Mongoose: ^7.3.1

## Run Locally

Clone the project

```bash
  git clone https://github.com/RedDofamine/TaskApp.git
```

Go to the project directory

```bash
  cd TaskApp/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


## API Reference

#### Get all tasks

```http
  GET /api/tasks
```

| Field       | Type     | Description                  |
| :---------- | :------- | :--------------------------- |
| `undefined` | `json`   | body of request not required |

Will return all finded tasks

#### Get task

```http
  GET /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `bson` | **Required**. Id of task to fetch |

Will return specified task

#### Create task

```http
  POST /api/task
```

| Field   | Type     | Description                                     |
| :------ | :------- | :---------------------------------------------- |
| `title` | `string` | **Required**. Text of task what will be created |

Will return created document with following data

| Field   | Type     | Description                                     |
| :------ | :------- | :---------------------------------------------- |
| `_id` | `bson` | Represents unique identifier of task                |
| `title` | `string` |  Text of task what will be created              |
| `status` | `boolean` | Status of task completion. By default equal to `false` |
| `createdAt` | `date` | Represents time when task was created         |

**All of next operations will return the same data format at completion**

```http
  UPDATE /api/task/${id}
```

In this case request represents parameter and body

Parameter showing in the following table

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `bson` | **Required**. Id of task to fetch |

Body of request represents in the next table 

| Field | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title` | `string` | **Optional**. Text what will be setted for task. |
| `status` | `boolean` | **Optional**. Status of task completion. |

```http
  DELETE /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `bson` | **Required**. Id of task to delete |

## Support

For support, email viktortsymbalistuy@gmail.com or contact me on Telegram https://t.me/D0F4M1N3 for instant connect.

