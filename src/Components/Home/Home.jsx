import { useState } from 'react';
import { MainStyle, Section, ImageType1, ImageType2, Div, Footer } from "./style";

export default function Home() {

  const [selectedColor, setSelectedColor] = useState({
    cupColor: 'laranja', 
    circleColor: 'green', 
  });

  const handleColorChange = (color) => {
    switch (color) {
      case 'yellow':
        setSelectedColor({
          cupColor: 'amarelo', 
          circleColor: 'yellow',
        });
        break;
      case 'red':
        setSelectedColor({
          cupColor: 'vermelho', 
          circleColor: 'red',
        });
        break;
      case 'orange':
        setSelectedColor({
          cupColor: 'laranja', 
          circleColor: 'green', 
        });
        break;
      default:
        break;
    }
  };

  return (
    <MainStyle>
      <Section>
        <h2>Mais que Café</h2>
        <h3>
          Isso é <span> Starbucks</span>
        </h3>
        <p>
          A Starbucks oferece uma variedade de cafés de alta<br />
          qualidade. Alguns dos cafés mais populares incluem o Caffè<br />
          Americano, o Cappuccino, o Latte Macchiato e o Espresso.<br />
          Além disso, a Starbucks oferece bebidas quentes e frias,<br />
          doces diferenciados e sanduíches.
        </p>
        <button>SAIBA MAIS</button>
        <Div>
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true"
            alt="copo laranja pequeno"
            onClick={() => handleColorChange('orange')}
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true"
            alt="copo vermelho pequeno"
            onClick={() => handleColorChange('red')}
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true"
            alt="copo amarelo pequeno"
            onClick={() => handleColorChange('yellow')}
          />
        </Div>
      </Section>
      <Section>
    
        <ImageType1
          src={`https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/${selectedColor.cupColor}2x.png?raw=true`}
          alt={`${selectedColor.cupColor} grande`}
        />
    
        <ImageType2
          src={`https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/${selectedColor.circleColor === 'yellow' ? 'Ellipse%202.png' : selectedColor.circleColor === 'red' ? 'vermelhoElipse.png' : 'Ellipse%201.png'}?raw=true`}
          alt={`Círculo ${selectedColor.circleColor}`}
        />
      </Section>
      <Footer>
        <p>© 2024 Starbucks - Todos os direitos reservados.</p>
      </Footer>
    </MainStyle>
  );
}
