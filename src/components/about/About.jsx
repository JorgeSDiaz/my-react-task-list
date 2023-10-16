export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen grid grid-cols-1">
      <main className="mt-8 m-5">
        <p className="text-3xl font-semibold mb-4 text-left">
          Desarrollador de la Aplicación: Jorge Saenz
        </p>
        <p className="text-lg text-gray-700 mb-4 text-left">
          Esta aplicación de Lista de Tareas se construyó utilizando React.js.
        </p>
        <p className="text-lg text-gray-700 text-left">
          La aplicación ofrece las siguientes funcionalidades:
        </p>
        <ul className="text-left list-disc text-lg font-bold text-gray-700 ml-6 tex p-3">
          <li className="mb-2">Crear tareas con o sin descripción.</li>
          <li className="mb-2">Editar tareas existentes.</li>
          <li className="mb-2">Marcar tareas como terminadas.</li>
          <li className="mb-2">Eliminar tareas.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Para implementar estas funcionalidades, se utilizaron las siguientes
          bibliotecas de React:
        </p>
        <ul className="text-left list-disc text-lg text-gray-700 ml-6 tex p-3">
          <li className="py-5">
            <h4 className="font-bold">React Router DOM</h4>
            <p>
              Utilizada para la navegación en la aplicación, permitiendo la
              creación de rutas y páginas.
            </p>
          </li>
          <li className="py-5">
            <h4 className="font-bold">React Hook Form</h4>
            <p>
              Utilizada para la navegación en la aplicación, permitiendo la
              Empleada para gestionar formularios de manera eficiente,
              validación y captura de datos.
            </p>
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-4 text-left">
          `Además, se emplearon funcionalidades avanzadas de React.js, como la
          <strong> Carga Perezosa </strong>, para optimizar la eficiencia de la
          aplicación. La carga perezosa permite cargar componentes de manera
          dinámica, mejorando la velocidad de carga de la aplicación y la
          experiencia del usuario.`
        </p>
      </main>
      <footer className="mt-8 text-gray-500 text-center py-4">
        &copy; 2023 Jorge Saenz. Todos los derechos reservados. <br />
        <a
          href="https://www.linkedin.com/in/jorgedsaenzd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mr-4"
        >
          LinkedIn
        </a>{" "}
        <a
          href="mailto:jorgedszdiaz@gmail.com"
          className="text-blue-500 hover:underline mr-4"
        >
          Gmail
        </a>{" "}
        <a
          href="https://github.com/JorgeSDiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
