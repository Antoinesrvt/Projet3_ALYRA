import useEth from "../contexts/EthContext/useEth";
import Dapp from "./Dapp";

function NoticeWrongNetwork() {
  const { state } = useEth();
    
  const noContract = <p>⚠️ Le contrat Voting n'a pas été trouvé ⚠️</p>;
  const noReseau = <p>⚠️ MetaMask n'est pas encore connecté au bon réseau ! ⚠️</p>;

  return (
    <div className="demo">
      {
        !state.artifact ? noContract : 
          !state.contract ? noReseau : 
            <Dapp /> 
      }
    </div>
  );
}

export default NoticeWrongNetwork;

