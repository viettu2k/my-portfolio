import React from "react";
import {
  Card,
  Grid,
  Button,
  Segment,
  Container,
  Image,
  Icon,
} from "semantic-ui-react";

export default function ProjectCard() {
  return (
    <div className="project-container">
      <Container textAlign="center">
        <h2>MY EXPERIENCE</h2>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Segment>
              <Card.Group>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Card.Header>Infinity Scroll</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/infinity-scroll"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://viettu2k.github.io/infinity-scroll/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Card.Header>Joke Teller</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/joke-teller"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://viettu2k.github.io/joke-teller/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Card.Header>Quote Generator</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/quote-generator"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://viettu2k.github.io/quote-generator/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Card.Header>Music Player</Card.Header>
                    <Card.Meta>Vanilla Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/music-player"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://musing-poincare-f6c685.netlify.app/"
                        >
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
            <Segment>
              <Card.Group>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="data:image/png;base64,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"
                    />
                    <Card.Header>Crown Clothing</Card.Header>
                    <Card.Meta>React Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/crown-clothing"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://crown-live-viettu.herokuapp.com/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="data:image/png;base64,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"
                    />
                    <Card.Header>Github Search Users</Card.Header>
                    <Card.Meta>React Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/github-search-users"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://viettu2k-github-search-users.netlify.app/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="data:image/png;base64,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"
                    />
                    <Card.Header>Comfy Sloth</Card.Header>
                    <Card.Meta>React Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/comfy-sloth"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://viettu2k-comfy-sloth-store.netlify.app/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="data:image/png;base64,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"
                    />
                    <Card.Header>Quiz</Card.Header>
                    <Card.Meta>React Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/quiz"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://keen-shaw-e1cd5d.netlify.app/"
                        >
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
            <Segment>
              <Card.Group>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://www.pngkit.com/png/detail/470-4704009_nodejs-rust-logo-node-js.png"
                    />
                    <Card.Header>Node Farm</Card.Header>
                    <Card.Meta>Node Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/node-farm"
                        >
                          Github
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://www.pngkit.com/png/detail/470-4704009_nodejs-rust-logo-node-js.png"
                    />
                    <Card.Header>Simple Social Network API</Card.Header>
                    <Card.Meta>Node Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/social-network-api"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://evening-earth-21357.herokuapp.com/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://www.pngkit.com/png/detail/470-4704009_nodejs-rust-logo-node-js.png"
                    />
                    <Card.Header>Natours API</Card.Header>
                    <Card.Meta>Node Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/natours-api"
                        >
                          Github
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://www.pngkit.com/png/detail/470-4704009_nodejs-rust-logo-node-js.png"
                    />
                    <Card.Header>Smart Brain API</Card.Header>
                    <Card.Meta>Node Project</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/viettu2k/smart-brain-api"
                        >
                          Github
                        </a>
                      </Button>
                      <Button basic color="blue">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://guarded-escarpment-87367.herokuapp.com/"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Card centered className="project-card">
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered className="project-card">
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
