import React from 'react'
import router from 'next/router';
import { observer } from 'mobx-react-lite'
import { useFela } from 'react-fela';
import { useHomeIdStore, State } from '../HomeIdViewStore'
import { UIColor } from '../../../util/UISystem';

const _HomeIdFlatList: React.FC = () => {
  const viewStore = useHomeIdStore
  const styles = useStyleSheet()
  return (
    <div className={styles.Container}>
      <div className={styles.Layout}>
        {viewStore?.restaurauntLoadable?.slot?.map((val, index) => (
          <div className={styles.Card} key={index}>
            {val?.map((item, j) => (
              <div className={styles.CardContent} key={item?.slotId}>
                {j === 0 && <span className={styles.CardTitle}>{item?.date}</span>}
                <div>
                  <span className={styles.CardCustomername}>{item?.customerName} : </span>
                  <span className={styles.CardTimeSlot}>{item?.timeStart} - {item?.timeEnd}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela();
  return ({
    Container: css({
      width: '100%',
      display: 'flex'
    }),
    Layout: css({
      width: '100%',
      maxWidth: '480px',
      margin: '16px auto 32px auto',
      // backgroundColor: 'whitesmoke',
    }),
    Card: css({
      width: '100%',
      padding: '16px',
      marginBottom: '12px',
      border: `2px solid ${UIColor.Gray400}`,
      color: UIColor.Gray400,
      borderRadius: '4px'
    }),
    CardContent: css({
      display: 'flex',
      flexDirection: 'column'
    }),
    CardTitle: css({
      color: UIColor.Primary,
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '4px'
    }),
    CardCustomername: css({
      color: UIColor.Gray50,
      fontSize: '14px',
      fontWeight: '600',
      margin: '0 0 4px 32px'
    }),
    CardTimeSlot: css({
      color: UIColor.Gray100,
      fontSize: '14px',
      fontWeight: '600',
    })
  });
};

const HomeIdFlatList = observer(_HomeIdFlatList)
export default HomeIdFlatList
