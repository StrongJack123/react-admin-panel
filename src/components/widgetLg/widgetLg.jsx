import './widgetLg.css';

const widgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}> {type} </button>
  }
  return (
    <div className='widgetLg'>
      <span className="widgetLgTitle">Latest transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            Customer
          </th>
          <th className="widgetLgTh">
            Date
          </th>
          <th className="widgetLgTh">
            Amount
          </th>
          <th className="widgetLgTh">
            Status
          </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgUserAvatar" />
            <span className="widgetLgUserName">Edwin Sanchez</span>
          </td>
          <td className="widgetLgDate">
            Jun 1 2022
          </td>
          <td className="widgetLgAmount">
            10923 $
          </td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgUserAvatar" />
            <span className="widgetLgUserName">Edwin Sanchez</span>
          </td>
          <td className="widgetLgDate">
            Jun 1 2022
          </td>
          <td className="widgetLgAmount">
            10923 $
          </td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgUserAvatar" />
            <span className="widgetLgUserName">Edwin Sanchez</span>
          </td>
          <td className="widgetLgDate">
            Jun 1 2022
          </td>
          <td className="widgetLgAmount">
            10923 $
          </td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgUserAvatar" />
            <span className="widgetLgUserName">Edwin Sanchez</span>
          </td>
          <td className="widgetLgDate">
            Jun 1 2022
          </td>
          <td className="widgetLgAmount">
            10923 $
          </td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default widgetLg