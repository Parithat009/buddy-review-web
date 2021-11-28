import React from 'react'
import { useFela } from 'react-fela'
import { UIColor } from '../util/UISystem'

interface Props {
  type: 'text' | 'password' | 'date' | 'time'
  label: string;
  placeholder?: string;
  value?: string
  validate?: string
  onChange: (value: string) => void;
  onFocus: () => void;
}

const Input: React.FC<Props> = (props) => {
  const { type, label, placeholder, value, validate, onChange, onFocus } = props
  const styles = useStyleSheet();
  const [isFocus, setFocus] = React.useState(false);

  const handleFocus = () => {
    setFocus(true);
    onFocus()
  }

  const getLabelStyles = (): string => {
    if (validate) return `${styles.Label} ${styles.LabelValidate}`;
    else if (isFocus) return `${styles.Label} ${styles.LabelFocused}`;
    return `${styles.Label} ${styles.LabelDefault}`;
  }

  const getInputStyles = (): string => {
    if (isFocus) return `${styles.Input} ${styles.InputFocused}`;
    else return `${styles.Input} ${styles.InputDefault}`;
  }

  return (
    <div className={styles.Container}>
      <label className={getLabelStyles()}>
        {validate ? validate : label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onFocus={() => handleFocus()}
        onBlur={() => setFocus(false)}
        onChange={(e) => onChange(e.target.value)}
        className={getInputStyles()}
      />
    </div>
  )
}

const useStyleSheet = () => {
  const { css } = useFela();
  return ({
    Container: css({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '16px'
    }),
    Label: css({
      marginBottom: '8px',
    }),
    LabelDefault: css({
      color: UIColor.Gray50
    }),
    LabelFocused: css({
      color: UIColor.Primary
    }),
    LabelValidate: css({
      color: UIColor.Red,
    }),
    Input: css({
      width: '100%',
      paddingLeft: '16px',
      paddingRight: '16px',
      lineHeight: 3,
      borderRadius: '4px',
      border: '2px solid',
      outline: 'none',
      '::placeholder': {
        color: UIColor.Gray200,
      },
    }),
    InputDefault: css({
      color: UIColor.White,
      backgroundColor: UIColor.Black,
      borderColor: UIColor.Gray400,
    }),
    InputDisabled: css({
      color: UIColor.Gray100,
      backgroundColor: UIColor.Black + 88,
      borderColor: UIColor.Transparent,
    }),
    InputFocused: css({
      color: UIColor.Primary,
      backgroundColor: UIColor.Black,
      borderColor: UIColor.Primary
    }),
  });
};

export default Input
