
import './Cadastro.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { RestorePageOutlined } from '@mui/icons-material';

function Cadastro(){
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        senha: ''
    })

    const [loadingCep, setLoadingCep] = useState(false);

    const buscarEndereçoPorCep = async (cep) => {
        cep = cep.replace(/\D/g, '');

        if (cep.length !== 8) {
            alert('CEP inválido');
            return;
        }
        setLoadingCep(true);

        try{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if(response.data.erro){
                alert('CEP não encontrado');
                return;
            }
            setFormData({
                ...formData,
                rua: response.data.logradouro,
                complemento: response.data.complemento
            });
        }
        catch (error) {
            console.error('Erro ao buscar o CEP: ', error);
            alert('Erro ao buscar endereço. Verifique o CEP e tente novamente.');
        }
        finally {
            setLoadingCep(false);
        }
    }; 

    useEffect(() => {
        if (formData.cep.length === 8) {
            buscarEndereçoPorCep(formData.cep);
            setFormData(prev => ({
                ...prev,
                rua: formData.rua,
                complemento: formData.complemento
            }));
        }
    }
    , [formData.cep, formData.rua, formData.complemento]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev =>({
            ...prev,
            [name]: value
        }));
        if(name === 'cep'){
            buscarEndereçoPorCep(value);
        }
    };

    console.log(formData);

    
    return(
        <div className="container-cadastro">
            <h1>Cadastro</h1>
            <form className="form-cadastro">
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Sobrenome" required />
                <input type="number" placeholder="Telefone" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Cep" required value={formData.cep} onChange={(e) =>  {
                    setFormData({...formData, cep: e.target.value});
                    handleInputChange(e);
                }}/>
                <input type="text" placeholder="Rua" required value={formData.rua} onChange={(e) => {
                    setFormData({...formData, rua: e.target.value});
                    handleInputChange(e);
                }} />
                <input type="text" placeholder="Número" required />
                <input type="text" placeholder="Complemento" required />
                <input type="password" placeholder="Senha" required />
                <Button variant="contained" color="success" className="btn cadastro" type="submit">Cadastrar</Button>
            </form>
        </div>
    )
}

export default Cadastro;