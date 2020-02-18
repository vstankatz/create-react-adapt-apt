import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import TopicList from './components/TopicList';
import NewTopicForm from './components/NewTopicForm';
import NewTopicFormControl from './components/NewTopicFormControl';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTopicList: []
    }
    this.handleAddingNewTopic = this.handleAddingNewTopic.bind(this);
  }

  handleAddingNewTopic(newTopic) {
    this.setState({
      masterTopicList: [...this.state.masterTopicList, newTopic]
    });
  }
  render() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' render={()=>(<TopicList topicList={this.state.masterTopicList} /> )} />
    <Route exact path='/newtopic' render={() => (
      <NewTopicForm
        onNewTopicCreation={this.handleAddingNewTopic} />
    )}/>
    </Switch>
    </div>
  );
}
}
