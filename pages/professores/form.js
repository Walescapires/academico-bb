import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { mask } from 'remask'
import professorValidator from "@/VALIDATORS/professorValidator";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  function salvar(dados) {
    axios.post("/api/professores", dados);
    push("/professores");
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.setValue
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(valor, mascara))
  }

  return (
    <Pagina titulo="Professor">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome </Form.Label>
          <Form.Control
            isInvalid={errors.nome}
            type="text"
            placeholder="Nome"
            {...register("nome", professorValidator.nome)} />
          {errors.nome &&
            <small className='error-message bg-primary text-white'>
              {errors.nome.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF </Form.Label>
          <Form.Control
            mask='999.999.999-99'
            maxLength={14}
            isInvalid={errors.cpf}
            type="text"
            placeholder="CPF"
            {...register("cpf", professorValidator.cpf)}
            onChange={handleChange} />
          {errors.cpf &&
            <small className='error-message bg-primary text-white'>
              {errors.cpf.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula </Form.Label>
          <Form.Control
            mask='99999999999'
            maxLength={12}
            isInvalid={errors.matricula}
            type="text"
            placeholder="Matrícula"
            {...register("matricula", professorValidator.matricula)}
            onChange={handleChange} />
          {errors.matricula &&
            <small className='error-message bg-primary text-white'>
              {errors.matricula.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salário </Form.Label>
          <Form.Control
            isInvalid={errors.salario}
            type="text"
            placeholder="Salário"
            {...register("salario", professorValidator.salario)} />
          {errors.salario &&
            <small className='error-message bg-primary text-white'>
              {errors.salario.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail </Form.Label>
          <Form.Control
            isInvalid={errors.email}
            type="text"
            placeholder="E-mail"
            {...register("email", professorValidator.email)} />
          {errors.email &&
            <small className='error-message bg-primary text-white'>
              {errors.email.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone </Form.Label>
          <Form.Control
            mask='(99) 99999-9999'
            maxLength={15}
            isInvalid={errors.telefone}
            type="text"
            placeholder="Telefone"
            {...register("telefone", professorValidator.telefone)}
            onChange={handleChange} />
          {errors.telefone &&
            <small className='error-message bg-primary text-white'>
              {errors.telefone.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP </Form.Label>
          <Form.Control
            mask='99.999-999'
            maxLength={10}
            isInvalid={errors.cep}
            type="text"
            placeholder="CEP"
            {...register("cep", professorValidator.cep)}
            onChange={handleChange} />
          {errors.cep &&
            <small className='error-message bg-primary text-white'>
              {errors.cep.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro </Form.Label>
          <Form.Control
            isInvalid={errors.logradouro}
            type="text"
            placeholder="Logradouro"
            {...register("logradouro", professorValidator.logradouro)} />
          {errors.logradouro &&
            <small className='error-message bg-primary text-white'>
              {errors.logradouro.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento </Form.Label>
          <Form.Control
            isInvalid={errors.complemento}
            type="text"
            placeholder="Complemento"
            {...register("complemento", professorValidator.complemento)} />
          {errors.complemento &&
            <small className='error-message bg-primary text-white'>
              {errors.complemento.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número </Form.Label>
          <Form.Control
            isInvalid={errors.numero}
            type="text"
            placeholder="Insira o número"
            {...register("numero", professorValidator.numero)} />
          {errors.numero &&
            <small className='error-message bg-primary text-white'>
              {errors.numero.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro </Form.Label>
          <Form.Control
            isInvalid={errors.bairro}
            type="text"
            placeholder="Bairro"
            {...register("bairro", professorValidator.bairro)} />
          {errors.bairro &&
            <small className='error-message bg-primary text-white'>
              {errors.bairro.message}</small>}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/professores">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
