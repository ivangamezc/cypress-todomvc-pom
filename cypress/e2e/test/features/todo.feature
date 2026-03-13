# language: es
Característica: Gestión de tareas en TodoMVC

  Escenario: Agregar una nueva tarea a la lista
    Dado que el usuario navega a la página de TodoMVC
    Cuando agrega la tarea "Tarea A"
    Entonces la lista debe mostrar "Tarea A"
    
  Escenario: Borrar una tarea de la lista
    Dado que el usuario navega a la página de TodoMVC
    Y agrega la tarea "Tarea para borrar"
    Cuando elimina la tarea "Tarea para borrar"
    Entonces la lista no debe contener "Tarea para borrar"

  Escenario: Filtrar tareas completadas
    Dado que el usuario navega a la página de TodoMVC
    Y agrega la tarea "Tarea Activa"
    Y agrega la tarea "Tarea Completada"
    Y marca como completada la tarea "Tarea Completada"
    Cuando filtra por el estado "Completed"
    Entonces la lista debe mostrar "Tarea Completada"
    Y la lista no debe mostrar "Tarea Activa"

  Escenario: Editar una tarea existente
    Dado que el usuario navega a la página de TodoMVC
    Y agrega la tarea "Tarea original"
    Cuando edita la tarea "Tarea original" por el nuevo nombre "Tarea editada"
    Entonces la lista debe mostrar "Tarea editada"
    Y la lista no debe contener "Tarea original"

  Escenario: Marcar y desmarcar una tarea
    Dado que el usuario navega a la página de TodoMVC
    Y agrega la tarea "Tarea para check"
    Cuando marca como completada la tarea "Tarea para check"
    Entonces la tarea "Tarea para check" debe aparecer como completada
    Cuando desmarca la tarea "Tarea para check"
    Entonces la tarea "Tarea para check" no debe aparecer como completada