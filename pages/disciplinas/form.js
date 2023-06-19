import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import disciplinaValidator from "@/VALIDATORS/disciplinaValidator";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    axios.post("/api/disciplinas", dados);
    push("/disciplinas");
  }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            isInvalid={errors.nome}
            type="text"
            placeholder='Insira o nome da disciplina'
            {...register("nome", disciplinaValidator.nome)} />
          {errors.nome &&
            <small className='error-message bg-primary text-white'>
              {errors.nome.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            isInvalid={errors.curso}
            type="text"
            placeholder="Insira o nome do curso"
            {...register("curso", disciplinaValidator.curso)} />
          {errors.curso &&
            <small className='error-message bg-primary text-white'>
              {errors.curso.message}</small>}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/disciplinas">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
