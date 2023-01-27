import React from 'react'
import { WrapperDiv } from './styles';
const info_maker = (number,date,user) => {
    let date_created = new Date(date);
    let date_now = new Date();
    let diffTime = Math.abs(date_now - date_created);
    let date_str = null;
    if(Math.floor(diffTime / (1000 * 60 * 60 * 24))){
        date_str = Math.floor(diffTime / (1000 * 60 * 60 * 24)).toString() + ' days ago ';
    }else if(Math.floor(diffTime / (1000 * 60 * 60))){
        date_str = Math.floor(diffTime / (1000 * 60 * 60)).toString() + ' hrs ago ';
    }else if(Math.floor(diffTime / (1000 * 60 ))){
        date_str = Math.floor(diffTime / (1000 * 60)).toString() + ' mins ago ';
    }else if(Math.floor(diffTime / (1000))){
        date_str = Math.floor(diffTime / (1000)).toString() + ' sec ago ';
    }else{
        date_str = ' 1 sec ago ';
    }
    return '#' + number.toString() + ' opened ' + date_str + ' by ' + user;
}
const Row = ({title, labels, number, user, created_at, pull_request, assignee, comments}) => {
    return(
        <WrapperDiv >
            <div className='issue-img'>
                <img src={process.env.PUBLIC_URL + '/content/circle-dot-green.png'}/>
            </div>
            <div className='row-content'>
                <div className='row-header'>
                    <div className='row-title'>
                        {title}
                    </div>
                    {labels && labels.map((val) => {
                        let background_color = '#' + val.color
                        return(
                            <div className='row-status' style={{backgroundColor: background_color}}>
                                {val.name}
                                </div>
                        )
                    })}
                </div>
                <div className='row-info'>
                    {info_maker(number,created_at,user.login)}
                </div>
            </div>
            <div class='right-info'>
                <div class='pull-requests'>
                    {pull_request ? (
                    <>
                    <img src={process.env.PUBLIC_URL + '/content/row-pullrequest.png'}/>
                    <span>1</span>
                    </>): null}
                </div>
                <div class='assignee'>
                    {assignee ?(
                    <>
                    <img src={process.env.PUBLIC_URL + '/content/row-assignee.png'}/>
                    <span>assignee</span>
                    </>): null}
                </div>
                <div class='messages'>
                    {comments ? (
                    <>
                    <img src={process.env.PUBLIC_URL + '/content/row-message.png'}/>
                    <span>{comments}</span>
                    </>) : null}
                </div>
                </div>
        </WrapperDiv>
    )
}

export default Row;