# Template para realizar proyecto del modulo 2
# Requisitos Mínimos del Proyecto

## *Requisitos técnicos mínimos*

### *1. Backend*
- Usar *Express* para la configuración del servidor.
- Implementar *Prisma ORM* para la gestión de base de datos.
- Utilizar *Handlebars* como motor de plantillas para el frontend del servidor.
- Crear al menos *2 modelos de datos* relacionados entre sí. Ejemplo:
  - Modelo User (usuarios).
  - Modelo Post (publicaciones), relacionado con el modelo User.

### *2. Base de datos*
- Utilizar *MongoDB* o *PostgreSQL* como base de datos.
- Configurar las conexiones con Prisma.
- Definir al menos 2 modelos con relaciones, como:
  - Relación uno a muchos entre User y Post.

### *3. Roles y autenticación*
- Implementar al menos un rol de *administrador* (Admin) con permisos especiales para gestionar recursos.
- Crear rutas protegidas que requieran autenticación para acceder a ciertas funcionalidades, como:
  - Crear o eliminar Posts.
  - Gestionar usuarios o recursos específicos.

### *4. API REST y vistas*
- Implementar un *CRUD completo* para cada modelo:
  - *Create*: Ruta para crear nuevos registros.
  - *Read*: Ruta para listar y obtener registros específicos.
  - *Update*: Ruta para actualizar registros existentes.
  - *Delete*: Ruta para eliminar registros.
- Crear vistas dinámicas con Handlebars para representar datos (por ejemplo, mostrar usuarios y sus publicaciones).
- Manejar las relaciones en las vistas, como listar publicaciones de un usuario en una página.

### *5. Despliegue*
- Hacer el deploy del proyecto en *Render*.
- Configurar correctamente las variables de entorno necesarias para la base de datos y otros servicios.

### *6. Pruebas mínimas*
- Probar las rutas y vistas usando herramientas como Postman.
- Asegurarse de que las vistas muestren los datos correctamente.

### *7. Entrega*
- Código limpio y organizado.
- Estructura del proyecto clara, con carpetas para rutas, controladores, vistas y modelos.

---

## *Extras (opcional pero recomendados)*

### *1. Cloudinary*
- Integrar *Cloudinary* para manejar la subida y almacenamiento de imágenes.
- Implementar esta funcionalidad en al menos uno de los modelos (por ejemplo, para subir imágenes en Post).

### *2. Swagger*
- Crear y mantener una documentación interactiva con *Swagger* que incluya:
  - Descripciones de los endpoints.
  - Ejemplos de solicitudes y respuestas.
  - Explicación de parámetros requeridos.

### *3. Jest*
- Escribir pruebas unitarias y/o de integración usando *Jest* para al menos:
  - Un modelo.
  - Un endpoint de API.
  - Una funcionalidad clave (por ejemplo, subida de imágenes).
