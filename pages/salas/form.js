import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import salaValidator from "@/VALIDATORS/salaValidator";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    axios.post("/api/salas", dados);
    push("/salas");
  }

  return (
    <Pagina titulo="Sala">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome </Form.Label>
          <Form.Control
            isInvalid={errors.nome}
            type="text"
            placeholder='Insira o nome da sala'
            {...register("nome", salaValidator.nome)} />
          {errors.nome &&
            <small className='error-message bg-primary text-white'>
              {errors.nome.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade </Form.Label>
          <Form.Control
            isInvalid={errors.capacidade}
            type="text"
            placeholder='Insira a capacidade da sala'
            {...register("capacidade", salaValidator.capacidade)} />
          {errors.capacidade &&
            <small className='error-message bg-primary text-white'>
              {errors.capacidade.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo </Form.Label>
          <Form.Control
            isInvalid={errors.tipo}
            type="text"
            placeholder='Insira o tipo da sala'
            {...register("tipo", salaValidator.tipo)} />
          {errors.tipo &&
            <small className='error-message bg-primary text-white'>
              {errors.tipo.message}</small>}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/salas">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
