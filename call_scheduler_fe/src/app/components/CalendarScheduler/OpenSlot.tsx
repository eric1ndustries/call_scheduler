import styles from './CalendarScheduler.module.css'

const OpenSlot = (id: number) => {
  return (
    <div className="checkbox-container">
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      id={label}
    />
    <label htmlFor={label}>{label}</label>
  </div>
  )
}

export default OpenSlot;
