import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
    , document.getElementById('root'));
