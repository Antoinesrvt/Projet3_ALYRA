import useEth from "../../contexts/EthContext/useEth";


export default function Registration({setEvents}) {
    const { state: { contract, accounts} } = useEth();
    

    const runAddVoter = async () => {
        let valeur=document.getElementById("voterAddress").value;
        await contract.methods.addVoter(valeur).send({ from: accounts[0] })
        // getting the events  
        addEvent()
    }

    const addEvent = async() =>{
        let blocks = {
            fromBlock: 0,                  //Number || "earliest" || "pending" || "latest"
            toBlock: 'latest'
        };
        const eventList = await contract.getPastEvents('VoterRegistered', blocks);
        setEvents(eventList);
    }

    addEvent()

    return(
        <div className="registration card">
          <h4>WhiteList:</h4>
          <input type="text" id="voterAddress" placeholder="Adresse du voter"/>
          <button onClick={runAddVoter}>Add voter</button>
        </div>
    );

}