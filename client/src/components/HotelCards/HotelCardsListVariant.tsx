import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Section, Wrapper, SectionTitle, More } from './styles';
import { ButtonInternal } from '../Button/Button';
import { IColors } from '../../types/theme';
import { WidthConstraints, VerticalSpacer, HorizontalSpacer } from '../Layout';
import { HotelDetails } from '../../types/response';
import HotelCardVariant from './HotelCardVariant';
import { Flex } from '../Flex';
import PaginateButtons from '../PaginateButtons';
import usePagination from '../../hooks/usePagination';

export interface Props {
  sectionTitle?: string;
  subtitle?: string;
  backgroundColor?: keyof IColors;
  list?: HotelDetails[];
  ctaText?: string;
  ctaUrl?: string;
  hasPagination?: boolean;
}

export const HotelCardsList: React.FunctionComponent<Props> = ({
  sectionTitle,
  ctaText,
  ctaUrl,
  list,
  backgroundColor,
  hasPagination,
}) => {
  const { number = '1' } = useParams();
  const maxPage = Math.ceil(list ? list.length / 5 : 0);
  const currentPage = parseInt(number) <= maxPage && parseInt(number) > 0 ? parseInt(number) : 1;
  const { next, prev, jump, currentData } = usePagination(
    list ? list : [],
    5,
    currentPage,
    maxPage,
  );

  console.log(list);
  console.log(currentPage);
  console.log(currentData());

  return (
    <Section backgroundColor={backgroundColor}>
      <VerticalSpacer>
        <HorizontalSpacer>
          <WidthConstraints size="large">
            <Wrapper>
              {!!sectionTitle && <SectionTitle element="h2" variant="h2" content={sectionTitle} />}
              <Flex direction="column">
                {(currentData() || []).map((card, index) => (
                  <HotelCardVariant card={card} />
                ))}
                {!!hasPagination && (
                  <PaginateButtons
                    totalPages={maxPage}
                    preHandler={prev}
                    nextHandler={next}
                    jumpHandler={jump}
                    displayNext={currentPage < maxPage}
                    displayPrev={currentPage > 1}
                    currentPage={currentPage}
                  />
                )}
              </Flex>
              {!!ctaText && !!ctaUrl && (
                <More>
                  <ButtonInternal to={ctaUrl} size="medium" variant="secondary">
                    {ctaText}
                  </ButtonInternal>
                </More>
              )}
            </Wrapper>
          </WidthConstraints>
        </HorizontalSpacer>
      </VerticalSpacer>
    </Section>
  );
};

export default HotelCardsList;
