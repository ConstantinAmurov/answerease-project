
# AnswerEase Project



## Project Overview

AnswerEase Project is knowledge-sharing community where students put their heads together to crack their toughest homework questions.
Based on specific topics, users can ask a question, respond to a question and like the answers, for which they receive points that can be exchanged in future for some Merchandise from university. 

## Project Overview
UI Design made in Figma ( by Polina Alekseeva): 
https://www.figma.com/file/b2CbIHm4t6oUHcQa78X0qN/AnswerEase-Final?node-id=0%3A1

## Technologies
Front-end:
- React.JS
- Redux
- React Query
- Tailwind
Back-end:
- Laravel
- Docker
- nginx


## Software Requirements

-   Node.js **8+**

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/maitraysuthar/react-redux-saga-boilerplate.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.
5.  As well , the Back-end application should be running in the background, locally or hosted somewhere.


## New Module

All the modules of the project will be in `/src/modules/` folder, If you need to add more modules to the project just create a new folder in the same folder.


##### Root module:
Module's root module folder is `/src/modules/app/` it contains main **Routes file (`routes.js`)**, **Reducer file (`mainReducer.js`)** and **Saga file (`mainSaga.js`)**. You will need to add your every component,reducer & saga to make your module work.

