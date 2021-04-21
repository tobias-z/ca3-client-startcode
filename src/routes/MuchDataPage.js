import * as React from "react"
import {fetchData} from "../apiUtils"
import {INFO} from "../settings"
import {Card, Container} from "react-bootstrap"

function MuchDataPage() {
  const [muchData, setMuchData] = React.useState()

  React.useEffect(() => {
    fetchData(INFO.FETCH_MANY)
      .then(data => setMuchData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <h1>Insane amount of data</h1>
      {muchData && (
        <>
          <Card>
            <Card.Header as="h5">Anime endpoint</Card.Header>
            <Card.Body>
              {Object.entries(muchData.anime).map(([key, value]) => (
                <Card.Text key={key}>
                  {key}: {value}
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Weather in Lyngby endpoint</Card.Header>
            <Card.Body>
              {Object.entries(muchData.weather).map(([key, value]) => (
                <Card.Text key={key}>
                  {key}: {value}
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Chuck endpoint</Card.Header>
            <Card.Body>
              <Card.Text>Joke: {muchData.chuck.value}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Joke endpoint</Card.Header>
            <Card.Body>
              <Card.Text>Joke: {muchData.joke.joke}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Beer endpoint</Card.Header>
            <Card.Body>
              {muchData.beers.map(beer => (
                <>
                  {Object.entries(beer).map(([key, value]) => (
                    <Card.Text key={key}>
                      {key}: {value}
                    </Card.Text>
                  ))}
                </>
              ))}
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  )
}

export default MuchDataPage
