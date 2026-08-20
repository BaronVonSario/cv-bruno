/* ============================================================
   ⚙️  CONFIGURACIÓN DEL CV  —  ESTE ES TU ARCHIVO PARA EDITAR
   ============================================================

   Abre este archivo con un editor de texto normal (Bloc de notas,
   Notepad++, TextEdit...). NO lo abras con Word.

   REGLAS DE ORO (si el CV deja de verse, casi seguro es una de estas):

   1. Los textos van SIEMPRE entre comillas:  "así"
   2. NO borres las comas (,) del final de las líneas.
   3. Los números van SIN comillas:  16  (no "16")
   4. Guarda el archivo y recarga la página (F5) para ver el cambio.
   5. ¿Se ha roto algo? Deshaz lo último (Ctrl+Z), guarda y recarga.

   COLORES: van en formato hexadecimal, por ejemplo "#2d8ceb".
   Truco: busca "color picker" en Google, elige un color y copia
   el código que empieza por #.

   LÍNEA DE TIEMPO: cada trabajo tiene dos números:
     inicio → en qué punto de la línea empieza (0 = izquierda, 100 = derecha)
     ancho  → cuánto ocupa (en % del total)
   Consejo: inicio + ancho no debe pasar de 100, y un clip debería
   empezar donde acaba el anterior para que no queden huecos.

   OJO: estos números están calculados a partir de los códigos de
   tiempo del vídeo (assets/experiencia-laboral.mp4), para que la
   barra azul vaya pasando por cada clip justo cuando el vídeo habla
   de ese trabajo. Si cambias el vídeo, hay que recalcularlos.
   ============================================================ */


const CONFIG = {

  /* ------------------------------------------------------------
     GENERAL
  ------------------------------------------------------------ */
  tituloProyecto: "CV_BrunoBaezaVaqueiro",   // nombre del "proyecto" (barra superior y pestaña del navegador)
  subtituloProyecto: "- Editado",            // texto gris que acompaña al título
  nombreUsuario: "BRUNO",                    // nombre pequeño arriba a la derecha
  nombreCompleto: "Bruno Baeza Vaqueiro",    // nombre grande de la ventana de Exportar
  tituloOrigen: "BRUNO BAEZA VAQUEIRO_EDITOR_AYUDANTE DE REALIZACIÓN",  // título del monitor central

  /* ------------------------------------------------------------
     CONTACTO
  ------------------------------------------------------------ */
  telefono: "626 73 61 82",                          // se muestra tal cual lo escribas
  email: "bruno.baezavaqueiro@gmail.com",
  // Tercera línea de CONTACTO: al hacer clic se descarga el PDF.
  // El archivo tiene que estar dentro de la carpeta assets.
  curriculumTexto: "Currículum Formal",
  curriculumArchivo: "assets/cv-bruno-baeza-2026.pdf",

  /* ------------------------------------------------------------
     VÍDEO DEL MONITOR
     Si existe un archivo de vídeo con este nombre junto al cv,
     se reproduce en el monitor y la línea de tiempo se sincroniza
     sola con su duración real.
     Cuando el vídeo está en pausa o ha terminado se ve la foto;
     mientras se reproduce, se ve el vídeo.
     Si NO hay vídeo, se muestra la foto y al dar al play se simula
     una reproducción que dura los segundos que pongas abajo.
  ------------------------------------------------------------ */
  archivoVideo: "assets/experiencia-laboral.mp4",
  fotoMonitor: "assets/foto.jpg",
  duracionSimulada: 200,                     // segundos (200 = 3 min 20 s)

  /* ------------------------------------------------------------
     SOBRE MÍ  (las frases de la derecha, en orden)

     Cada frase lleva su código de tiempo del vídeo: en ese trozo
     la frase sale como subtítulo sobre el vídeo, y el código se ve
     debajo del texto en el panel de la derecha.
     Los códigos van en horas:minutos:segundos:fotogramas.
     Si una frase no tiene código, se muestra sin subtítulo.
  ------------------------------------------------------------ */
  sobreMi: [
    {
      texto: "Creativo, con iniciativa y buena actitud de equipo.",
      desde: "00:00:13:17",
      hasta: "00:00:26:11",
    },
    {
      texto: "Amplia capacidad para trabajar en proyectos simultáneos y plazos cortos.",
      desde: "00:00:45:19",
      hasta: "00:00:55:21",
    },
    {
      texto: "Facilidad para integrarme en proyectos desde cero, sumando ideas para su desarrollo.",
      desde: "00:01:25:14",
      hasta: "00:01:36:19",
    },
    {
      texto: "Más de soluciones que de problemas, más práctico que teórico, y tan empático como exigente.",
      desde: "00:01:42:08",
      hasta: "00:01:53:04",
    },
  ],

  /* ------------------------------------------------------------
     VENTANA DE "EXPORTAR" (el mensaje final con tu contacto)
  ------------------------------------------------------------ */
  mensajeExportar: "Si quieres saber más solo tienes que llamarme al TELEFONO o enviarme un correo a EMAIL",
  // ↑ escribe TELEFONO y EMAIL en mayúsculas donde quieras que
  //   aparezcan tu teléfono y tu correo como enlaces.
  graciasExportar: "Muchísimas gracias por su atención.",

  /* ------------------------------------------------------------
     GUÍA RÁPIDA (los carteles que salen al abrir el CV)

     Sirve para que quien entra vea que la página se puede tocar.
     Sale sola al abrir, y se puede cerrar con "Saltar" o volver a
     verla con el botón "?" de arriba a la derecha.

     activa: pon false si prefieres quitarla del todo.
     zona:   a qué parte de la pantalla señala la flecha. Usa sólo
             estas tres palabras: "trabajos", "monitor" o "contacto".
     textoMovil: opcional. Si lo escribes, es el texto que se ve en el
             móvil, donde los paneles van apilados y no hay "izquierda".
             Si no lo pones, en el móvil se ve el texto normal.
     Puedes cambiar los títulos y los textos, quitar un paso o
     repetir una zona; el número (1/3, 2/3...) se calcula solo.
  ------------------------------------------------------------ */
  guia: {
    activa: true,
    saltar: "Saltar",
    siguiente: "Siguiente",
    ultimo: "¡Vamos!",
    pasos: [
      {
        zona: "trabajos",
        titulo: "Cada carpeta y cada clip es un trabajo",
        texto: "Haz clic en una carpeta de la izquierda o en un clip de colores de la línea de tiempo para abrir su ficha completa.",
        textoMovil: "Toca una carpeta de EXPERIENCIA LABORAL para abrir la ficha completa de ese trabajo.",
      },
      {
        zona: "monitor",
        titulo: "Dale al play",
        texto: "El vídeo tiene sonido y puedes pausarlo cuando quieras. Arrastra la barra azul de la línea de tiempo para moverte por él.",
        textoMovil: "El vídeo tiene sonido y puedes pausarlo cuando quieras. Arrastra la barra de debajo del vídeo para moverte por él.",
      },
      {
        zona: "contacto",
        titulo: "Hablamos cuando quieras",
        texto: "Mi teléfono y mi correo están siempre a la vista, y en «Exportar» tienes el cierre.",
      },
    ],
  },

  /* ------------------------------------------------------------
     COLORES GENERALES DE LA INTERFAZ (opcional)
     Si no quieres tocarlos, déjalos como están.
  ------------------------------------------------------------ */
  apariencia: {
    colorAcento: "#2d8ceb",     // azul de los detalles: línea de reproducción, bordes, enlaces...
    colorPaneles: "#232323",    // gris de los paneles
    colorFondo: "#161616",      // gris oscuro de los fondos
  },

  /* ------------------------------------------------------------
     TRABAJOS
     Cada bloque entre { } es un trabajo. El orden de esta lista
     es el orden de las carpetas del panel izquierdo.

     Campos de cada trabajo:
       carpeta      → nombre de la carpeta del panel izquierdo
       subcarpeta   → nombre de la sub-carpeta desplegable
       titulo       → título grande de la ficha
       puesto       → el cargo (en azul en la ficha)
       fechas       → por ejemplo "2011 - 2013"
       color        → color del clip y de la ficha ("#......")
       logo         → imagen del clip. Si no hay logo pon: null
       descripcion  → el texto largo de la ficha (entre comillas, todo seguido)
       tipoDeMedio  → fila "Tipo de medio" de la ficha
       productora   → fila "Productora" de la ficha
       estado       → "Renderizado" o "Work in Progress"
       etiquetas    → las palabras clave de abajo de la ficha
       pista        → "V1" (fila grande) o "V2" (fila pequeña de arriba)
       inicio/ancho → posición y tamaño en la línea de tiempo (en %)
  ------------------------------------------------------------ */
  trabajos: [

    {
      carpeta: "01_TU TIEMPO CON ROBERTO BRASERO (2011-2013)",
      subcarpeta: "AYUDANTE DE REALIZACIÓN",
      titulo: "TU TIEMPO con Roberto Brasero",
      puesto: "Ayudante de Realización",
      fechas: "2011 - 2013",
      color: "#2d8ceb",
      logo: "assets/tutiempo.png",
      descripcion: "Edición de colas y piezas cortas, lanzamiento de VTR y mapas meteorológicos desde control, control de tiempos y creación de escaletas. Realización en exterior del reportaje “Es tiempo de… Setas”.",
      tipoDeMedio: "Televisión. Actualidad",
      productora: "Atresmedia",
      estado: "Renderizado",
      etiquetas: ["ANTENA 3", "DIRECTO", "PLATÓ", "CONTROL", "FINAL CUT", "ESCALETAS"],
      pista: "V1",
      inicio: 0,
      ancho: 5.733,
    },

    {
      carpeta: "02_VIS A VIS (2016-2017)",
      subcarpeta: "WIP_EN PRÁCTICAS",
      titulo: "VIS A VIS",
      puesto: "Becario en postproducción",
      fechas: "2016 - 2017",
      color: "#e8d117",
      logo: "assets/vav.png",
      descripcion: "Volcado y mantenimiento de discos duros, envío de material, aprendizaje básico de otros departamentos, aprendizaje en ficción.",
      tipoDeMedio: "Televisión. Ficción",
      productora: "Globomedia",
      estado: "Renderizado",
      etiquetas: ["FICCIÓN", "EXTERIORES", "PLATÓ"],
      pista: "V1",
      inicio: 5.733,
      ancho: 5.237,
    },

    {
      carpeta: "03_¡HOLA!TV (2017-2019)",
      subcarpeta: "EDITOR DEL DEPARTAMENTO DE PROMOS",
      titulo: "¡HOLA! TV",
      puesto: "Editor en remoto",
      fechas: "2017 - 2019",
      color: "#d92b2b",
      logo: "assets/holatv.png",
      descripcion: "Editor y ayudante de realización del departamento de Promociones del canal. Edición de piezas promocionales tanto para programas de actualidad como empaquetados. Visionado estratégico de contenidos para la posterior edición y realización. Creación de promos mensuales elaboradas mediante el uso de templates dinámicos. Contacto directo en remoto con todos los demás departamentos de Latinoamérica.",
      tipoDeMedio: "Televisión. Actualidad / Corazón",
      productora: "Palmerita Films",
      estado: "Renderizado",
      etiquetas: ["PROMOS", "ADOBE PREMIERE", "AFTER EFFECTS", "CONTENIDO", "TELEVISIÓN", "REMOTO"],
      pista: "V1",
      inicio: 10.97,
      ancho: 22.542,
    },

    {
      carpeta: '04_"LA NOCHE DEL REY" Y "MADRID NOS UNE" (2018)',
      subcarpeta: "AYUDANTE DE REALIZACIÓN",
      titulo: "DOCUMENTALES “LA NOCHE DEL REY” Y “MADRID NOS UNE”",
      puesto: "Editor en remoto",
      fechas: "2018",
      color: "#b5b5b5",
      logo: "assets/telemadrid.png",
      descripcion: "Volcado y estructuración de proyectos para la fase de edición. Edición de promociones cortas con carácter publicitario.",
      tipoDeMedio: "Televisión. Documental",
      productora: "Palmerita Films en colaboración con KOMETA para Telemadrid",
      estado: "Renderizado",
      etiquetas: ["DOCUS", "TV", "ESTRUCTURA"],
      pista: "V2",
      inicio: 23.675,
      ancho: 9.838,
    },

    /* --------- FREELANCE: un bloque especial con sus clientes dentro --------- */
    {
      carpeta: "05_FREELANCE (2020-2021)",
      titulo: "FREELANCE",
      puesto: "Editor en remoto / presencial · AfterShare",
      fechas: "2020 - 2021",
      color: "#e23bd0",
      logo: "assets/yo.png",
      descripcion: "Cinco clientes, cinco formas de contar. Pincha en cada uno para ver el trabajo desarrollado:",
      pista: "V1",
      inicio: 33.512,
      ancho: 29.407,
      colorClientes: "#a625a0",   // color de los clips pequeños de la fila V2

      clientes: [
        {
          titulo: "BEBÉ A BORDO",
          subcarpeta: "BEBÉ A BORDO",
          puesto: "Editor en remoto/presencial",
          fechas: "2020 - 2021",
          logo: "assets/bab.png",
          descripcion: "Edición de piezas para YouTube en estrecha colaboración con el equipo de redacción. Ajuste de las piezas para distintas duraciones. Creación de miniaturas para el canal de YouTube.",
          tipoDeMedio: "Youtube. Entretenimiento",
          productora: "Freelance. AfterShare",
          estado: "Renderizado",
          etiquetas: ["YOUTUBE", "FAMILIAR", "PREMIERE", "PHOTOSHOP", "DURACIONES"],
          inicio: 33.512,
          ancho: 5.379,
        },
        {
          titulo: "CAMPAÑA TURESPAÑA 2021",
          subcarpeta: "TURESPAÑA 2021",
          puesto: "Editor en remoto",
          fechas: "2020 - 2021",
          logo: "assets/turespana.png",
          descripcion: "Creación de piezas a nivel interno de la empresa y congresos. Edición de material para promociones de la campaña. Inclusión de grafismos y subtítulos en distintos idiomas y formatos.",
          tipoDeMedio: "Web. Congresos",
          productora: "Freelance. AfterShare",
          estado: "Renderizado",
          etiquetas: ["FINISH", "FORMATOS", "PREMIERE"],
          inicio: 38.891,
          ancho: 5.131,
        },
        {
          titulo: "ENERVIT",
          subcarpeta: "ENERVIT",
          puesto: "Editor en remoto",
          fechas: "2020 - 2021",
          logo: "assets/enervit.png",
          descripcion: "Edición de stories y videos cortos con carácter divulgativo, enfocados a Facebook e Instagram.",
          tipoDeMedio: "Publicidad. Instagram",
          productora: "Freelance. AfterShare",
          estado: "Renderizado",
          etiquetas: ["STORIES", "VIDEOS CORTOS", "INSTAGRAM", "FACEBOOK", "FORMATOS"],
          inicio: 44.023,
          ancho: 5.273,
        },
        {
          titulo: "NATURGY",
          subcarpeta: "NATURGY",
          puesto: "Editor en remoto",
          fechas: "2020 - 2021",
          logo: "assets/naturgy.png",
          descripcion: "Edición de videos a nivel interno y promocional, con la inclusión de doblajes en distintos idiomas.",
          tipoDeMedio: "Empresa",
          productora: "Freelance. AfterShare",
          estado: "Renderizado",
          etiquetas: ["CORPORATIVO", "PREMIERE"],
          inicio: 49.295,
          ancho: 4.034,
        },
        {
          titulo: "PHILIPS SONICARE",
          subcarpeta: "PHILIPS SONICARE",
          puesto: "Editor en sala",
          fechas: "2020 - 2021",
          logo: "assets/philips.png",
          descripcion: "Montaje y adaptación de entrevistas junto al equipo de redacción para la creación de versiones en distintos formatos y duraciones para YouTube.",
          tipoDeMedio: "Publicidad. Youtube",
          productora: "Freelance. AfterShare",
          estado: "Renderizado",
          etiquetas: ["PUBLICIDAD", "YOUTUBE", "PREMIERE", "REDACCIÓN", "FINISH"],
          inicio: 53.33,
          ancho: 9.59,
        },
      ],
    },

    {
      carpeta: "06_AQUÍ LA TIERRA XL (2022)",
      subcarpeta: "EDITOR EN SALA",
      titulo: "Aquí la Tierra XL",
      puesto: "Editor en sala",
      fechas: "2022",
      color: "#27b833",
      logo: "assets/alt.png",
      descripcion: "Edición, selección de recursos y acabado creativo de reportajes. Musicalización y sonorización específica en función del tipo de reportaje.",
      tipoDeMedio: "Televisión. Actualidad",
      productora: "Catorce Comunicación para TVE",
      estado: "Renderizado",
      etiquetas: ["REPORTAJES", "TVE", "PREMIERE", "DIVULGATIVO"],
      pista: "V1",
      inicio: 62.92,
      ancho: 6.971,
    },

    {
      carpeta: "07_AHORA O NUNCA (2023-2024)",
      subcarpeta: "EDITOR EN SALA",
      titulo: "Ahora o Nunca",
      puesto: "Editor en sala",
      fechas: "2023 - 2024",
      color: "#f07818",
      logo: "assets/aon.png",
      descripcion: "Edición de piezas tipo concurso, más rápidas, dinámicas y divertidas, acompañándolas con sfx para reforzar la pieza. Trabajo directo con el equipo creativo y de grafismo para enriquecer las piezas. Edición, selección de recursos y acabado creativo de reportajes. Musicalización y sonorización específica en función del tipo de reportaje.",
      tipoDeMedio: "Televisión. Actualidad/Entretenimiento",
      productora: "Catorce Comunicación para TVE",
      estado: "Renderizado",
      etiquetas: ["REPORTAJES", "CONCURSO", "SFX", "GRAFISMOS", "TVE", "PREMIERE", "CREATIVO"],
      pista: "V1",
      inicio: 69.891,
      ancho: 9.059,
    },

    {
      carpeta: "08_LO SABE NO LO SABE (2024-ACTUALMENTE)",
      subcarpeta: "EDITOR EN SALA",
      titulo: "Lo Sabe, No Lo Sabe",
      puesto: "Editor en sala",
      fechas: "2024 - Actualidad",
      color: "#b01515",
      logo: "assets/lsnls.png",
      descripcion: "Edición final de concursantes previamente precortados. Sonorización, mezcla de efectos de sonido y musicalización. Inserción de grafismos y trabajo colaborativo con el departamento gráfico en la generación y aplicación de propuestas creativas. Libertad creativa a la hora de editar programas especiales (Navidad, Halloween…). Creación de piezas promocionales para la cadena si el programa lo requiere.",
      tipoDeMedio: "Televisión. Concurso",
      productora: "Producciones Mandarina para Cuatro",
      estado: "Work in Progress",
      etiquetas: ["CONCURSO", "CREATIVIDAD", "PREMIERE", "SFX", "GRAFISMOS"],
      pista: "V1",
      inicio: 78.95,
      ancho: 21.05,
    },

  ],
};
