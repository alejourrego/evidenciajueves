// Función de inicio de sesión con 3 intentos
function inicioSesion() {
    const usuarioValido = "Lucho";
    const contrasenaValida = "gpt123";
    let intentos = 0;
    let accesoConcedido = false;

    // Validar los intentos de inicio de sesión
    while (intentos < 3 && !accesoConcedido) {
        let usuario = prompt("Ingrese su usuario:");
        let contrasena = prompt("Ingrese su contraseña:");

        if (usuario === usuarioValido && contrasena === contrasenaValida) {
            accesoConcedido = true;
            console.log("Acceso concedido.");
        } else {
            intentos++;
            console.log(`Credenciales incorrectas. Intentos restantes: ${3 - intentos}`);
        }
    }

    if (!accesoConcedido) {
        console.log("Acceso denegado. Demasiados intentos fallidos.");
        return;
    }

    console.log("Bienvenido al sistema de gestión de notas.");
    gestionarNotas(); // Llamar a la función para gestionar las notas
}

// Función para gestionar las notas de los estudiantes
function gestionarNotas() {
    let estudiantesAprobadosDesarrollo = 0;
    let estudiantesAprobadosAdministracion = 0;
    let estudiantesAprobadosContabilidad = 0;

    let opcionPrograma = 0;

    // Menú para seleccionar programa académico
    while (opcionPrograma !== 4) {
        console.log("\nSeleccione un programa académico:");
        console.log("1. Desarrollo de Software");
        console.log("2. Administración");
        console.log("3. Contabilidad");
        console.log("4. Salir");
        opcionPrograma = parseInt(prompt("Ingrese una opción:"));

        if (opcionPrograma === 1) {
            estudiantesAprobadosDesarrollo += gestionarPrograma("Desarrollo de Software");
        } else if (opcionPrograma === 2) {
            estudiantesAprobadosAdministracion += gestionarPrograma("Administración");
        } else if (opcionPrograma === 3) {
            estudiantesAprobadosContabilidad += gestionarPrograma("Contabilidad");
        } else if (opcionPrograma === 4) {
            console.log("Saliendo del sistema...");
        } else {
            console.log("Opción no válida.");
        }
    }

    // Mostrar los resultados al final
    console.log(`\nEstudiantes aprobados en Desarrollo de Software: ${estudiantesAprobadosDesarrollo}`);
    console.log(`Estudiantes aprobados en Administración: ${estudiantesAprobadosAdministracion}`);
    console.log(`Estudiantes aprobados en Contabilidad: ${estudiantesAprobadosContabilidad}`);
}

// Función para gestionar las materias de un programa
function gestionarPrograma(programa) {
    let estudiantesAprobados = 0;
    let opcionMateria = 0;

    console.log(`\nSeleccionando materias para el programa ${programa}`);

    // Menú para seleccionar materia
    while (opcionMateria !== 4) {
        console.log("1. Materia 1");
        console.log("2. Materia 2");
        console.log("3. Materia 3");
        console.log("4. Volver al menú principal");
        opcionMateria = parseInt(prompt("Ingrese una opción:"));

        if (opcionMateria >= 1 && opcionMateria <= 3) {
            estudiantesAprobados += gestionarMateria(programa, opcionMateria);
        } else if (opcionMateria === 4) {
            console.log("Volviendo al menú principal...");
        } else {
            console.log("Opción no válida.");
        }
    }

    return estudiantesAprobados;
}

// Función para gestionar las notas de cada materia
function gestionarMateria(programa, materia) {
    let notaFinal = 0;

    console.log(`\nIngresando notas para la Materia ${materia} en el programa ${programa}`);

    // Ciclo para los tres momentos de evaluación
    for (let momento = 1; momento <= 3; momento++) {
        console.log(`Ingrese las notas para el Momento ${momento}:`);

        let nota1 = parseFloat(prompt("Primera nota (20%):"));
        let nota2 = parseFloat(prompt("Segunda nota (20%):"));
        let nota3 = parseFloat(prompt("Tercera nota (60%):"));

        // Calculamos la nota ponderada de este momento
        let momentoNota = (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.6);
        notaFinal += momentoNota;
    }

    // Determinamos si el estudiante aprueba
    if (notaFinal >= 3.0) {
        console.log(`Estudiante aprobado con nota final: ${notaFinal.toFixed(2)}`);
        return 1; // Retorna 1 si aprueba
    } else {
        console.log(`Estudiante no aprobado con nota final: ${notaFinal.toFixed(2)}`);
        return 0; // Retorna 0 si no aprueba
    }
}

// Iniciar el proceso
inicioSesion();
