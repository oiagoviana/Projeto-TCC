import './index.scss'
import { listarConversasP, listarConversasU } from '../../api/chatApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';

export default function CabecalhoChat() {
    const [conversaU, setConversaU] = useState([]);
    const [conversaP, setConversaP] = useState([]);

    async function listaConversasU() {
        const id = storage('usuario-logado').id;
        const r = await listarConversasU(id);
        setConversaU(r);
    }

    async function listaConversasP() {
        const id = storage('psi-logado').id;
        const r = await listarConversasP(id);
        setConversaP(r);
    }

    useEffect(() => {
        listaConversasU();
        listaConversasP();
    }, [])


    return (
        <main className='page-cabecalhoChat'>
            <div className='itens-cabecalho'>

                <img src="/assets/images/setaVoltar.svg" className='imagem-seta' />


                <div className='div-nome'>
                    <span className='nome'>{conversaU.nomePsi}</span>
                    <div className='subdiv-nome'>
                        <p className='nomedr'>{conversaU.nomePsi}</p>
                        <p className='disp'>Disponível</p>
                    </div>
                </div>


            </div>
        </main>
    );
}