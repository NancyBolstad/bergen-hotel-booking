import * as React from 'react';
import { Wrapper } from './styles';
import Typography from '../Typography';
import { ButtonInternal } from '../Button';

interface Props {
  title?: string;
  content?: string;
  buttonText?: string;
  redirectLink?: string;
}

export const Banner: React.FunctionComponent<Props> = ({
  title,
  content,
  buttonText,
  redirectLink,
}) => {
  return (
    <Wrapper>
      {!!title && <Typography variant="h1" element="h1" content={title} />}
      {!!content && <Typography variant="h2" element="p" isPrimaryColor content={content} />}
      {!!buttonText && redirectLink && (
        <ButtonInternal to={redirectLink} variant="primary" size="large">
          {buttonText}
        </ButtonInternal>
      )}
    </Wrapper>
  );
};

export default Banner;
