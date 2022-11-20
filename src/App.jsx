import bgHeader from './assets/images/bg-desktop-dark.jpg';
import styled from 'styled-components';

const lightMode = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>;

const StyledDiv = styled.div`
  background-color: #181824;
  height: 100vh;
`;

const StyledHeader = styled.header`
  position: relative;

  .position-absolute {
    top: 5rem;
  }

  .text-white {
    letter-spacing: 1rem;
  }
`;

function App() {
  return (
    <StyledDiv>
      <StyledHeader className='d-flex justify-content-center'>
        <img src={bgHeader} alt="bg-header" className='bg-header' />
        <div className='position-absolute d-flex justify-content-between w-50 m-auto'>
          <h1 className='text-white'>TODO</h1>
          <button type='submit' className='bg-transparent border-0'>{lightMode}</button>
        </div>
      </StyledHeader>
    </StyledDiv>
  )
}

export default App
