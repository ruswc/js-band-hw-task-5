# Homework 4
## js-band-hw-task-4

> Our PoC looks nice for the client and we should start preparation for the project development. We should define quality processes and tools and prepare our project for effective development.


### Objectives
- Add eslint to our project
- Add commitizen tool to improve commit messages and log history
- Add and setup Jest for implementing autotest
- Add Webpack config for dev prod and common
- Describe application launch process and commands what we have
- Describe structure of our project

**Implemented:**
- "Eslint" added
- "Commitizen" added. The repository is made "commitizen friendly"
- "Jest' added. Two test tests have been written (first - successful, second - unsuccessful). Test folder is located in '/src/test'. 
- Added Webpack config for dev prod and basic
- Described application launch process and commands what we have (below)
- Described structure of our project

#### **To run Eslint:**
- run the command *eslint [ folder / file ]* in the terminal
- to fix the errors automatically, add the *--fix* flag

**example:**
> eslint src --fix

**To run commit via *commitizen*:**
- run the command *git cz* in the terminal
- Following the prompts in the terminal and using the cursor keys, select the settings you want for the future commit
- Following the prompts in the terminal add a description of the fields that you think are necessary
- After the changes the following commands:
    - git add .
    - git-cz
    - git push

**example:**
```
 git add .
 git-cz
 git push
```


![The appearance of the terminal when working with commitizen](https://github.com/ruswc/js-band-hw-task-4/blob/master/gitcz.png)

#### **To run *Jest*:**
- run the command *jest [ file name ]* in the terminal
- The test results are displayed in the console

**example:**
```
 jest three.test.js
```
![The appearance of the terminal when working with jest](https://github.com/ruswc/js-band-hw-task-4/blob/master/jesttest.png)

**The application can be checked at:** https://ruswc.github.io/js-band-hw-task-4/public/index.html

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
