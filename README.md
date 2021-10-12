# back-segweb



## Config

Ejecutar docker-compose up para levantar la base y el server

El servicio queda accesible por *localhost:3000*

## Cuentas

Admin: admin@gmail.com / 123456
User: user@gmail.com /123456

## Endpoints
Todos los casos no representados abajo estan handleados con sus correspondientes errores 40X 
El endpoint de Login tiene el username saneado para prevenir inyecciones SQL. Solo acepta usernames que sean mails

### Publicos
Accesibles por todos, no logeados, ususarios, y admines

POST /login 
- body: { "username": "admin@gmail.com", "password": "123456" }
- res: { "token": "23lk2ñ4lklñ", "sesion": 1 }

GET /api/v1/publicaciones 



### Usuario
Logeado como USUARIO

POST /api/v1/publicaciones 
- "header": { "Token" : "1xz3hhdixp9iis4sa1hji1d", "Sesion": "1" }
- "body": { "nombre": "pub prueba", "descripcion": "pub de prueba", "usuario_id": 1 },

### Admin
Logeado como ADMIN

GET /api/v1/usuarios
- "header": { "Token" : "1xz3hhdixp9iis4sa1hji1d", "Sesion": "1" }

PATCH /api/v1/publicaciones/{publicacion_id}/cambiarEstado
- "header": { "Token" : "1xz3hhdixp9iis4sa1hji1d", "Sesion": "1" }
- "body": { "estado": "aprobada" }