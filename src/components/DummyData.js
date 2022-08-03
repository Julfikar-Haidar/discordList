import React from 'react'
import "./dummyData.css";
import useFetchData from './UseFetchData';

export default function DummyData() {
  const {
    data,
    loading,
  } = useFetchData();

  return (
    <>
   {loading && <div>Loading</div>}
  
  <table className="table">
  <tbody>
    <tr>
      <th>Server</th>
      <th>Channel</th>
      <th>Sender</th>
      <th>Message</th>
      <th>Time</th>
      <th>Date</th>
      <th>Reaction</th>
      <th className="empty"> </th>

    </tr>
    
    {/* <tr>
      <td>1</td>
      <td>some data</td>
      <td>other data</td>
      <td>ye?</td>
      <td>nay?</td>
      <td>smashing!</td>
      <td>yeah!</td>
      <td className="edit-buttons"><button className="edit">Edit</button><button className="delete">Delete</button></td>
    </tr> */}
    {
data?.map((item,i) => (
  <tr key={i} className="rection_row">
    <td>{item.server}</td>
    <td>{item.channel}</td>
    <td>{item.sender}</td>
    <td>{item.message}</td>
    <td>{item.time}</td>
    <td>{item.date}</td>
    <td className='rec_clm'>{item.counter?.map((r, index) => (
            <p key={index} >
              
              <button >{r.key} {r.count} </button>
        
            </p>
           

          ))
    }
    </td>
    
  </tr>
  ))
}
  </tbody>
  </table>
 {/* <div className="grid-container">
  <button>Button1</button>
  <button>Button2</button>
  <button>Button3</button>
  <button>Button4</button>
  <button>Button5</button>
  <button>Button6</button>
</div> */}


    </>
  )
}
