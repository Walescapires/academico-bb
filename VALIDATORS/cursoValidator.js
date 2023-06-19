const cursoValidator = {
    nome: {
      required: "Nome obrigatório!",
      minLength: {
        value: 2,
        message: "Mínimo de 2 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    duracao: {
      required: "Duração obrigatório!",
      minLength: {
        value: 1,
        message: "Mínimo de 1 caractere!",
      },
      maxLength: {
        value: 2,
        message: "Máximo de 2 caracteres!",
        pattern: {
          value: /[0-9]+$/,
          message: "Apenas números!",
        },
      },
    },
    modalidade: {
      required: "Modalidade obrigatório!",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 15,
        message: "Máximo de 15 caracteres!",
      },
    },
  };
  
  export default cursoValidator;
  