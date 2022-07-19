export default function ProposalTable({events}) {
    return(
      <div className="table">
        <h4>Propositions:</h4>
        <table>
          <thead>
            <tr>
              <th className="id">ID</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr>
                <td className="id">{event.returnValues.proposalId}</td>
                <td>{event.returnValues.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

