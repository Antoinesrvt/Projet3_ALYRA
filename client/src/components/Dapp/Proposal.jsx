import useEth from "../../contexts/EthContext/useEth";

export default function Proposal({setEvents}) {
    const { state: { contract, accounts } } = useEth();

    const runAddProposal = async () => {
        let valeur=document.getElementById("addProposal").value;
        await contract.methods.addProposal(valeur).send({ from: accounts[0] })
        addEvent()

        
    }

    const addEvent = async()=>{
        let blocks = {
            fromBlock: 0,                  //Number || "earliest" || "pending" || "latest"
            toBlock: 'latest'
        };
        const eventList = await contract.getPastEvents('ProposalRegistered', blocks);
        setEvents(eventList);
    }

    addEvent()

    return(
        <div className="proposal card">
          <h4>Add Proposal:</h4>
          <input type="text" id="addProposal" placeholder="Votre description"/>
          <button onClick={runAddProposal}>Add</button>
        </div>
    );

}