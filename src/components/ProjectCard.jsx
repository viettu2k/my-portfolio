import React from "react";
import { Card, Grid, Button, Segment, Container } from "semantic-ui-react";

export default function ProjectCard() {
  return (
    <div>
      <Container textAlign="center">
        <Grid stackable columns={4}>
          <Grid.Column>
            <Segment>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Infinity Scroll</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a href="https://github.com/viettu2k/infinity-scroll">
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a href="https://viettu2k.github.io/infinity-scroll/">
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Joke Teller</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a href="https://github.com/viettu2k/joke-teller">
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a href="https://viettu2k.github.io/joke-teller/">
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Quote Generator</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a href="https://github.com/viettu2k/quote-generator">
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a href="https://viettu2k.github.io/quote-generator/">
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Music Player</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a href="https://github.com/viettu2k/music-player">
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a href="https://musing-poincare-f6c685.netlify.app/">
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
