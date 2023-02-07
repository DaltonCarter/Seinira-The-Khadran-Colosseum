import { useState, useEffect, useCallback, createContext } from 'react'

let logoutTimer

const AuthContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
  userId: null
})

const calculateRemainingTime = (exp) => {
  console.log('timer ping')
  const currentTime = new Date().getTime()
  const expTime = exp 
  const remainingTime = expTime - currentTime
  return remainingTime
}

const getLocalData = () => {
  console.log('Get local data ping')
  const storedToken = localStorage.getItem('token')
  const storedExp = localStorage.getItem('exp')
  const storedId = localStorage.getItem('userId')
  const remainingTime = calculateRemainingTime(storedExp)

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem('token')
    localStorage.removeItem('exp')
    localStorage.removeItem('userId')
    return null
    
  }


  return {
    token: storedToken,
    duration: remainingTime,
    userId: +storedId
  }
}



export const AuthContextProvider = (props) => {
  const localData = getLocalData()
  
  let initialToken
  let initialId
  if (localData) {
    initialToken = localData.token
    initialId = localData.userId

  }

  const [token, setToken] = useState(initialToken)
  const [userId, setUserId] = useState(initialId)


  const logout = () => {
    console.log('Logout ping')
    setToken(null)
    setUserId(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('exp')
    if(logoutTimer){
      clearTimeout(logoutTimer)
    }
    setTimeout(() => {window.location.reload()}, 500)

  }

  const login = (token, exp, userId) => {
    console.log('Login ping')
    setToken(token)
    setUserId(userId)
    localStorage.setItem('token', token)
    localStorage.setItem('exp', exp)
    localStorage.setItem('userId', userId)
    console.log('Stuff should be in local storage')
    const remainingTime = calculateRemainingTime(exp)
    logoutTimer = setTimeout(logout, remainingTime)
  }

  useEffect(() => {
    if(localData){
      logoutTimer = setTimeout(logout, localData.duration)
    }
  }, [localData, logout])

  const contextValue = {
    token,
    login,
    logout, 
    userId
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
