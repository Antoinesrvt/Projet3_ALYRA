import useEth from "../../contexts/EthContext/useEth";

export default function Vote() {
    const {state: { accounts, contract},
    dispatch} = useEth();

    const runSetVote = async() => {
        const valeur = document.getElementById("voterId").value;
        await contract.methods.setVote(valeur).send({ from: accounts[0] })
        dispatch({
            type: dispatch.actions.setVote,// ou action.tonAction
            data: { valeur }, // ou ta data
         })

        
    }
        
    return(
        <div className="vote card">
          <h4>Vote:</h4>
          <input type="number" id="voterId" placeholder="Entrez l'id de votre vote"/>
          <button onClick={runSetVote}>Set</button>
        </div>
    );

}




