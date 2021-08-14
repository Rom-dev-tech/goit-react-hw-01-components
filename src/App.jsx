import PaintimgsList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from './paintings.json';
import colorPickerOptions from './ColorPicker.json';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Box from './components/Box/Box';
import Flex from './components/Flex/Flex';

const App = () => {
  return (
    <>
      <Section title="Cards">
        <Container>
          <PaintimgsList items={paintings} />
        </Container>
      </Section>

      <Section title="Alert">
        <Container>
          <Alert text="Шеф все пропало!" type="success" />
          <Alert text="Шеф все пропало!" type="warning" />
          <Alert text="Шеф все пропало!" type="error" />
        </Container>
      </Section>

      <Section title="ColorPicker">
        <Container>
          <ColorPicker options={colorPickerOptions} />
        </Container>
      </Section>

      <Section title="Box">
        <Container>
          <Flex>
            <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
            <Box type="medium" />
            <Box type="large" styles={{ color: 'tomato', fontSize: 40 }} />
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default App;
