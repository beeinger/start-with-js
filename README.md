# start-with-js

An easy crash-course from scratch 🦋

## Prerequisites ☑ - What do you need?

- basic English
- any computer
- a browser (preferably Chrome)
- a code editor (preferably VSCode)
- access to console terminal
- will

If you don't have experience with code editors or coding, then for your own good please use the preferred programs.

This course is best for MacOs or Windows users - Linux users need to google more :c

## Intro ℹ️

Anyone can code.
Welcome to **'how to start your adventure'**.

## First lesson 🔮

If you encounter any error along the route - learn to read them - search for keywords/error messages/titles and Google them for a solution.

^ This simple lesson is 50% of programming

## Now for some console skills

Console is the core of your device - from the console you can do literally anything.

But first you need to know some basics.

- In console you are always somewhere and what I mean by that is that you are always in some folder
- Mind the path you are currently in!
- See the list of folders/files in the directory

  ```bash
  ls
  ```

  **_Tip: To see everything - including the hidden files/folders run this command_**

  ```bash
  ls -la
  ```

  **_Btw: the "-la" is called a flag, flags can be anything this is just an example, flags are determined by the author of some command so if you will create your own one day you can call it -cat or smthn_**

- Moving around

  ```bash
  cd
  ```

  this simply stands for "Change Directory"

  Commands can take arguments - for example this one does nothing on it's own, but lets assume you are now in /Desktop folder and you want to go to the /Desktop/Projects folder that is located inside Desktop, the command to do this would be

  ```bash
  cd Projects
  ```

  Now lets assume you are in /Desktop/Projects and you want to go up to the parent directory - Desktop, the command to do this would be

  ```bash
  cd ..
  ```

- Making folders

  ```bash
  mkdir NAME
  ```

  mkdir stands for "MaKe DIRectory"

  directory = folder

  for example this command wil create Projects folder

  ```bash
  mkdir Projects
  ```

- Removing files

  ***

  **_Doesn't work on Windows!_**

  On Windows the easiest way is to run

  ```bash
  explorer.exe .
  ```

  and delete what you need to delete

  ***

  to remove file run:

  ```bash
  rm NAME
  ```

  to remove folder run

  ```bash
  rm -rf NAME
  ```

  this means "recursive and force" - when you try to delete a folder without the -rf flag it wont work, folders including other stuff need to be deleted recursively.

  "." in console very often mean "everything" or "all" for example when you run the command below you will remove everything inside the directory you are running this command in

  **_Watch out!_**

  ```bash
  rm .
  ```

## Setup ⚙️

- If you don't already have it install [Chrome](https://support.google.com/chrome/answer/95346)
- Install [VSCode](https://code.visualstudio.com/)
- Open your console terminal

  - MacOs - open Terminal app
  - Windows - open PowerShell as Administrator

    **_Tip: right click the Windows icon_**

- Install a Package Manager for your system

  Packages are projects done by other people that they have shared and you can use. There is a lot of packages and their nature can be anything from a crucial tool for programmers to displaying cats in console terminal.

  You are now going to install a package manager - a package that knows the instructions for installing a great number of packages that would be otherwise a pain to install separately.

  Imagine going on 30 pages one by one, looking for and then executing instructions to hopefully install the package correctly - package manager does that for you.

  ```
  this is a code snippet
  ```

  **_Tip: When you encounter text in a field looking as the one above it means it's a 'code snippet' - it can either be a command to execute in console or a part of code._**

  - MacOs: install [Homebrew](https://brew.sh/)

    - Execute the command below in the Terminal

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

  - Windows: install [Chocolatey](https://chocolatey.org/)

    - Execute the command below in PowerShell

      ```bash
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
      ```

    Your package manager is now installed and it can be accessed by a command -

    ```bash
    brew
    ```

    for Brew and

    ```bash
    choco
    ```

    for Chocolatey

- Install [GIT](https://git-scm.com/)

  In a nutshell Git is a version control system - this means that it is responsible for how we manage and develop our repositories.

  Repositories are basically folders containing projects - for example the file you are reading right now is a <span>README.md</span> inside a repository named start-with-js.

  Imagine you are working on your project with colleagues and there is a file containing some code that needs some work. There are two tasks - yours and your colleague's - you both work on you own task and it's great, but what happens when you want to combine your work?

  If you simply work on the same file you will fight with each other and overwrite changes made by the other person. This is where Git comes into play.

  Also as Git is used to collaborate it highly integrated with the internet - there are many providers (like Github, Bitbucket or Gitlab) who let you can keep your code online and cooperate easily.

  For the purpose of this course we will use Github but the git package is universal and can be used with any provider so lets start by installing it.

  - MacOS

  ```bash
  brew install git
  ```

  - Windows

  ```bash
  choco install git
  ```

  ***

  Git is now installed and you can use it using this command

  ```bash
  git
  ```

- Install [NodeJS](https://nodejs.org/en/)

  JavaScript is most well-known as the scripting language for Web pages but it can also be used only in non-browser environments.

  > "Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/)."

    <div style="text-align: right">~ <a href="https://nodejs.org/en/">NodeJS home page</a></div>

  In this course we will use the non-browser environment as it will teach you more about coding itself rather than coding purely in JavaScript.

  - MacOS

  ```bash
  brew install node
  ```

  - Windows

  ```bash
  choco install node
  ```

  ***

  Nodejs is now installed and you can use it using this command

  ```bash
  node
  ```

- Install [Yarn](https://yarnpkg.com/)

  Remember how we installed brew/choco?

  This was a package manager for your console - it's managing packages made for your console.

  Yarn is also a package manager but this time it's a package manager for JavaScript packages.

  Javascript packages are more unified than most other packages and you can find practically all of them on [NPM](https://www.npmjs.com/).

  Npm was the original package manager for JavaScript and it's a place where all the packages are held online but yarn is a newer solution that is faster and more efficient in almost every way.

  ***

  **_Btw: You have npm installed on your device right now. It is being automatically installed when you install node._**

  **_The command to use it is this but better stick to yarn_**

  ```bash
  npm
  ```

  ***

  - MacOS

  ```bash
  brew install yarn
  ```

  - Windows

  ```bash
  choco install yarn
  ```

---

Nodejs is now installed and you can use it using this command

```bash
yarn
```

---

**_Fun fact: We could have just installed all of the above in one command but I wanted to explain them separately and allow you to get used to the console_** 😝

The command would simply be this

```bash
brew install git node yarn
```

or

```bash
choco install git node yarn
```

## Enough! Lets jump into code 😎

Inside this repository you will find files and folders names and numbered adequately.

Open them one by one and go through the course!
