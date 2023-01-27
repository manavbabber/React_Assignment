import React, {useState, useRef, useCallback} from 'react'
import { WrapperDiv } from './styles';
import HeaderRow from './components/headerRow';
import Row from './components/Row';
import { useQuery } from './useQuery';
const Content = () => {
    const [page, setPage] = useState(0)
    const [ isLoading, isError, data, hasMore ] = useQuery(page);
    const observer = useRef();
    const lastElementRef = useCallback((node) => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setPage(prevValue => prevValue + 1)
            }
        })
        if(node) observer.current.observe(node);
    },[isLoading, hasMore])

    return(
    <WrapperDiv>
        <HeaderRow />
        { data.map((row_data,i) => {
            if(data.length === i+1){
                return(
                    <div ref={lastElementRef} key={`${i}-searched`}>
                        <Row {...row_data} />
                    </div>
                )
            }else{
                return(
                    <div key={`${i}-searched`}>
                        <Row {...row_data} />
                    </div>
                )
            }
        })}
        {isLoading && <div> Loading... </div> }
        {isError && <div> Error! </div> }
    </WrapperDiv>
    )
}
export default Content;