import {Container, Title, Puntos} from './global.styles'
import {GridElement, GridTemplates} from './Templates.styles'

function Templates({language}) {
  return (
      <Container id="templates" >
            <Title>
                <Puntos/>{
                    language === 'english' ?
                    (<>
                    <h1>Web Templates<span>.</span> </h1>
                    </>)
                    :
                    (<>
                        <h1>Diseños web<span>.</span> </h1>
                    </>)
                }
                
            </Title>
            <GridTemplates>
                <GridElement src="/template1.png" target="_blank" href="https://quirky-stonebraker-00fb87.netlify.app/" rel="noopener noreferrer" />
                <GridElement src="/template2.png" target="_blank" href="https://flamboyant-goldberg-896638.netlify.app/" rel="noopener noreferrer" />
                <GridElement src="/template3.png" target="_blank" href="https://laughing-mahavira-d20c32.netlify.app/" rel="noopener noreferrer" />
                </GridTemplates >
      </Container>
  )
}

export default Templates