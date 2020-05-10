import * as React from 'react';
import { Swipeable } from 'react-swipeable';
import { arrow } from '../../util/icons';
import { Image } from '../../types/types';
import { Slide, SliderNav, SliderButtonWrapper, Dots, Dot, PrevNextButton } from './styles';

interface Props {
  defaultIndex?: number;
  slides?: Image[];
  large?: boolean;
}

export const Slider: React.FunctionComponent<Props> = ({
  defaultIndex = 0,
  slides = [],
  large,
}) => {
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
    <Swipeable
      onSwipedLeft={() => changeIndex(index - 1)}
      onSwipedRight={() => changeIndex(index + 1)}
    >
      <Slide imageUrl={currentSlide.url} role="image" aria-label={currentSlide.alt} large={large}>
        {slides.length > 0 && (
          <SliderNav>
            <SliderButtonWrapper>
              <PrevNextButton
                aria-label="Go to previous slide"
                onClick={e => {
                  e.preventDefault();
                  changeIndex(index - 1);
                }}
              >
                {arrow}
              </PrevNextButton>
              <PrevNextButton
                next
                aria-label="Go to next slide"
                onClick={e => {
                  e.preventDefault();
                  changeIndex(index + 1);
                }}
              >
                {arrow}
              </PrevNextButton>
            </SliderButtonWrapper>
            <Dots>
              {slides.map((_, k) => (
                <Dot key={k} active={k === index} />
              ))}
            </Dots>
          </SliderNav>
        )}
      </Slide>
    </Swipeable>
  );
};

export default Slider;
