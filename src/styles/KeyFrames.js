import styled, { keyframes } from 'styled-components'

// animation to slide in the home page from left
export const slideInLeft = keyframes`
  from {
    /* -webkit-transform: translate3d(-100%, 0, 0); */
    /* transform: translate3d(-100%, 0, 0); */

    -webkit-transform: scale(0.85);
    transform: scale(0.88);
    visibility: visible;
    
    
  }

  to {
    /* -webkit-transform: translate3d(0, 0, 0); */
    /* transform: translate3d(0, 0, 0); */
    -webkit-transform: scale(1);
    transform: scale(1);
    
  }
`;

// animation to slide out the home page to the left
export const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const Page = styled.div``;

// apply the correct animation based on the transition state class name.
export const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.5s forwards;
  }
`;