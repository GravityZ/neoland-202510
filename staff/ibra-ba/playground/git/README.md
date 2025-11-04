![git](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git

git commands in terminal

## git innit

Initialaces local folder as a repository

```sh
$ git init
Initialized empty Git repository in /Users/thiernoba/workspace/neoland-202510/.git/
```

## git remote add origin repo-url 

Conect the local repository to its origins in Github .

```sh 
$ git remote add origin https://github.com/GravityZ/neoland-202510

```


## git pull 

Pull all the changes from remote (origin) repository.

```sh
$ git pull
```

## git branch -a

show all the branches of the repository

```sh
$ git branch -a
  remotes/origin/main
```

## git branch 

show all the local branches

```sh
$ git branch
* main
```

## git status 

SHow the status of the files in the local repo

```sh 
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/

nothing added to commit but untracked files present (use "git add" to track)

```

## git add content name

adds content to staging

```sh
$ git add staff
```

## git config 

for configure things 


## git commit -m "comentario

Consolidates changes in local repo.

```sh
$ git commit -m "cambios"

```


## git push 

to upload all the local to github

```sh
$ git push
```