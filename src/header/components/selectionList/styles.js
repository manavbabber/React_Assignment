import styled from 'styled-components';

export const WrapperDiv = styled.div`
    display: flex;
    gap: 5px;
    padding-inline: 32px;
    flex-wrap: wrap;
    .item-s{
        height: 40px;
        .item{
            display: flex;
            align-items: center;
            font-family: sans-serif;
            font-size: 15px;
            padding-inline: 5px;
            img{
                margin-right: 8px;
            }
            .shade-text{
                background-color: #1b1f2414;
                margin-left: 8px;
                padding-inline: 5px;
                font-weight: bold;
                border-radius: 8px;
            }
        }
    }
    .item-s:hover{ 
        cursor: pointer;
        .item{
            background-color: #1b1f2414;
            border-radius: 8px;
        }
    }
    
    /** Just to show underline under default element */
    & .item-s:nth-child(2){
        border-bottom: 2px solid #f8c4b9;
        .item{
            font-weight: bold;
        }
    }

    @media (max-width: 935px){
      justify-content: center;
        .item-s{
            border-bottom: none  !important;
        }
    }


`