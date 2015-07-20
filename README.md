# dynamic-tree

The goal is to render a tree of objects.

Example of the structure:
- Element #1
- Element #2
- Element #3
  - Child #1 of element #3
    - Subchild
    - Another subchild
    - Another subchild
    - Last subchild
  - Child #2 of element #3
    - Subchild
    - Subchild
    - Subchild
    - Subchild
  - Child #3 of element #3
    - Subchild
    - Subchild

##Features
- Two solutions for the task: iterative and recursive
- User is able to add/edit/delete child objects anywhere in the tree 
- User is able to add subchildren infinitely.
- It is possible to store the state in local storage.
- It is possible to read the state from local storage
- OOP aproach
- Loose coupling code
- Code is covered with Unit tests run by Karma

##Getting started
This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

To setup:

1) Install yo, grunt-cli, bower, generator-angular and generator-karma:
npm install -g grunt-cli bower yo generator-karma generator-angular

2) Install all npm dependencies:
npm install

3) Install bower project dependencies:
bower install

4) To preview the project:
grunt serve

##What is used
- AngularJS 1.4.2
- Underscore 1.8.3
- Bootstrap 3.2
- Sass

## Testing

Running `grunt test` will run the unit tests with karma.
