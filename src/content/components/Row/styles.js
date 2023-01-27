import styled from 'styled-components';

export const WrapperDiv = styled.div`
    padding: 16px;
    border: 1px solid #d0d7de;
    display: flex;
    .issue-img{
        margin-left: 5px;
        img{
            width: 24px;
            aspect-ratio: 1/1;
        }
    }
    .row-content{
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        width: 70%;
        .row-header{
            display: flex;
            flex-wrap: wrap;
            .row-title{
                cursor: pointer;
                font-weight: bold;
                font-size: 17px;
                font-family: sans-serif;
                margin-right: 5px;
            }
            .row-status{
                cursor: pointer;
                padding: 5px;
                margin-top: 2px;
                font-size: 12px;
                background-color: #D4C5F9;
                border-radius: 10px;
                margin-right: 5px;
            }
        }
        .row-info{
            color: grey;
            font-size: 12px;
        }
    }
    .right-info{
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        width: 25%;
        flex-wrap: wrap;
        .pull-requests, .assignee, .messages{
            width: 25%;
            display: flex;
            justify-content: flex-end;
            gap: 3px;
            img{
                width: 16px;
                height: 16px;
            }
            span{
                font-size: 12px;
            }
            margin-right: 10px;
        }
    }

    @media (max-width: 576px){
      .right-info{
        .pull-requests, .assignee, .messages{
            width: auto;    
        }
      }
    }
`