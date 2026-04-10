import { Container, ImageComponent, Loader } from 'components';

export default function About() {
  return (
    <Container type="section">
      <Container>
        <h2>About</h2>
        <p>About section</p>
        <ImageComponent
          src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg"
          style={{ width: '100%' }}
          Loader={<Loader />}
        />
      </Container>
    </Container>
  );
}
