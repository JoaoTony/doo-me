import { colors } from '../../utils/colors';

const colorsSelector = {
  MUST: colors.red01,
  MAYBE: colors.blue01,
  IFTIME: colors.orange01,
};

export const witchColor = (relevance: 'MUST' | 'MAYBE' | 'IFTIME') => colorsSelector[relevance];
