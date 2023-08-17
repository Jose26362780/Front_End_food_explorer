import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  margin: 50px 0 10px;

  .embla {
  overflow: clip;
  gap: 2rem;
}
.embla__container {
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  justify-content: center;
  

  gap:10px 30px;
  padding: 50px 20px 10px 10px;
 
}

.embla__slide {
  justify-content: center;
  flex: 0 0 100%;
  min-width: 0;
}

h1 {
    font-family: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 500;
    margin: 0px 0 0px 25px;
  }

`

