import React, { Component } from 'react';
import { Field, ErrorMessage, connect } from 'formik';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

class BasicFormikField extends Component {
  // https://getbootstrap.com/docs/3.3/css/#forms-control-validation
  getFieldClasses = key => {
    return classNames('form-group', 'has-feedback', {
      'has-error': this.shouldDisplayError(key),
      'has-success': this.shouldDisplaySuccess(key),
    });
  };

  getIconClasses = (key) => {
    return classNames(
      'glyphicon',
      {
        'glyphicon-remove': this.shouldDisplayError(key),
        'glyphicon-ok': this.shouldDisplaySuccess(key),
      },
      'form-control-feedback',
    );
  };

  shouldDisplayError = key => {
    const { touched, errors } = this.props.formik;

    return touched[key] && errors[key];
  };

  shouldDisplaySuccess = key => {
    const { touched, errors } = this.props.formik;

    return touched[key] && !errors[key];
  };

  render() {
    const {
      fieldKey,
      label,
      type,
    } = this.props;

    return (
      <div className={this.getFieldClasses(fieldKey)}>
        <label className="control-label" htmlFor={fieldKey}>
          {label}
        </label>
        <Field
          className="form-control"
          type={type || "text"}
          name={fieldKey}
        />
        <span
          className={this.getIconClasses(fieldKey)}
          aria-hidden="true"
        />
        <ErrorMessage
          name={fieldKey}
          component="span"
          className="help-block"
        />
      </div>
    );
  }
}

// https://jaredpalmer.com/formik/docs/api/connect
export default connect(BasicFormikField);
