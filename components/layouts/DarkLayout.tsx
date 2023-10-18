interface DarkLayoutInterface {
  children: React.ReactNode
}

export const DarkLayout = (props: DarkLayoutInterface) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3> Dark-Layout </h3>
      <div>{props.children}</div>
    </div>
  )
}
