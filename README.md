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
`/` Our index route where the main application sits  
`/about` An 'about' route giving the project details  
`/more`' A route containing links to more toy machine-learning websites  
`/contact` A route  

### Requests
*POST* `/api/label:id` will create a new training label  
*PUT/PATCH* `/api/label:id` will rename a training label  
*GET* `/api/label:id` will return the current likelihood that the webcam image is like the label  
*DELETE* `/api/label:id` will delete the label  

### Form Validation
Creating a label will require submitting a form. The form will have a single field requiring the label name. The field may not be left blank.
The `/contact` route will contain a form allowing the user to send me an email. It will have fields "name", "comment", and "email". None of which may be left blank. The "email" parameter must have a validly formatted email address.

### Component(s)
TBD

### Addon(s)
Liquid Fire for route transition animations  
Ember-Notifyme for notifying the user when the training step has finished  
Ember-Auto-Import for easy-importing externl libraries (Tensorflow.js) installed from npm  

### Acceptance Tests
TBD

### Integration (Component) Tests
TBD
