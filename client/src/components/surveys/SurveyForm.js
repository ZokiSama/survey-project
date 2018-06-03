// SurveyForm visar en from för en användare att skiva in data
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h4>Title</h4>
        <Field type="text" name="surveyTitle" component="input" />
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
