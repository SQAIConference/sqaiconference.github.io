import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Committees from './pages/Committees';
import CallForPapers from './pages/CallForPapers';
import Program from './pages/Program';
import Registration from './pages/Registration';
import Sponsors from './pages/Sponsors';
import PastConferences from './pages/PastConferences';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0366d6',
    },
    secondary: {
      main: '#f8f9fa',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#333333',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/cfp" element={<CallForPapers />} />
              <Route path="/program" element={<Program />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/past" element={<PastConferences />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
