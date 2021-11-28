import React from 'react'
import router from 'next/router';
import { observer } from 'mobx-react-lite'
import { useFela } from 'react-fela';
import { AppMngReponseError } from '../../../util/AppMngReponseError'
import { useHomeIdStore, State } from '../HomeIdViewStore'
import Input from '../../../component/Input'
import Button from '../../../component/Button'

const _HomeIdForm: React.FC = () => {
  const viewStore = useHomeIdStore
  const styles = useStyleSheet()

  const handleReserve = async (): Promise<void> => {
    await viewStore.reserve(router?.query?.id as string)

    if (viewStore.status === 'error') {
      AppMngReponseError.verify(viewStore?.responseError)
    }
  }

  const handleFocus = (key: keyof State): void => {
    viewStore.setStatus('default')
    viewStore.setState(key, false)
  }

  const goToHome = (): void => {
    viewStore?.resetState()
    router.push('/')
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Layout}>
        <Input
          type='text'
          label='Customer name'
          placeholder='Enter customer name ...'
          value={viewStore.state.customerName}
          validate={viewStore.state.isCustomerNameInvalid && 'Please enter customer name' || ''}
          onChange={(value) => viewStore.setState('customerName', value)}
          onFocus={() => handleFocus('isCustomerNameInvalid')}
        />
        <Input
          type='date'
          label='Date'
          placeholder='Enter date ...'
          value={viewStore.state.date}
          validate={viewStore.state.isDateInvalid && 'Please enter date' || ''}
          onChange={(value) => viewStore.setState('date', value)}
          onFocus={() => handleFocus('isDateInvalid')}
        />
        <Input
          type='time'
          label='Time start'
          placeholder='Enter time ...'
          value={viewStore.state.timeStart}
          validate={viewStore.state.isTimeStartInvalid && 'Please enter free time' || ''}
          onChange={(value) => viewStore.setState('timeStart', value)}
          onFocus={() => handleFocus('isTimeStartInvalid')}
        />
        <Input
          type='time'
          label='Time end'
          placeholder='Enter time ...'
          value={viewStore.state.timeEnd}
          validate={viewStore.state.isTimeEndInvalid && 'Please enter free time' || ''}
          onChange={(value) => viewStore.setState('timeEnd', value)}
          onFocus={() => handleFocus('isTimeEndInvalid')}
        />
        <Button
          onClick={handleReserve}
          messageError={viewStore.status === 'error' && '*** RESERVE FAILED ***' || ''}
        >
          Reserve
        </Button>
        <Button onClick={goToHome} >
          Back To Home
        </Button>
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
      margin: 'auto',
    }),
  });
};

const HomeIdForm = observer(_HomeIdForm)
export default HomeIdForm
