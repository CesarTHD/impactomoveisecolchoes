import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '../../../constants/app-routes'
import { checkUserAuthenticated } from '@/functions/checkUserAuthentication'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter()
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    boolean | null
  >(null)

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await checkUserAuthenticated()

      if (!authenticated) {
        router.push(APP_ROUTES.public.login)
      } else {
        setIsUserAuthenticated(authenticated)
      }
    }

    checkAuthentication()
  }, [router])

  if (!isUserAuthenticated) {
    return null
  }

  return <>{children}</>
}

export default PrivateRoute
