import styled from 'styled-components';

export const WrapperDiv = styled.div`
    padding: 16px;
    background-color: #f6f8fa;
    border: 1px solid #d0d7de;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: relative;
    .content{
        display: flex;
        justify-content: space-between;
        .flex-group{
            display: flex;
            .status{
                cursor: pointer;
                display: flex;
                align-items: center;
                font-family: sans-serif;
                font-size: 16px;
                margin-right: 10px;
                img{
                    width: 24px;
                    aspect-ratio: 1/1;
                    margin-left: 5px;
                }
                .down-arrow{
                    width: 8px;
                    aspect-ratio: 1/1;
                }
                span{
                    margin-left: 5px;
                }
                &.sort-item{
                    margin-inline: 15px;
                }
            }
            
        }

    }

    @media (max-width: 935px){
        padding-top: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        .flex-group{
            flex-wrap: wrap;
            justify-content: center;
                &.issues-number{
                    position: absolute;
                    bottom: 120%;
                }

                .status{
                    margin-top: 10px;
                }
            }
    }
`