import styled from 'styled-components';

export const WrapperDiv = styled.div`

    display: flex;
    padding-inline: 32px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    .contents{
        display: flex;
        img{
            width: 26px;
            height: 26px;
        }
    }
    .links{
        display: flex;
        font-size: 20px;
        font-family: sans-serif;
        a{
            text-decoration: none;
            color: #0969DA
        }
        p{
            margin: 0;
            padding-inline: 3px;
        }
    }

    .public-tag{
        height: 20px;
        border: 1px solid #d0d7de;
        border-radius: 12px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        p{
            font-size: 12px;
            color: #57606a;
        }
    }

    .box{
        padding: 3px 12px;
        display: flex;
        align-items: center;
        border: 1px solid rgba(27,31,36,0.15);
        border-radius: 10px;
        font-family: sans-serif;
        font-size: 15px;
        margin-left: 10px;
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

    @media (max-width: 720px){
        justify-content: center;
      .contents{
        &.stats{
            display: none;
        }
      }
    }

`