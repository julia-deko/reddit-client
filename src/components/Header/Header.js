import { TiZoomInOutline } from 'react-icons/ti';
import { HeaderWrapper, SearchButton, SearchInput } from './HeaderStyles';

export function Header() {
  return (
      <HeaderWrapper>
        <p>
          Reddit<span>Minimal</span>
        </p>
        <form>
          <SearchInput 
            type="text"
            placeholder="Search"
          />
          <SearchButton type="submit">
            <TiZoomInOutline />
          </SearchButton>
        </form>
      </HeaderWrapper>
  )
}
