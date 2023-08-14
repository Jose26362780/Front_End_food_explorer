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
  justify-content: center;

  gap:48px 60px;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
`