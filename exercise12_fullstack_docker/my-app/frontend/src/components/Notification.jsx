const Notification = ({ message, type }) => {
  if (!message) return null

  const style = {
    color: type === 'error' ? 'red' : 'green',
    backgroundColor: '#f0f0f0',
    fontSize: 18,
    border: `3px solid ${type === 'error' ? 'red' : 'green'}`,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  }

  return <div style={style}>{message}</div>
}

export default Notification