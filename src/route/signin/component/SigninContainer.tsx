import React from 'react'
import { useFela } from 'react-fela';

const SigninContainer: React.FC = (props) => {
  const styles = useStyleSheet();
  return (
    <div className={styles.Container}>
      <div className={styles.Layout}>
        {props.children}
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

export default SigninContainer
