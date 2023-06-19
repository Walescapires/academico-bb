const alunoValidator = {
  
    nome: {
      required: "Nome obrigatório!",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    cpf: {
      required: "CPF obrigatório!",
      maxLength: {
        value: 14,
        message: "Máximo de 14 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Apenas números!",
      },
    },
    matricula: {
      minLength: {
        value: 2,
        message: "Mínimo de 2 caracteres!",
      },
      maxLength: {
        value: 12,
        message: "Máximo de 12 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Apenas números!",
      },
    },
    email: {
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
  
    telefone: {
      maxLength: {
        value: 15,
        message: "Máximo de 15 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Apenas números!",
      },
    },
    cep: {
      minLength: {
        value: 4,
        message: "Mínimo de 4 caracteres!",
      },
      maxLength: {
        value: 10,
        message: "Máximo de 10 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Apenas números!",
      },
    },
    logradouro: {
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    complemento: {
      minLength: {
        value: 2,
        message: "Mínimo de 2 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    numero: {
      minLength: {
        value: 1,
        message: "Mínimo de 1 caractere!",
      },
      maxLength: {
        value: 20,
        message: "Máximo de 20 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Apenas números!",
      },
    },
    bairro: {
      minLength: {
        value: 5,
        message: "Mínimo de 5 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
  };
  
  export default alunoValidator;