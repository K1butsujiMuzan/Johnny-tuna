import styles from './Radio.module.css'

function Radio({ name, value, label, onChange, checked }) {
  return (
    <label className={styles.radioContainer}>
      <input
        className={styles.radioInput}
        type={'radio'}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.radioCircle}>
        {checked && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="6"
              height="6"
              rx="3"
              fill="white"
              stroke="black"
              strokeWidth="6"
            />
          </svg>
        )}
      </span>
      <span className={styles.radioText}>{label}</span>
    </label>
  )
}

export default Radio
