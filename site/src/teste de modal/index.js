import './index.scss'

export default function ModalTest() {



    return (
        <main>
            <div>
                <button className='AbrirModal' onClick='abrirmodal()'> Fazer Comentário</button>
                <div>Comentario:</div>

                <div>
                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                </div>

                <div>
                    <button className='botpubli' onClick='publicar()'> Publicar </button>
                    <button className='botfechar' onClick='fecharModal()'>  Fechar </button>
                </div>
            </div>
        </main>
    );
}
