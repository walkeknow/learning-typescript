import React, { Component } from 'react'

const functCompHoc = (WrappedComponent: any) => {
  const initState = {
    name: 'Manny',
    message: "this is a message returned from HOC's state",
  }
  type State = Readonly<typeof initState>
  return class HOC extends Component<{}, State> {
    readonly state: State = initState

    render() {
      const { name, message } = this.state
      return <WrappedComponent name={name} message={message} />
    }
  }
}
 
export default functCompHoc
