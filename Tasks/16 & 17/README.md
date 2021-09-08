## endpoint

- [GET /tasks](#get-tasks)
- [GET /students](#get-students)
---

> ## GET /tasks

Get all tasks

### Responses

#### _Status 200 OK_
```json
{
  "tasks": ["Express", "PostgreSQL", "MongoDB", "React"]
}
```

> ## GET /students

Get all students

### Responses

#### _Status 200 OK_
```json
{
  "students": [
    {
      "name": "Jihad",
      "gender": "Male"
    },
    {
      "name": "Joshua",
      "gender": "Male"
    },
    {
      "name": "Rayan",
      "gender": "Male"
    },
    {
      "name": "Rayhan",
      "gender": "Male"
    },
    {
      "name": "Rizky",
      "gender": "Male"
    },
    {
      "name": "Vasya",
      "gender": "Female"
    },
    {
      "name": "Wahid",
      "gender": "Male"
    },
  ]
}
```