import React from 'react'
import { useFela } from 'react-fela'
import { UIResponesive } from '../../../util/UISystem'
import { RestaurauntDTO } from '../../../model/Restauraunt.dto'

interface Props<ItemT> {
  data: ItemT[]
  keyExtractor: (index: number) => number
  renderItem: (item: ItemT, index: number) => React.ReactElement
}

const HomeFlatList: React.FC<Props<RestaurauntDTO>> = (props) => {
  const { data, keyExtractor, renderItem } = props
  const styles = useStyleSheet()

  if (data?.length === 0) return null
  return (
    <div className={styles.Container}>
      {data?.map((item, index) => (
        <div className={styles.Content} key={keyExtractor(index)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return ({
    Container: css({
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      [UIResponesive.minWidthIPad]: {
        maxWidth: '768px'
      },
      [UIResponesive.minWidthIPadPro]: {
        maxWidth: '1024px'
      },
      [UIResponesive.minWidthIDesktop]: {
        maxWidth: '1280px'
      },
    }),
    Content: css({
      width: '100%',
      paddingBottom: '2rem',
      [UIResponesive.minWidthIPadPro]: {
        width: '50%',
        padding: '0 .75rem 2rem .75rem'
      },
      [UIResponesive.minWidthIDesktop]: {
        width: '33.33%',
        padding: '0 .75rem 2rem .75rem'
      },
    })
  })
}

export default HomeFlatList
