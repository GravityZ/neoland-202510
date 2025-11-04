 # BASH

 Commands is **bash** terminal.

 ![bash image](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png)

 ## pwd

 path to working directory

 ```sh
 $ pwd
  /Users/thiernoba/workspace 
 ```

 ## ls 

 list files and folders (directory)

 ```sh
 $ ls 
    Desktop		Library		Pictures	
    Documents	Movies		Public

 ```

 ## ls -l

 lis files and folders with details

 ```sh
 $ ls -l
    total 0
drwx------@   4 thiernoba  staff   128 Jun  9 12:28 Applications
drwx------@  16 thiernoba  staff   512 Nov  3 22:38 Desktop
drwx------+   6 thiernoba  staff   192 Aug 21 18:47 Documents
drwx------+ 109 thiernoba  staff  3488 Oct  9 20:29 Downloads
drwx------@  90 thiernoba  staff  2880 Jul 26 20:03 Library
drwx------    5 thiernoba  staff   160 Jul 13 00:10 Movies
drwx------+   4 thiernoba  staff   128 Apr 30  2025 Music
drwx------+   5 thiernoba  staff   160 May  1  2025 Pictures
drwxr-xr-x+   4 thiernoba  staff   128 Apr 30  2025 Public
drwxr-xr-x    2 thiernoba  staff    64 May 28 00:26 VirtualBox VMs
drwxr-xr-x    3 thiernoba  staff    96 Nov  3 23:17 workspace
 ```

 ## mkdir (folder name)

create a empty folder with the given name


```sh
$ mkdir workspace 
```

## touch

create a empty file with the given name

```sh
$ touch index.html
```

## chmod rwx file name/folder

upgrade or update permisions of the desired file 

```sh
$ chmod 700 readme.txt
```

## nano file-name

open or create a file in nano editor

```sh
$ nano readme.txt
```

## rm file-name

for remove a file

```sh
$ rm readme.txt
```

## rmdir folder-name

remove a empty folder
 
 ```sh
 $ rmdir workspace
 ```

 ## cd

 to move / change directory

 ```sh
 $ cd Desktop
 ```

 ## ls -a

 to view hidden files/folders

 ```sh
 $ ls -a
 ```
