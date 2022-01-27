export default function PaginaDoChat(){
    return (
        <div>
            <h1>Página do chat</h1>
            <div>
                {/* <img src="assets\404.jpg" alt="notFound" /> */}
                {/* <img src={'assets/no.png'} alt="text" /> */}
                <img src={require("/assets/no.png").default} alt="nao_carrega"/>
            </div>
        </div>

    );
}