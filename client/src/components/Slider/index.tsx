import * as React from 'react';
import { Swipeable } from 'react-swipeable';
import { arrow } from '../../util/icons';
import Typography from '../Typography';
import { Result } from '../../types/data';
import {
  SliderWrapper,
  Slide,
  SlideImageWrapper,
  SliderNav,
  SlideTitle,
  Dots,
  Dot,
  PrevNextButton,
} from './styles';

interface Props {
  defaultIndex?: number;
  slides?: Result[];
}

export const Slider: React.FunctionComponent<Props> = ({ defaultIndex = 0, slides = [] }) => {
  const [index, setIndex] = React.useState(defaultIndex);

  const changeIndex = React.useCallback(
    (newIndex: number) => {
      let i = newIndex;

      if (newIndex < 0) {
        i = slides.length - 1;
      } else if (newIndex >= slides.length) {
        i = 0;
      }

      setIndex(i);
    },
    [slides],
  );

  const currentSlide = React.useMemo(() => {
    if (slides.length < 1) {
      return undefined;
    }

    return slides[index];
  }, [slides, index]);

  if (!currentSlide) {
    return null;
  }

  return (
    <SliderWrapper>
      <Swipeable
        onSwipedLeft={() => changeIndex(index - 1)}
        onSwipedRight={() => changeIndex(index + 1)}
      >
        <Slide>
          <SlideTitle>
            {currentSlide.name && (
              <Typography element="h3" variant="h2" content={currentSlide.name} />
            )}
          </SlideTitle>
          <SlideImageWrapper>
            {currentSlide.background_image && (
              <img src={currentSlide.background_image} alt={currentSlide.name} />
            )}
          </SlideImageWrapper>
          <SliderNav>
            <PrevNextButton
              href="#"
              aria-label="Go to previous slide"
              onClick={e => {
                e.preventDefault();
                changeIndex(index - 1);
              }}
            >
              {arrow}
            </PrevNextButton>
            <Dots>
              {slides.map((_, k) => (
                <Dot key={k} active={k === index} />
              ))}
            </Dots>
            <PrevNextButton
              next
              href="#"
              aria-label="Go to next slide"
              onClick={e => {
                e.preventDefault();
                changeIndex(index + 1);
              }}
            >
              {arrow}
            </PrevNextButton>
          </SliderNav>
        </Slide>
      </Swipeable>
    </SliderWrapper>
  );
};

export default Slider;
