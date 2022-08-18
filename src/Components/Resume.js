import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// import { Page } from 'react-pdf'
import SWResume from '../assets/Shay Wacker Resume.pdf'

const Resume = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header className='header' as='h1'>Résumé</Header>
            <Document file={SWResume}>
              <Page pageNumber={1} />
            </Document>
            <button className="button">
    <a className="button" href="../assets/Shay Wacker Resume.pdf" download = "Shay Wacker Resume.pdf">
      Download Resume
    </a>
</button>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>            
        </Grid.Row>
      </Grid>
    </Container>

  )
}
 export default Resume