import useEth from "../contexts/EthContext/useEth";


export default function Nav() {

    const { state: { voteStatus, accounts} } = useEth();

    return(
        <header>
            <nav>
                <h2>Voting Dapp</h2>
                <p>Etat: {voteStatus}</p>
                <p className="addr">{accounts}</p>
            </nav>
        </header>
        
    );

}

