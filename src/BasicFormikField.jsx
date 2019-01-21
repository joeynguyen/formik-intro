import React, { Component } from 'react';
import { Field, ErrorMessage, connect } from 'formik';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

class BasicFormikField extends Component {
  getFieldClasses = key => {
    return classNames('form-group', 'has-feedback', {
      'has-error': this.shouldDisplayError(key),
      'has-success': this.shouldDisplaySuccess(key),
    });
  };

  getIconClasses = (key) => {
    return classNames(
      'form-control-feedback',
      'glyphicon',
      {
        'glyphicon-remove': this.shouldDisplayError(key),
        'glyphicon-ok': this.shouldDisplaySuccess(key),
      },
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
        {this.shouldDisplayError(fieldKey) ? (
          <ErrorMessage
            name={fieldKey}
            component="span"
            className="help-block"
          />
        ) : null}
      </div>
    );
  }
}

export default connect(BasicFormikField);
