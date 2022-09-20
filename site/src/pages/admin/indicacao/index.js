import './index.scss'
import Menu from '../../../components/menuadm'


export default function Indicações () {
    
    return (
        <main className="principal">

            <div>
                <Menu/>
            </div>


            <div className="segunda-principal">

                <div className="container-direita">

                    <div>
                        <label>Nome do Local:</label> 
                        <input type= "text"/>

                    </div>

                    <div>
                        <label>Nome da Cidade:</label> 
                        <input type= "text" />
                    </div>

                    <div>
                        <label>Categoria do Local:</label> 
                    
                        <select>
                            <option disabled selected hidden> Selecione </option>
                            <option>Hospital</option>
                            <option>Espaço para Crianças</option>
                            <option>Saúde Materna</option>
                            <option>Lazer</option>
                        </select>
                    </div>

                    <div>
                        <label>Horário de Atendimento:</label> 
                        <input type= "text" />
                    </div>

                    <div>
                        <label>Classificação do Local:</label>
                        <input type="text" />
                    </div>

                </div>

                <div className="container-esquerda">
                        <div>
                            <label>Endereço:</label> 
                            <input placeholder="Digite o Endereço"type= "text"/>
                        </div>

                        <div>
                            <label>CEP:</label> 
                            <input placeholder="Digite o CEP" type= "text" />
                        </div>

                </div>

            </div>


        </main>
    );
}