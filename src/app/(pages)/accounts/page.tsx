import { AccountPage } from '@/components/screens/account/AccountPage'
import { Loader } from '@/components/UI/Loader/loader'
import dynamic from 'next/dynamic'

const DynamicAccountPage = dynamic(
  () =>
    import('@/components/screens/account/AccountPage').then(
      (D) => D.AccountPage
    ),
  { loading: () => <Loader /> }
)

const Page = () => {
  return <DynamicAccountPage />
}

export default Page
