import styled from 'styled-components';

export const StyledHome = styled.div`
    background-image: url('https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80');
    height: 90vh;
    background-size: cover;
    
    h3 {
        color: #161D18;
        background: #007343;
    }
    .buttons-container {
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            font-size: 2rem;
            margin: 1rem;
            padding: 1rem 2rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;

            &:hover {
                color: #FFFFFF;
                background: #00A35E;
            }
        }
    }
`;