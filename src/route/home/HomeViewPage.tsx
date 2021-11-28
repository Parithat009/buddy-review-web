import React from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useFela } from 'react-fela'
import { AppMngReponseError } from '../../util/AppMngReponseError'
import { useHomeStore } from './HomeViewStore'
import LayoutDefault from '../../component/layout/LayoutDefault'
import TitlePage from '../../component/TitlePage'
import Input from '../../component/Input'
import HomeFlatList from './component/HomeFlatList'
import HomeFlatListItem from './component/HomeFlatListItem'

const _HomeViewPage: React.FC = () => {
  const styles = useStyleSheet()
  const viewStore = useHomeStore

  const handleRetrieveRestauraunt = async (): Promise<void> => {
    await viewStore.onRetrieveRestauraunt()

    if (!viewStore?.responseError) return
    AppMngReponseError.verify(viewStore?.responseError)
  }

  const searchRestauraunt = () => {
    const filter = viewStore?.restaurauntLoadable?.filter(item => {
      return item?.title?.toLowerCase().indexOf(viewStore?.search) !== -1
    })

    viewStore?.setRestaurauntSearch(filter)
  }

  React.useEffect(() => {
    handleRetrieveRestauraunt()
  }, [])

  React.useEffect(() => {
    searchRestauraunt()
  }, [viewStore.search])

  return (
    <LayoutDefault>
      <TitlePage title='Restauraunt' />
      <div className={styles.ContainerInput}>
        <Input
          type='text'
          label='Search restauraunt'
          placeholder='Search restauraunt name ...'
          onChange={(value) => viewStore.setSearch(value)}
          onFocus={() => console.log('focus')}
        />
      </div>
      <HomeFlatList
        data={viewStore?.restaurauntSearch}
        keyExtractor={(index) => index}
        renderItem={(item) => <HomeFlatListItem item={item} />}
      />
    </LayoutDefault>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return ({
    ContainerInput: css({
      width: '100%',
      maxWidth: '360px',
      margin: 'auto'
    })
  })
}

const HomeViewPage = observer(_HomeViewPage)
export default HomeViewPage
