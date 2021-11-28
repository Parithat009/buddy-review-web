import React from 'react'
import { useFela } from 'react-fela'
import { UIColor } from '../util/UISystem'

interface IProps {
  title: string
}

const TitlePage: React.FC<IProps> = (props) => {
  const styles = useStyleSheet()
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>{props.title}</h1>
      <div className={styles.TitleEffect} />
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return ({
    Container: css({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: '2rem',
      marginBottom: '2rem'
    }),
    Title: css({
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: '0.025rem',
      color: UIColor.Primary,
      textAlign: 'center',
      margin: 0,
      padding: '.25rem 0'
    }),
    TitleEffect: css({
      height: '4px',
      width: '100%',
      maxWidth: '320px',
      margin: '.25rem auto',
      background: `radial-gradient(${UIColor.Primary} 20%, ${UIColor.Transparent} 70%)`
    })
  })
}

export default TitlePage
