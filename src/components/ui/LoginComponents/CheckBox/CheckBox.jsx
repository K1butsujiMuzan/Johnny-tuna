import styles from './CheckBox.module.css'

function CheckBox({ text, link, onChange, checked, name, value }) {
  return (
    <label className={styles.checkboxContainer}>
      <input
        className={styles.checkboxInput}
        type={'checkbox'}
        onChange={onChange}
        checked={checked}
        name={name}
        value={value}
      />
      <span className={styles.checkboxSquare}>
        {checked && (
          <svg
            className={styles.checkboxIcon}
            width="18"
            height="16"
            viewBox="0 0 18 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.7506 0.990414C17.1702 1.31311 17.2487 1.9148 16.9259 2.33431L7.34258 14.7927C7.17449 15.0112 6.92034 15.1468 6.64511 15.1646C6.36992 15.1825 6.10036 15.081 5.90536 14.886L1.11369 10.0944C0.739446 9.72004 0.739446 9.11331 1.11369 8.73899C1.48795 8.36476 2.09473 8.36476 2.46899 8.73899L6.48888 12.7589L15.4068 1.1657C15.7294 0.746183 16.3312 0.667705 16.7506 0.990414Z"
            />
          </svg>
        )}
      </span>
      <span className={styles.checkboxText}>
        {text}
        <a
          href={
            'https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85'
          }
          className={styles.checkboxLink}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          {link}
        </a>
      </span>
    </label>
  )
}

export default CheckBox
