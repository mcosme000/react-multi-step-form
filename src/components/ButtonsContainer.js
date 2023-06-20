import Button from "./Button"
import React, { useContext } from 'react'
import TabsContext from "../context/tabs"

const ButtonsContainer = () => {

  const { currentTab } = useContext(TabsContext)

  return (
    <div>
      { currentTab > 1 && <Button link>Go back</Button> }
      { currentTab === 4
        ? <Button confirm>Confirm</Button>
        : <Button primary>Continue</Button> }
    </div>
  )
}

export default ButtonsContainer;
