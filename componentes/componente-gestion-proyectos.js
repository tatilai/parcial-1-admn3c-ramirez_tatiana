Vue.component('componente-gestion-tareas',{

    data:function(){
        return{
            nombreProyecto:'',
            descripcionProyecto:'',
            responsableProyecto:'',
            validar:true,
            vacio:true,
            listaProyectos:[],
            proyectoModificado: null,
            estadoProyecto:[
                'En progreso',
                'Completado',
                'Sin terminar'
            ],
            colorProyecto:''
            
            //agregar filtro de busqueda con arrays!!
        }
    },

    
    template:`




    `,


    methods:{
        continuarProyecto:function(){
             if(this.nombreProyecto.length=== 0 || this.descripcionProyecto.lenght===0 || this.responsableProyecto.lenght===0){
               this.validar =false
               return 
             }

             if(this.proyectoModificado===null){
                this.validar =true;
                this.vacio =false;

               this.listaProyectos.push({
                nombreProyecto:this.nombreProyecto,
                responsableProyecto:this.responsableProyecto,
                descripcionProyecto:this.descripcionProyecto,
                estado:'En progreso'                


               });
               this.nombreProyecto = '';
               this.responsableProyecto = '';
               this.descripcionProyecto = '';

             }



        },

    },

       



});