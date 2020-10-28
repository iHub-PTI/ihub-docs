---
section: 'Core'
title: 'Search'
date: '2020-10-28T05:35:07.322Z'
priority: 10
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Search for Doctors

> **This document is a Working Draft and under heavy development!**

Given the following Doctors:

| id  | Name            | City            | Biography              | Speciality    |
| --- | --------------- | --------------- | ---------------------- | ------------- |
| 1   | Björn Schmidtke | Asuncion        | Studied in Switzerland | Ophtomologist |
| 2   | Ruben Lopez     | Asuncion        | Studied in Switzerland | Ophtomologist |
| 3   | Ruben Lopez     | Ciudad del Este | Studied in Chile       | Ophtomologist |
| 4   | Ruben Lopez     | Ciudad del Este | Studied in US          | Dermatologist |

Given the following Search Text, we would like to receive the following result order:

```
Search Text:               Ruben Asuncion
Result order (id):    2, 3, 4, 1
```

```
Search Text:               Rubn in Asuncion
Result order (id):    2, 3, 4, 1
```

```
Search Text:               Rubn Asuncion specialist for Ophtomologia
Result order (id):    2, 3, 1, 4
```

```
Search Text:               Björn Ciudad del Este Ophtomologist
Result order (id):    3, 1, 2, 4
```

General priority of properties:

1. Name
2. Speciality
3. City
4. Biography
