const router = new VueRouter({

  routes:[
    {path:"/gestion", component: componente-gestion-proyectos},
    {path: "/proyectos", component:omponente-formcontacto}
  ]

});





var app = new Vue({
    el: "#app",
    data: {
      titulo:'Gestor de proyectos',
      segundoTitulo:"Formulario de contacto entre los equipos",
      imagenEquipo1: "img/equipo_1.png",
      imagenEquipo2:"img/equipo_2.png"
    }
  }); 