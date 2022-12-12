export function Arrow({activeIcon, icon, onClick, active}) {
  const CurrentIcon = active ? activeIcon : icon;
  return (
    <button onClick={onClick}><CurrentIcon /></button>
  )
}
