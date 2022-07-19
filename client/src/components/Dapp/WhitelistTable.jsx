export default function WhitelistTable({events}) {
    
    return(
        <div className="table">
        <h4>Addresses Whitelist</h4>
         <table>
          <tbody>
          {events.map((event)=>(
              <tr>
                <td>{event.returnValues.voterAddress}</td>
              </tr>
          ))}
          </tbody>
          </table>
        </div>
    );
}


