const disciplinaValidator = {

    nome: {
      required: "Nome obrigatório!",
      minLength: {
        value: 2,
        message: "Mínimo de 2 caracteres!",
      },
      maxLength: {
        value: 60,
        message: "Máximo de 60 caracteres!",
      },
    },
    curso: {
      required: "Curso obrigatório!",
      minLength: {
        value: 5,
        message: "Mínimo de 5 caracteres!",
      },
      maxLength: {
        value: 50,
        message: "Máximo de 50 caracteres!",
      },
    },
  };
  
  export default disciplinaValidator;