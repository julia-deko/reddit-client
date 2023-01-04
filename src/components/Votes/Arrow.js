import { ArrowWrapper } from './ArrowStyles';

export function Arrow({activeIcon, icon, onClick, active}) {
  const CurrentIcon = active ? activeIcon : icon;
  return (
    <ArrowWrapper onClick={onClick}><CurrentIcon /></ArrowWrapper>
  )
}
