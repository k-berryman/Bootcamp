# Intermediate GitHub

## GitHub Pull Request Workflow
Collaboration!! You won't always have access to pushing directly the repo - think of open-source projects. There's a process. 

* Fork the repo 
* Clone our fork - you can do whatever you want to this version
  * git clone ---url---
* Push changes to your fork
  * git remove -v shows cloning automatically changes our remote
  * git push -u origin master
* Then make a PR via GitHub
  * see amount of commits ahead/behind 
  * compare changes 
  * add a description
  * it'll be either accepted or rejected to be merged into the original repo
  * usually from a topic branch
* git pull origin master to get PR changes locally
* git log to see commits
