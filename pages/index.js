import { Page, Text, Grid, Button } from '@geist-ui/react'

export default function Home() {
  return (
    <Page dotBackdrop size="mini">
      <Page.Header>
        <Text h2>React Application with Geist UI</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> !
      </Text>
    <Grid.Container gap={2}>
  <Grid><Button auto type="secondary">Secondary</Button></Grid>
  <Grid><Button auto type="success">Success</Button></Grid>
  <Grid><Button auto type="warning">Warning</Button></Grid>
  <Grid><Button auto type="error">Error</Button></Grid>
  <Grid><Button auto type="abort">Abort</Button></Grid>
  <Grid><Button auto type="secondary-light">Secondary Light</Button></Grid>
  <Grid><Button auto type="success-light">Success Light</Button></Grid>
  <Grid><Button auto type="warning-light">Warning Light</Button></Grid>
  <Grid><Button auto type="error-light">Error Light</Button></Grid>
</Grid.Container>
    </Page>
  )
}
