import React from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useRouter } from 'next/router'
import { AppMngReponseError } from '../../util/AppMngReponseError'
import { useHomeIdStore } from './HomeIdViewStore'
import LayoutDefault from '../../component/layout/LayoutDefault'
import TitlePage from '../../component/TitlePage'
import HomeIdForm from './component/HomeIdForm'
import HomeIdFlatList from './component/HomeIdFlatList'

const _HomeIdViewPage: React.FC = () => {
  const router = useRouter()
  const viewStore = useHomeIdStore

  const handleRetrieveRestauraunt = async (): Promise<void> => {
    const resId = router?.query?.id as string
    if (!resId) return
    await viewStore.onRetrieveRestauraunt(resId)

    if (!viewStore?.responseError) return
    AppMngReponseError.verify(viewStore?.responseError)
  }

  React.useEffect(() => {
    handleRetrieveRestauraunt()
  }, [router?.query?.id])

  console.log(toJS(viewStore?.restaurauntLoadable));


  if (!router?.query?.id) return null
  return (
    <LayoutDefault>
      <TitlePage title={viewStore?.restaurauntLoadable?.title} />
      <HomeIdForm />
      <HomeIdFlatList />
    </LayoutDefault>
  )
}

const HomeIdViewPage = observer(_HomeIdViewPage)
export default HomeIdViewPage
