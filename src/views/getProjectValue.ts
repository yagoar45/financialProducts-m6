import axios from 'axios';

async function GetProjectValue () {

    const dtoForProjectValue = { id: '1', name: "CDB", valueInvest: 200, fee: 0.11 }
    const valueCatch = (await axios.post('http://localhost:3000/product', dtoForProjectValue)).data;

    return (
        <div>
        Valor Projetado para o ativo: {valueCatch}
        </div>
    )
}