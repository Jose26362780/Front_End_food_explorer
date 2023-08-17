import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;

  .embla {
  overflow: clip;
  gap: 2rem;
}
.embla__container {
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  

  gap:50px 60px;
  padding: 20px 10px 10px 10px;
}

.embla__slide {
  justify-content: center;
  flex: 0 0 100%;
  min-width: 0;
}
`

