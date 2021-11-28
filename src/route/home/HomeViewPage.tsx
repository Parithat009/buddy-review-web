import React from 'react'
import { observer } from 'mobx-react-lite'
import { AppMngReponseError } from '../../util/AppMngReponseError'
import { useHomeStore } from './HomeViewStore'
import LayoutDefault from '../../component/layout/LayoutDefault'
import TitlePage from '../../component/TitlePage'
import HomeFlatList from './component/HomeFlatList'
import HomeFlatListItem from './component/HomeFlatListItem'

const _HomeViewPage: React.FC = () => {

  const handleRetrieveRestauraunt = async (): Promise<void> => {
    await useHomeStore.onRetrieveRestauraunt()

    if (!useHomeStore?.responseError) return
    AppMngReponseError.verify(useHomeStore?.responseError)
  }

  React.useEffect(() => {
    handleRetrieveRestauraunt()
  }, [])

  return (
    <LayoutDefault>
      <TitlePage title='Restauraunt' />
      <HomeFlatList
        data={useHomeStore?.restaurauntLoadable}
        keyExtractor={(index) => index}
        renderItem={(item) => <HomeFlatListItem item={item} />}
      />
    </LayoutDefault>
  )
}

const HomeViewPage = observer(_HomeViewPage)
export default HomeViewPage
