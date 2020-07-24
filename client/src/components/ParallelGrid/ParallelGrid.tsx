import * as React from 'react';
import styled from 'styled-components';
import { HotelDetails } from '../../types/response';
import { HotelCard } from '../HotelCards';
import useResponsiveWindowSize from '../../hooks/useResponsiveWindowSize';

interface ParallelGridList {
  list: HotelDetails[];
  verticalTransformPixel?: string;
}

export const Grid = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 30px;
  margin-top: 60px;
  margin-bottom: 100px;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GridColumn = styled.div`
  width: 100%;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    flex: 1;
    width: 50%;
    padding: 0 40px;
  }
`;

const ParallelGrid: React.FunctionComponent<ParallelGridList> = ({ list }) => {
  const { isMobile } = useResponsiveWindowSize();
  return (
    <Grid>
      <GridColumn>
        {(list || []).map(
          (item, index) =>
            index % 2 === 0 && (
              <HotelCard key={index} card={item} verticalTransform={!isMobile} parallel />
            ),
        )}
      </GridColumn>
      <GridColumn>
        {(list || []).map(
          (item, index) => index % 2 === 1 && <HotelCard key={index} card={item} parallel />,
        )}
      </GridColumn>
    </Grid>
  );
};

export default ParallelGrid;
