import React, {useState} from 'react'

import { v4 as uuidv4 } from 'uuid';
import { TextInput } from 'components/inputs';
import { Button } from 'components/buttons';

const Uuid = () => {
  const [singleUuid, setSingleUuid] = useState(uuidv4())

  return (
    <div>
      <TextInput value={singleUuid}/>
      <Button onClick={() => setSingleUuid(uuidv4())}>Regen</Button>
    </div>
  )
}

export default Uuid