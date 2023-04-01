import React, { useState } from 'react'

function Cal() {
  const [res,setres]=useState(" ")

  const clcikhandler=(event)=>{
    setres(res.concat(event.target.value))
  }
  const cleardisp=()=>{
    setres('')
  }

  const calcres=()=>{
    setres(eval(res).toString())
  }
  return (
    <div className='Main'>

<input type="text" id="answ" placeholder='0' value={res} />


<input type="button" value="9" className='button' onClick={clcikhandler} />
<input type="button" value="8" className='button' onClick={clcikhandler} />
<input type="button" value="7" className='button' onClick={clcikhandler} />
<input type="button" value="6" className='button' onClick={clcikhandler} />
<input type="button" value="5" className='button' onClick={clcikhandler} />
<input type="button" value="4" className='button' onClick={clcikhandler} />
<input type="button" value="3" className='button' onClick={clcikhandler} />
<input type="button" value="2" className='button' onClick={clcikhandler} />

<input type="button" value="1" className='button' onClick={clcikhandler} />

<input type="button" value="0" className='button' onClick={clcikhandler} />
<input type="button" value="." className='button' onClick={clcikhandler} />
<input type="button" value="+" className='button' onClick={clcikhandler} />
<input type="button" value="-" className='button' onClick={clcikhandler} />
<input type="button" value="*" className='button'  onClick={clcikhandler}/>
<input type="button" value="/" className='button' onClick={clcikhandler}/>
<input type="button" value="%" className='button'  onClick={clcikhandler}/>
<input type="button" value="Clear" className='button butt1'  onClick={cleardisp}/>
<input type="button" value="=" className='button butt1' onClick={calcres}  />
    </div>
  )
}

export default Cal