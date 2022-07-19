import useEth from "../../contexts/EthContext/useEth";
import { useState} from "react";
import Registration from "./Registration";
import Proposal from "./Proposal";
import Vote from "./Vote";
import State from "./State";
import WhitelistTable from "./WhitelistTable"
import ProposalTable from "./ProposalsTable";


export default function Dapp() {
  const {state: {contract, owner, accounts, winningProposal}} = useEth();
  const [registrationEvents, setRegistrationEvents] = useState([]);
  const [proposalEvents, setProposalEvents] = useState([]);
  const [voteStatus, setVoteStatus] = useState();
  

  const [h3, seth3] = useState("Le proprietaire est acuellement en train d'ajouter les voters en whitelist !");
  const [p, setP] = useState("Attendez un peu");

  const setBvn = (h3, p)=> {
      seth3(h3);
      setP(p);
  }

  const changeState = async ()=>{
    const status = await contract.methods.workflowStatus().call();
    setVoteStatus(status)
    
  }

  const cards = <div className="cards">
    {
        owner === accounts[0]  ? <>
          <Registration setEvents={setRegistrationEvents}/>
        </>
        : <>
        </>
    }
      <Proposal setEvents={setProposalEvents}/>
      <Vote setBvn={setBvn}/>
      {
        owner === accounts[0]  ? <>
          <WhitelistTable events={registrationEvents}/>
          <State setBvn={setBvn} voteStatus={voteStatus} changeState={changeState}/>
        </>
        : <><div></div>
        <div></div>
        </>
      }
      <ProposalTable events={proposalEvents}/>
    </div>

  changeState()

  return (
    <>
     <div className="bienvenue">
        <h1>Bienvenue</h1>
        <h3>{h3}</h3>
        <p>{p}</p>  
    </div>
    {
      winningProposal != null ? <div>
        <h5>Bien Joué</h5>
      </div>
      : cards
    }
    
    </>
  );
}