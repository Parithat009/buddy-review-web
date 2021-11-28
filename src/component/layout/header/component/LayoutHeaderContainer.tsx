import React from 'react'
import { useFela } from 'react-fela'
import { UIColor } from '../../../../util/UISystem'

const LayoutHeaderContainer: React.FC = (props) => {
  const styles = useStyleSheet()
  return (
    <React.Fragment>
      <div className={styles.Header}>{props.children}</div>
      <div className={styles.Space} />
    </React.Fragment>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return {
    Header: css({
      width: '100%',
      height: '64px',
      position: 'fixed',
      backgroundColor: UIColor.RedDark,
      borderBottom: `1px solid ${UIColor.Primary}`,
      paddingLeft: '1rem',
      paddingRight: '1rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      overflow: 'hidden',
      zIndex: 1
    }),
    Space: css({
      width: '100%',
      height: '64px',
    })
  }
}

export default LayoutHeaderContainer
