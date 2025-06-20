#  Component library

Este proyecto es el backend para una librería de componentes frontend. Se encarga de gestionar el registro y autenticación de usuarios utilizando **Node.js**, **Express** y **MongoDB**.

---


## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- bcrypt (hashing de contraseñas)
- dotenv (variables de entorno)
- nodemon (recarga automática en desarrollo)



---

## 📦 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/zXAZURIANXz/component-library-backend.git
cd component-library
npm install
npm start
```
---
## 📦 ENDPOINTS Disponibles

POST /api/auth/register
Registra un nuevo usuario.

```bash
{
  "email": "usuario@example.com",
  "password": "123456"
}
```

GET /api/auth/login
Autentica a un usuario existente.

```bash
Body JSON:
{
  "email": "usuario@example.com",
  "password": "123456"
}
```


---
## 👨🏻‍💻 Author

Made with 💻 and ☕ by [zXAZURIANXz](https://github.com/zXAZURIANXz) , <That´s my shinoby way /> 🍥

---
