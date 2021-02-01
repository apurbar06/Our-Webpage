# Our Webpage

There is a master branch. There is also a development branch created from master branch. For individuals there are four branchs created from development branch.

 - master
   - development
     - dev/apurba
     - dev/sumit
     - dev/himansu
     - dev/mohit
     
Each of us will work in our indivisual branch as well as commit and push from that branch itself. This is for avoiding code conflict.

Then we will merge all our individual branches for a feature into development branch to test if that feature is working fine or not. If we feel everything is fine then we will merge that feature into master branch.
     

## Some git command

```git
git clone https://github.com/apurbar06/Our-Webpage.git            // to target this existing repository and create a clone
git checkout -b branch_name                                       // to create a new branch
git checkout branch_name                                          // for switching between branches
git status                                                        // to display the state of the working directory
git add .                                                         // to add all changes in the working directory
git commit "commit message"                                       // to save changes
git push origin individual_branch                                 // to pushe the work to a remote repository
```
