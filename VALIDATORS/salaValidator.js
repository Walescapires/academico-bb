const salaValidator = {

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
    capacidade: {
      minLength: {
        value: 1,
        message: "Mínimo de 1 caractere!",
      },
      maxLength: {
        value: 5,
        message: "Máximo de 5 caracteres!",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Apenas números!",
      },
    },
    tipo: {
      required: 'Tipo obrigatório!',
      minLength: {
        value: 1,
        message: "Mínimo de 1 caractere!",
      },
      maxLength: {
        value: 20,
        message: "Máximo de 20 caracteres!",
      },
    },
  };
  
  export default salaValidator;