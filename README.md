[![Build Status](https://travis-ci.org/joshmin98/itp404-final-project.svg?branch=master)](https://travis-ci.org/joshmin98/itp404-final-project)

# Final Project: Custom Image Classifier 

## Problem
There are several excellent pre-trained image classification models, and while many may be extensive with respect to how many labels (i.e. how many things they can classify) they have, no model is all-encompassing.

## Solution
My application will be a novel solution to this problem. I will use the ml5.js library's feature extraction capabilities to train a webcam image classifier based on user-defined labels in the browser.

## Audience
People interested in machine learning. Hot dog/not a hot dog enthusiasts.

## Project Requirements

### Routes
`/` Our index route where the main application sits.  
`/about` An 'about' route giving information about the project, as well as a form for the user to contact me via email.  
`/labeled-images`' A route containing a list of links to classified images. Each link corresponds to the label that that collection of images was assigned to.  
`/labeled-images/:id` A route containing a carousel of images correspoding to the label that the machine learning model assigned to them.  

### Requests
*POST* `/api/training-data:id` will create a new training label  
*PUT/PATCH* `/api/training-data:id` will add images to a training label  
*GET* `/api/label:id` will return all of the images associated with a given label  
*DELETE* `/api/label:id` will delete the label/images  

### Form Validation
The `/about` route will contain a form allowing the user to send me an email. It will have fields "comment", and "email". The "email" parameter must have a validly formatted email address.

### Component(s)
A reusable webcam component which leverages the Webcam.js library (there is an existing webcam component for Ember, however it does not work with the current version of Ember so I wrote this new one).  

### Addon(s)
Ember-Auto-Import for easy-importing externl libraries (Tensorflow.js) installed from npm  
Ember-Bootstrap for UI components
Ember-Window-Mock for testing webcam-related features

### Acceptance Tests
Tests for viewing our list of labels, viewing a single label, and creating and deleting a label.

### Integration (Component) Tests
Tests that our webcam component renders, creates a video stream when prompted for webcam access, and throws an error when webcam access is denied.