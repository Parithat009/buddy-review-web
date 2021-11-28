import React from 'react'
import dynamic from 'next/dynamic'
import { useFela } from 'react-fela'
import { UIColor, UIResponesive } from '../../util/UISystem'
const LayoutDefaultHeader = dynamic(() => import('./header/LayoutDefaultHeader'), { ssr: false });

const LayoutDefault: React.FC = (props) => {
  const styles = useStyleSheet()
  return (
    <React.Fragment>
      <LayoutDefaultHeader />
      <div className={styles.Container}>
        <div className={styles.Layout}>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  )
}

const useStyleSheet = () => {
  const { css } = useFela()
  return ({
    Container: css({
      width: '100%',
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: UIColor.Black,
      display: 'flex'
    }),
    Layout: css({
      width: '100%',
      margin: '0 auto',
      padding: '0 1rem',
      [UIResponesive.minWidthIPad]: {
        maxWidth: '768px'
      },
      [UIResponesive.minWidthIPadPro]: {
        maxWidth: '1024px'
      },
      [UIResponesive.minWidthIDesktop]: {
        maxWidth: '1280px'
      },
    })
  })
}

export default LayoutDefault
