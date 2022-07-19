import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

export default function State({setBvn, voteStatus, changeState}) {
  const { state: { contract, accounts, vote, winningProposal}, dispatch } = useEth(); 
  const [h3, setH3] = useState("Vous avez finis de whitelist ?");
  const [h5, setH5] = useState("Cliquez ici pour lancer le temps des propositions:");

  // ----------- Functions -----------
  const functions = async () =>{
    switch(voteStatus){
      case '0':
        console.log("0");
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
        changeState()
        break;
      case '1':
        console.log("1");
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
        changeState()
        break;
      case '2':
        console.log("2");
        await contract.methods.startVotingSession().send({ from: accounts[0] });
        changeState()
        break;
      case '3':
        console.log("3");
        await contract.methods.endVotingSession().send({ from: accounts[0] });
        break;
      case '4':
        console.log("4");
        tallyVotes()
        changeState()
        break;
       case '5':
        console.log("5");
        console.log('Not possible');
        break;
      default:
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
        console.log("default");
        

        changeState()
        break;
      }
    }

    const tallyVotes = async() =>{
      await contract.methods.tallyVotes().send({ from: accounts[0] });
      const winner = await contract.methods.winningProposalID.call();
      dispatch({
            type: dispatch.actions.setWinningProposal,// ou action.tonAction
            data: { winner }, // ou ta data
         })
    }

 // ----------- Status -----------

 useEffect(()=>{
  switch(voteStatus){
    case '0':
      setH3("Vous avez finis de whitelist ?");
      setH5("Cliquez ici pour lancer le temps des propositions:");
      break;
    case '1':
      setH3("Assez de proposition ?");
      setH5("Cliquez ici pour finir:");
      setBvn("Nous en sommes en plein ajout de proposition!", "Proposez en une aussi !");
      break;
    case '2':
      setH3("Pret a voter ?");
      setH5("Cliquez ici pour commencer:");
      setBvn("Le proprietaire ne va pas tarder a lancer le vote!", "");
      break;
    case '3':
      setH3("Le vote est finis ?");
      setH5("Si oui, plus qu'a cliquer ici:");
      console.log(vote)
      if(vote != null){
        setBvn("A vos votes !", "Vous avez voté pour le N° " + vote)
      }else{
        setBvn("A vos votes !", "Fais le bon choix :)");
      }
      break;
    case '4':
      setH3("Pret a sortir le resultat ?");
      setH5("Cliquez ici pour finir:");
      if(vote != null){
        setBvn("Votes finis, vous aurez bientot le résultat!", "Vous avez voté pour le N° " + vote);
      }else{
        setBvn("Votes finis, vous aurez bientot le résultat!", "");
      }
      break;
    case '5':
      setH3("Vote finis !");
      setH5("Ca vous a plus ?");
      setBvn("Vote finis! Regardez le resultat","(Vous avez gagné ?)");
      break;
    default:
      setH3("Vous avez finis de whitelist ?");
      setH5("Cliquez ici pour lancer le temps des propositions:");
      break;
  }
 },[voteStatus, setBvn, vote]);


  return(
      <div className="card">
        <h3>{h3}</h3>
        <h5>{h5}</h5>
        <p>Le winner:{winningProposal}</p>
        <button onClick={functions}>Change State</button>
      </div>
    );

}
