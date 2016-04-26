// bootstrap needs jQuery to be global
const $ = window.jQuery = require('jquery');
require('bootstrap');
require('jquery-validation');

// NOTE: This is page specific and does not include any functions and therefore
// there is no reason to use JSDoc here or is there any good way to do so.

// wait until the document is loaded before running any javascript
$(document).ready(() => {
  'use strict';

  // global form validation options
  $('#loginForm').validate({
    highlight(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement(error, element) {
      error.insertAfter(element);
    },
  });

  // custom username validator
  $.validator.addMethod('username',
    (value, element) => this.optional(element) || !/\s/.test(value),
    'Spaces are not allowed in usernames.');

  // display name validation
  $('#displayName').rules('add', {
    required: true,
  });

  // username validation
  $('#username').rules('add', {
    required: true,
    username: true,
  });

  // email validation
  $('#email').rules('add', {
    required: true,
    email: true,
  });

  // email validation
  $('#email').rules('add', {
    required: true,
    email: true,
  });

  // confirmation email validation
  $('#confirmEmail').rules('add', {
    equalTo: '#email',
    messages: {
      equalTo: 'Emails do not match.',
    },
  });

  // password validation
  $('#password').rules('add', {
    required: true,
    minlength: 6,
    maxlength: 160,
  });

  // confirmation passowrd validation
  $('#confirmPassword').rules('add', {
    equalTo: '#password',
    messages: {
      equalTo: 'Passwords do not match.',
    },
  });
});
