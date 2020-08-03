import React from 'react'
import logo from './logo.svg'
import './App.css'
import FunctComp from './FunctComp'

function App() {
  // let firstValue: string = 'Manny'
  // let firstValue: number = 123
  let firstValue: boolean = true

  /* 2 ways for arrays */
  // let firstValue: number[] = [1, 2, 3]
  let anArray: Array<number> = [1, 2, 3]

  /* tuple */
  let aTuple: [string, number] = ['Manny', 123]

  /* enum */
  enum anEnum {
    first = 1,
    second = 2,
  }

  /* any */
  let anyType: any = 'Manny'

  /* void */
  const voidFunct = (): void => {
    console.log('warning!')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        <p>
          The value {anArray} is of {typeof anArray} type!
        </p>
        <p>
          The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>
        <p>
          The value {anEnum.first} is of {typeof anEnum.first} type!
        </p>
        <p>
          The value {anyType} is of {typeof anyType} type!
        </p>
        <p>
          The value {voidFunct} is of {typeof voidFunct} type!
        </p>

        {/* Funct Component Hoc */}

        <FunctComp/>
      </header>
    </div>
  )
}

export default App
