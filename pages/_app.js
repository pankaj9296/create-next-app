import { GeistProvider, CssBaseline } from '@geist-ui/react'

function MyApp({ Component, pageProps }) {
  
  const myTheme = {
      "type": "light",
      "palette": {
        "success": "#6C63EE", // primary/theme color
        "link": "#6C63EE",
        "successLight": "#7b73ff",
        "successDark": "#574fdb",
      }
    }
  
  return (
    <GeistProvider themes={[myTheme]} themeType="light">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
