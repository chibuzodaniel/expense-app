import React,{useState} from 'react'

const AddTransactions = () => {
    const[text, setText] = useState('');
    const[amount, setAmount] = useState(0);

  return (
    <div>
        <h3>Add Transactions</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text...' />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount <br/>
                (Negative - expense, postive - income)</label>
                <input type='number' value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder='Enter Amount...'></input>
            </div>
            <button className='btn'>Add Transactions</button>
        </form>
      
    </div>
  )
}

export default AddTransactions
