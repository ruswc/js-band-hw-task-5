# Homework 5
## js-band-hw-task-5

> We prepared quality checking systems, like eslint, jest and now. We should prepare CI/CD setting for more effective delivery process. We are going to prepare it for our PoC. And additionally, we should start to write unit tests.


### Objectives
- add eslint to our project
- prepare travis-CI pipeline settings
- add installation step
- add linter step
- add automation tests step and add coverage report
- add deployment to the GitHub pages
- implement tests for our functionality

**Implemented:**
- "Eslint" added
- "Commitizen" added. The repository is made "commitizen friendly"
- "Jest' added. Two test tests have been written (first - successful, second - unsuccessful). Test folder is located in '/src/test'. 
- Added Webpack config for dev prod and basic
- Described application launch process and commands what we have (below)
- Described structure of our project


#### Structure of the project

    ├── config                              # Webpack configuration files
    ├── public                              # Compiled files
    ├── src                                 # Source files
    │   ├── css                             # result css
    │   ├── helpers                         # js common functions
    │   ├── img                             # images
    │   ├── js                              # js classes
    │   │   ├── controller                  # controller
    │   │   ├── models                      # models
    │   │   ├── view                        # view
    │   │   ├── common.js                   # Main js file
    │   ├── root                            # js config files
    │   ├── static                          # static files
    │   ├── styles                          # resource folder for css/scss
    │   │   ├── scss                        # scss files
    │   │   │   ├── modules                 # scss modules
    │   │   │   ├── utils                   # scss utils 
    │   │   │   ├── main.scss               # main scss file
    │   ├── test                            # Automated tests
    │   ├── index.html                      # Main html page
    │   ├── index.js                        # Main js file
    ├── .babelrc                            # Babel file
    ├── .eslintrc                           # Eslint file
    └── README.md
