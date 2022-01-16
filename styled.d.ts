// import original module declarations
import 'styled-components';

import Theme from './src/styles/theme';

type MyTheme = typeof Theme;
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
