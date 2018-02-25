import React from 'react';
import { Item, Comment, Card, Table, Message, TextArea, Form, Breadcrumb, Step, Grid, Rail, List, Icon, Label, Menu, Input, Image, Segment, Button, Container, Divider } from 'semantic-ui-react'


export default class ButtonTest extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render(){
		const { activeItem } = this.state

		return(
		
			<div>
				<br />
				<Button>Click Here</Button>
	  	
	  			<br/>
			    <Container textAlign='left'>
			      Left Aligned
			    </Container>
			    <Container textAlign='center'>
			      Center Aligned
			    </Container>
			    <Container textAlign='right'>
			      Right Aligned
			    </Container>
			    <Container textAlign='justified'>
			      <b>Justified</b>
			      <Divider />
			      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
			      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
			    </Container>

			    <br />
				  <Segment padded>
				    <Button primary fluid>Login</Button>
				    <Divider horizontal>Or</Divider>
				    <Button secondary fluid>Sign Up Now</Button>
				  </Segment>

				  <br />
				  <Image src='/assets/images/wireframe/white-image.png' size='medium' bordered />

				  <br/>
				  <Input loading placeholder='Search...' />

				  <br />
				  <Menu compact>
				    <Menu.Item as='a'>
				      <Icon name='mail' /> Messages
				      <Label color='red' floating>22</Label>
				    </Menu.Item>
				    <Menu.Item as='a'>
				      <Icon name='users' /> Friends
				      <Label color='teal' floating>22</Label>
				    </Menu.Item>
				  </Menu>

				  <br />
				  <List ordered>
				    <List.Item as='a'>Getting Started</List.Item>
				    <List.Item as='a'>Introduction</List.Item>
				    <List.Item>
				      <a>Languages</a>
				      <List.List>
				        <List.Item as='a'>HTML</List.Item>
				        <List.Item as='a'>Javascript</List.Item>
				        <List.Item as='a'>CSS</List.Item>
				      </List.List>
				    </List.Item>
				    <List.Item as='a'>Review</List.Item>
				  </List>


				  <br />
				  <Grid centered columns={3}>
				    <Grid.Column>
				      <Segment>
				        <Image src='/assets/images/wireframe/paragraph.png' />

				        <Rail position='left'>
				          <Segment>Left Rail Content</Segment>
				        </Rail>

				        <Rail position='right'>
				          <Segment>Right Rail Content</Segment>
				        </Rail>
				      </Segment>
				    </Grid.Column>
				  </Grid>


				  <br/>
				  <Step.Group ordered>
				    <Step completed>
				      <Step.Content>
				        <Step.Title>Shipping</Step.Title>
				        <Step.Description>Choose your shipping options</Step.Description>
				      </Step.Content>
				    </Step>

				    <Step completed>
				      <Step.Content>
				        <Step.Title>Billing</Step.Title>
				        <Step.Description>Enter billing information</Step.Description>
				      </Step.Content>
				    </Step>

				    <Step active>
				      <Step.Content>
				        <Step.Title>Confirm Order</Step.Title>
				      </Step.Content>
				    </Step>
				  </Step.Group>


				  <br />
				  <Breadcrumb>
				    <Breadcrumb.Section link>Home</Breadcrumb.Section>
				    <Breadcrumb.Divider />
				    <Breadcrumb.Section link>Store</Breadcrumb.Section>
				    <Breadcrumb.Divider />
				    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
				  </Breadcrumb>


				  <br />
				  <Form>
				    <Form.Group widths='equal'>
				      <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' />
				      <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' />
				    </Form.Group>
				    <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion' placeholder='Opinion' />
				    <Form.Field id='form-button-control-public' control={Button} content='Confirm' label='Label with htmlFor' />
				  </Form>


				  <br />
			  <Grid columns='equal'>
			    <Grid.Row>
			      <Grid.Column>
			        <Segment>1</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>2</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>3</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>4</Segment>
			      </Grid.Column>
			    </Grid.Row>
			    <Grid.Row>
			      <Grid.Column>
			        <Segment>1</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>2</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>3</Segment>
			      </Grid.Column>
			    </Grid.Row>
			    <Grid.Row>
			      <Grid.Column>
			        <Segment>1</Segment>
			      </Grid.Column>
			      <Grid.Column>
			        <Segment>2</Segment>
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>


			  <br />
		      <Menu>
		        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
		          Browse
		        </Menu.Item>

		        <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
		          Submit
		        </Menu.Item>

		        <Menu.Menu position='right'>
		          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
		           Sign Up
		          </Menu.Item>

		          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
		           Help
		          </Menu.Item>
		        </Menu.Menu>
		      </Menu>


		      <br />
			  <Message>
			    <Message.Header>New Site Features</Message.Header>
			    <Message.List>
			      <Message.Item>You can now have cover images on blog pages</Message.Item>
			      <Message.Item>Drafts will now auto-save while writing</Message.Item>
			    </Message.List>
			  </Message>

			  <br/>
			  <Table celled striped>
			    <Table.Header>
			      <Table.Row>
			        <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>

			    <Table.Body>
			      <Table.Row>
			        <Table.Cell collapsing>
			          <Icon name='folder' /> node_modules
			        </Table.Cell>
			        <Table.Cell>Initial commit</Table.Cell>
			        <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Icon name='folder' /> test
			        </Table.Cell>
			        <Table.Cell>Initial commit</Table.Cell>
			        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Icon name='folder' /> build
			        </Table.Cell>
			        <Table.Cell>Initial commit</Table.Cell>
			        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Icon name='file outline' /> package.json
			        </Table.Cell>
			        <Table.Cell>Initial commit</Table.Cell>
			        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Icon name='file outline' /> Gruntfile.js
			        </Table.Cell>
			        <Table.Cell>Initial commit</Table.Cell>
			        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
			      </Table.Row>
			    </Table.Body>
			  </Table>


			  <Card>
			    <Image src='/assets/images/avatar/large/matthew.png' />
			    <Card.Content>
			      <Card.Header>
			        Matthew
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          Joined in 2015
			        </span>
			      </Card.Meta>
			      <Card.Description>
			        Matthew is a musician living in Nashville.
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='user' />
			        22 Friends
			      </a>
			    </Card.Content>
			  </Card>


			  <br/>
			  <Comment.Group>
			    <Comment>
			      <Comment.Avatar as='a' src='/assets/images/avatar/small/stevie.jpg' />
			      <Comment.Content>
			        <Comment.Author>Stevie Feliciano</Comment.Author>
			        <Comment.Metadata>
			          <div>2 days ago</div>
			          <div>
			            <Icon name='star' />
			            5 Faves
			          </div>
			        </Comment.Metadata>
			        <Comment.Text>
			          Hey guys, I hope this example comment is helping you read this documentation.
			        </Comment.Text>
			      </Comment.Content>
			    </Comment>
			  </Comment.Group>



			  <br/>
			  <Item.Group>
			    <Item>
			      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

			      <Item.Content>
			        <Item.Header as='a'>Header</Item.Header>
			        <Item.Meta>Description</Item.Meta>
			        <Item.Description>
			          <Image src='/assets/images/wireframe/short-paragraph.png' />
			        </Item.Description>
			        <Item.Extra>Additional Details</Item.Extra>
			      </Item.Content>
			    </Item>

			    <Item>
			      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

			      <Item.Content>
			        <Item.Header as='a'>Header</Item.Header>
			        <Item.Meta>Description</Item.Meta>
			        <Item.Description>
			          <Image src='/assets/images/wireframe/short-paragraph.png' />
			        </Item.Description>
			        <Item.Extra>Additional Details</Item.Extra>
			      </Item.Content>
			    </Item>
			  </Item.Group>

			  </div>

		)
	}
}