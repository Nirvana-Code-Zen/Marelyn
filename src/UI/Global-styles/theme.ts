interface Theme {
  colors: {
    primary: string;
    primary_complement: string;
    primary_second_complement: string;
    secondary: string;
    secondary_complement: string;
    error: string;
    white: string;
    hover_search: string;
    texts: string;
    texts_secondary: string;
    hover_tabs: string;
  };
  fonts: {
    texts_titles: string;
  };
  fonts_sizes: {
    titles: string;
    subtitles: string;
    medio_titles: string;
    small_subtitles: string;
    texts: string;
    medium_text: string;
    button_text: string;
    small_texts: string;
    extra_small_texts: string;
  };
  width_sizing: {
    [key: string]: string; 
  };
  width_porcentages: {
    [key: string]: string;
};
width_creen:{
  [key:string]: string;
}
}


export const theme: Theme = {
  colors: {
    primary: '#d4a413',
    primary_complement: '#efb810',
    primary_second_complement: '#f3c332',
    secondary: '#155db1',
    secondary_complement: '#2196f3',
    error: '#D50000',
    white: '#ffffff',
    hover_search: '#efb810',
    texts: '#999999',
    texts_secondary: '#0B0A59',
    hover_tabs: '#E3D99F'
  },
  fonts: {
    texts_titles: '"Didact Gothic", sans-serif'
  },
  fonts_sizes: {
    titles: '30.12rem', /* 50px */
    subtitles: '2.5rem', /* 40px */
    medio_titles: '1.87rem', /* 30px */
    small_subtitles: '1.25rem', /* 20px */
    texts: '1.18rem', /* 19px */
    medium_text: '1.06rem', /* 17px */
    button_text: '1rem', /* `16px */
    small_texts: '0.93rem', /* 15px */
    extra_small_texts: '0.87rem'/* 14px */
  },
  width_sizing: {
    wTen: '0.625rem', /* 10px */
    wTwelve: '0.75rem', /* 12px */
    Fourteen: '0.875rem', /* 14px */
    wFourteen: '1rem', /* 16px */
    wTwenty: '1.25rem', /* 20px */
    wTwentyFour: '1.5rem', /* 24px */
    wTwentyEight: '1.75rem', /* 28//px */
    wThirtyTwo: '36rem', /* 32px */
    wSixty: '160px',
    wThirteenthTundred: '300px'
  },
  width_porcentages: {
    wOneSixth: '16%',
    wOneFifth: '20%',
    wQuarter: '25%',
    wOneThrid: '33.333333%',
    wTwoFifths: '40%',
    wMedium: '50%',
    wTreeFifths: '60%',
    wTwoThrid: '66.666667%',
    wFourFifths: '80%',
    wTreeQuarters: '75%',
    wFiveSixths: '83.333333%',
    wElevenTwelfth: '91.666667%',
    wComplet: '100%'
  },
  width_creen: {
    wScreen: '100vw',
    wMin: 'min-content',
    wMax: 'max-content',
    wFit: 'fit-content',
    minW0: '0px'
  }
}

