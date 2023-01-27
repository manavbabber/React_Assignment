import React from 'react'
import { WrapperDiv } from './styles';

const HeaderRow = () => {
    const issue_status = [
        {
            img_path: 'circle-dot-black.png',
            text: 'Open',
            total: 819
        },
        {
            img_path: 'correct-tick.png',
            text: 'Closed',
            total: 10960
        }
    ]

    const sort_items = [ 'Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

    return(    
        <WrapperDiv>
            <div className='content'>
                <div className='flex-group issues-number'>
                    {issue_status.map((item) => {
                        return(
                            <div className='status'>
                                <img src={process.env.PUBLIC_URL + '/content/' + item.img_path}/>
                                <span style={{ color: `${item.text === 'Closed'? 'grey' : 'black'}`}}>{item.total.toLocaleString('en', {useGrouping: true})}</span>
                                <span style={{ color: `${item.text === 'Closed'? 'grey' : 'black'}`}}>{item.text}</span> 
                            </div>
                        )
                    })}
                </div>
                <div className='flex-group'>
                    {sort_items.map((item) => {
                        return(
                            <div className='status sort-item'>
                                <span>{item}</span>
                                <img className='down-arrow' src={process.env.PUBLIC_URL + '/content/down-arrow.png'}/>
                            </div>)
                        })}
                </div>
            </div>
        </WrapperDiv>
    )
}

export default React.memo(HeaderRow);