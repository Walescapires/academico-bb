const semestreValidator = {
    nome: {
      required: "Nome obrigatório!",
      minLength: {
        value: 1,
        message: "Mínimo de 1 caractere!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    datainicio: {
     required: 'Data de início obrigatório!'
    },
    datafim: {
     required: 'Data final obrigatório!'
    },
  };
  
  export default semestreValidator;