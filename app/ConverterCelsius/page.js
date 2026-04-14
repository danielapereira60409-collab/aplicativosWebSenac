"use client"
import {useState} from 'react';
import converterC from '@/actions/ConverterCelsius/ConverterCelsius';

export default function converteC() {
    const [celsius, setCelsius] = useState('');
    const [resultado, setResultado] = useState('');

    function calcular() {
        if (celsius === '') {
            setResultado('Por favor, insira um valor em Celsius.');
            return;
        }

        const Resultado = converterC(Number(celsius));
        setResultado(Resultado);
    }

    function limpar() {
        setCelsius('');
        setResultado('');
    }

    return (
        <main className='flex items-center justify-center h-screen bg-gray-900'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold mb-4 text-white'>Conversor de Celsius para Fahrenheit</h1>

                <input
                    type="number"
                    value={celsius}
                    onChange={(e) => setCelsius(e.target.value)}
                    placeholder="Digite a temperatura em Celsius"
                    className='bg-gray-600 text-white placeholder:text-gray-400 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    onClick={calcular}
                    className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200'
                >
                    Converter
                </button>
                <button
                    onClick={limpar}
                    className='mt-4 ml-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-200'
                >
                    Limpar
                </button>
                {resultado && (
                    <p className='mt-4 text-lg font-semibold text-white'>
                        {resultado}
                    </p>
                )}
            </div>  



        </main>   
        );
}