import React from 'react';
import { useFela } from 'react-fela';
import { UIColor } from '../util/UISystem';

interface Props {
  messageError?: string
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  const styles = useStyleSheet();
  return (
    <div className={styles.Container}>
      {props.messageError && (
        <div className={styles.MessageError}>
          {props.messageError}
        </div>
      )}
      <button
        type="submit"
        className={styles.BtnContainer}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );

};

const useStyleSheet = () => {
  const { css } = useFela();
  return ({
    Container: css({
      position: 'relative',
      margin: '16px 0px 16px 0px',
      borderRadius: '4px',
      backgroundColor: UIColor.Transparent,
    }),
    BtnContainer: css({
      width: '100%',
      lineHeight: 2.5,
      fontSize: '14px',
      fontWeight: 600,
      paddingLeft: '32px',
      paddingRight: '32px',
      border: `2px solid ${UIColor.Primary}`,
      borderRadius: '4px',
      outline: 'none',
      cursor: 'pointer',
      color: UIColor.Primary,
      backgroundColor: UIColor.Transparent,
      ':hover': {
        backgroundColor: UIColor.Primary,
        color: UIColor.Black,
      },
    }),
    MessageError: css({
      width: '100%',
      fontSize: '14px',
      fontWeight: 600,
      color: UIColor.Red,
      textAlign: 'center',
      margin: '16px 0'
      // backgroundColor: UIColor.Transparent,
      // ':hover': {
      //   backgroundColor: UIColor.Primary,
      //   color: UIColor.Black,
      // },
    }),
  });
};

export default Button;
