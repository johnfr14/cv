import {createContext, useContext, useEffect, useState} from "react"
import { ethers } from 'ethers'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const [user, setUser] = useState({account: null, balance: null})
  
  const getAddress = async (signer) => {
    const account = await signer.getAddress()
    const balance = ethers.utils.formatEther(await signer.getBalance())
    setUser({account, balance})
  }

  useEffect(() => {
    getAddress(signer)
  },[signer])
  
  return (
    <UserContext.Provider value={{ user, provider }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`You try to use UserContext outside of its provider.`)
  }
  return context
}

