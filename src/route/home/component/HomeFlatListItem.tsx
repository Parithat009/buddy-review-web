import React from 'react'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'
import { UIColor } from '../../../util/UISystem'
import { RestaurauntDTO } from '../../../model/Restauraunt.dto'

interface Props {
  item: RestaurauntDTO
}

const HomeFlatListItem: React.FC<Props> = (props) => {
  const { item } = props
  const router = useRouter()
  const styles = useStyleSheet()

  const goToRestaurauntId = (id): void => {
    router.push(`/${id}`)
  }

  return (
    <div
      className={styles.Container}
      onClick={() => goToRestaurauntId(item.id)}
    >
      <div className={styles.ImgContainer}>
        <img className={styles.ImgBanner} src={item?.image} />
      </div>
      <div className={styles.DetailContainer}>
        <div className={styles.ImgLogoContainer}>
          <img className={styles.ImgLogo} src={item?.image} />
        </div>
        <h1 className={styles.Title}>{item?.title}</h1>
        <p className={styles.Description}>{item?.description}</p>
        <div className={styles.SpaceLine} />
      </div>
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return ({
    Container: css({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: UIColor.Gray600,
      borderRadius: '.25rem',
      border: `1px solid ${UIColor.Gray500}`,
      overflow: 'hidden',
      cursor: 'pointer',
      ':hover': {
        filter: 'brightness(125%)'
      }
    }),
    ImgContainer: css({
      position: 'relative'
    }),
    ImgBanner: css({
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      filter: 'brightness(80%)'
    }),
    DetailContainer: css({
      position: 'relative',
      padding: '1rem'
    }),
    ImgLogoContainer: css({
      position: 'absolute',
      width: 'auto',
      height: '5rem',
      top: 0,
      left: 0,
      backgroundColor: UIColor.Gray600,
      padding: '.25rem',
      marginLeft: '1rem',
      marginTop: '-50px',
      border: `1px solid ${UIColor.Gray400}`
    }),
    ImgLogo: css({
      widht: '100%',
      height: '100%',
      objectFit: 'cover'
    }),
    Title: css({
      margin: '1.5rem 0 0 0',
      color: UIColor.White,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      fontWeight: 'bold'
    }),
    Description: css({
      color: UIColor.Gray100,
      fontSize: '.875rem',
      lineHeight: 1.5,
      fontWeight: 600,
      margin: '1rem 0'
    }),
    SpaceLine: css({
      borderTop: `1px solid ${UIColor.Gray400}`,
      marginBottom: '1rem'
    }),
  })
}

export default HomeFlatListItem
