import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import PostList from './components/PostList'
import Title from './components/Title'

const themeLight = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
})

const App = () => (
  <>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Title />
      <PostList />
    </ThemeProvider>

  </>
)

export default App
