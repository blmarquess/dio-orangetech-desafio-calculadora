import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    properties: {
      m: string;
      mb: string;
      mt: string;
      mx: string;
      my: string;
      mr: string;
      ml: string;
      p: string;
      pb: string;
      pt: string;
      px: string;
      py: string;
      pr: string;
      pl: string;
    };
  }
}
