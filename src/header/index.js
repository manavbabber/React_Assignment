import React from 'react'
import { WrapperDiv } from './styles';
import Title from './components/title';
import SelectionList from './components/selectionList';
const Header = () => {
    return(
        <WrapperDiv>
            <Title />
            <SelectionList />
        </WrapperDiv>
    )
}
export default Header;