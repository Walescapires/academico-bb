import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import semestreValidator from '@/VALIDATORS/semestreValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        axios.post('/api/semestres', dados)
        push('/semestres')
    }

    return (
        <Pagina titulo="Semestre">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Semestre </Form.Label>
                    <Form.Control
                    isInvalid={errors.semestre}
                     type="text"
                     placeholder='Semestre'
                      {...register('semestre', semestreValidator.semestre)}/>
                      {errors.semestre &&
                       <small className='error-message bg-primary text-white'>
                        {errors.semestre.message}</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="datainicio">
                    <Form.Label>Data Início </Form.Label>
                    <Form.Control
                    isInvalid={errors.datainicio}
                     type="date"
                     placeholder='Insira a data do início'
                      {...register('datainicio', semestreValidator.datainicio)}/>
                      {errors.datainicio &&
                       <small className='error-message bg-primary text-white'>
                        {errors.datainicio.message}</small>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="datafim">
                    <Form.Label>Data Fim</Form.Label>
                    <Form.Control
                    isInvalid={errors.datafim}
                     type="date"
                     placeholder='Insira a data do final'
                    {...register('datafim', semestreValidator.datafim)}/>
                    {errors.datafim && 
                    <small className='error-message bg-primary text-white'>
                        {errors.datafim.message}</small>}
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestres">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form