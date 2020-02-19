import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css'

// Components
import Header from './components/Header';
import TopicList from './components/TopicList';
import NewTopicFormControl from './components/NewTopicFormControl';
import ConflictResolution from './components/ConflictResolution';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTopicList: []
    }
    this.handleAddingNewTopic = this.handleAddingNewTopic.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleAddingNewTopic(newTopic) {
    this.setState({
      masterTopicList: [...this.state.masterTopicList, newTopic]
    });
  }

  handleVote = (id, modifier) => {
    console.log('id: ', id);
    console.log('modifier: ', modifier);
    let ourList = this.state.masterTopicList.slice()
    ourList.forEach((topic) => {
      if (topic.id == id) {
        topic.votes += modifier;
      }
    })
    this.setState({
      masterTopicList: ourList
    });
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>(<TopicList
              topicList={this.state.masterTopicList}
              onVote={this.handleVote}/> )} />
            <Route path='/conflictresolution' component={ConflictResolution}></Route>
            <Route exact path='/newtopic' render={() => (
                <NewTopicFormControl
                  onNewTopicCreation={this.handleAddingNewTopic} />
              )}/>
            </Switch>
          </div>
        );
      }
    }
