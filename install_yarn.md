# How to install yarn on Mac

## install npm

```
brew install nodebrew
```

## Confirmation after install npm

```
nodebrew -v
```

## install Node.js

```
nodebrew ls-remote
Error: nodebrew setup

nodebrew install-binary {version}
Latest ver: nodebrew install-binary latest
Stable ver: nodebrew install-binary stable
```

## Setup node

```
nodebrew list
nodebrew use {version}
```

## Setting the environment path

- bash

```
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```

- zsh

```
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile
```

## Confirmation after install Node.js

```
node -v
npm -v
```

## install yarn

```
npm install -g yarn
```

or

```
brew install yarn
```

## Confirmation after install yarn

```
yarn -v
yarn --version
```
