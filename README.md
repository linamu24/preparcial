Parcial 1 - ISIS3710
Lina Muñoz - 202310172

5%: Explicar brevemente la arquitectura de la solución (1–2 párrafos). 

La arquitectura de mi solución está organizada siguiendo el patrón de componentes y contextos de React, con Next.js como framework base. Cada vista principal se encuentra dentro de la carpeta app y corresponde a una ruta (/crear, /authors y /favoritos). Para manejar la lógica compartida, se utiliza la clase AuthorsContext, que permite centralizar estados globales de variables que requerimos en la app: la lista de autores, la lista con los ids de los favoritos, y funciones que nos permiten modificar estas listas (crear, editar, eliminar, marcar). Los componentes de authors, crear y favoritos (su page.tsx) consumen directamente del context con el hook useAuthors(). Además, la app cuenta con un navbar que permite la navegabilidad entre rutas, esto es bastante importante, ya que no se puede hacer refresh o busqueda de rutas en el buscador ya que esto hace que se refrescque la página y se pierda el estado. Es muy importante mencionar que no se estan guardando cambios en el back, por lo que cada vez que se refrezca el buscador, se vuelve a hacer fetch al API, y se pierde lo que estuviera guardado en el AuthorsContext.

En si para hacer lo que me pedia el parcial realice lo siguiente: en el Provider AuthorContext que ya tenía creado desde el preparcial agregue el arreglo de favoritos, que guarda los ids de los autores marcados como favoritos; y la función toggleFavorite la cual agrega y quita ids del arreglo. De esta manera tambien esta lista es accesible a todos los componentes hijos. Luego de esto, ahora si cree la ruta /favoritos (como uso AppRouter solo es crear la carpeta y su archivo page.tsx), la cual es una copia del componente que lista los autores, solo que no tiene los tres botones (editar, eliminar, marcar), sino un solo boton para quitarlo de favoritos. En el componente que lista favoritos agregue un boton para marcar/desmarcar de favoritos). Y por últimi agrega la ruta de favoritos al navBar.


5%: Indicar explícitamente qué opción se desarrolló en la Parte B (Accesibilidad o Pruebas) y cómo validarla.
Se aplico la Accesibilidad:
  - La parte de navegación con teclado correctamente implementada (tabulación ordenada y foco visible en botones y formularios), se puede validar al presionar TAB en la cualquiera de las paginas (/crear, /authors y /favoritos), esto hara que aparezca un foco de luz azul alrededor del boton o del campo, y al seguir presionando TAB, este foco se movera entre los botones y/o campos, y presionando el presionar enter actuara como click.
  - La parte de uso adecuado de atributos ARIA en botones y formularios, se puede verificar oprimiendo Ctrl+Windows+Enter lo que hara que se active el narrador, y al navegar entre las paginas se escucharan mensajes con las etiquetas, avisando errores y/o alertas.
  - El comportamiento accesible en cambios de estado (p. ej., botón de favoritos con aria-pressed="true/false", mensajes con role="alert" si aplica) se puede verificar en los formularios, donde al dejar espacios vacios aparecera una alerta en rojo con un mensaje. Este tambien se puede escuchar si se tiene el narrador activado.

    
5%: Incluir instrucciones claras para correr la app y, si aplica, las pruebas
  - Lo primero es correr el BACK en 127.0.0.1:8080:8080
  - Luego correr el Front con npm run dev, e ingresar a la url que da la terminal.
  - Navegar en la app :)
    
nota: No hay pruebas

