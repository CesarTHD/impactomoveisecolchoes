'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { User } from '../types/User'
import { AgnoContext } from './AgnoContext'
import { app, auth } from '../services/firebase/firebase'
import { cookies } from 'next/headers'

import {
  
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { toast } from 'react-toastify'
import { FaExclamationCircle } from 'react-icons/fa'

export const AgnoProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string>('')
  const router = useRouter();
  

  useEffect(() => {
    const sessionToken = localStorage.getItem('session.token')
    const sessionUser = localStorage.getItem('agno.user')
  
    if (sessionToken) {
      setToken(sessionToken)
    }
  
    if (sessionUser) {
      setUser(JSON.parse(sessionUser) as User)
    }
  
    if (token) {
      localStorage.setItem('session.token', token)
    }
  }, [token])

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
  
      const user = userCredential.user
      setUser({
        uid: user.uid,
        email: user.email ? user.email : undefined,
      })
      const idToken = await user.getIdToken()
      setToken(idToken)
  
      localStorage.setItem('agno.user', JSON.stringify(user))
      localStorage.setItem('session.token', idToken)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao autenticar. Verifique suas credenciais.', {
        position: toast.POSITION.TOP_RIGHT,
        style: {
          background: 'white',
          color: '#F97316',
          borderRadius: '8px',
          // Outras propriedades de estilo CSS aqui
        },
        icon: <FaExclamationCircle className="text-[#F97316] mr-2" />,
        progressStyle: { background: 'orange' },
      })
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        provider,
      )
  
      const user = userCredential.user
      const idToken = await user.getIdToken()
      const userData = {
        uid: user.uid,
        email: user.email ? user.email : undefined,
        imageUrl: user.photoURL ? user.photoURL : undefined,
        firstName:user.displayName ? user.displayName : undefined
      }
      setUser(userData)
      setToken(idToken)
  
      localStorage.setItem('agno.user', JSON.stringify(userData))
      localStorage.setItem('session.token', idToken)
  
      // Redirecionar para a página de dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }
  const signInWithGitHub = async () => {
    try {
      const provider = new GithubAuthProvider()
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        provider,
      )

      const user = userCredential.user
      const idToken = await user.getIdToken()
      setUser({
        uid: user.uid,
        email: user.email ? user.email : undefined,
      })

      setToken(idToken)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('session.token')
    localStorage.removeItem('agno.user')
    signOut(auth)
      .then(() => {
        router.push('/')
        localStorage.removeItem('session.token')
        localStorage.removeItem('agno.user')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const signUp = async (email: string, password: string) : Promise<any> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const user = userCredential.user
      // setUser({
      //   uid: user.uid,
      //   email: user.email ? user.email : undefined,
      // })

      // const idToken = await user.getIdToken()
      // setToken(idToken)
      return user;
    } catch (error) {
      console.error(error)
      return undefined;
    }

  }

  return (
    <AgnoContext.Provider
      value={{
        user,
        token,
        signIn,
        signUp,
        signInWithGoogle,
        signInWithGitHub,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AgnoContext.Provider>
  )
}
